import {NextRequest, NextResponse} from "next/server";
import fs from "fs";

const ApiKeys = [
    // "CBTcx6AYxbJL8jZsuMUenu33", "yHac4GPy3Ngmizi5jFfJbWTr", "hTVA12Ymb7oWx82SyD5Nrn4W"
];

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
        return NextResponse.json({error: "No file uploaded"}, {status: 400});
    }

    let errorcount = 0;

    const buffer = Buffer.from(await file.arrayBuffer());
    const removeBgFormData = new FormData();
    removeBgFormData.append("size", "auto");
    removeBgFormData.append("image_file", new Blob([buffer]), file.name);

    try {
        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
            method: "POST",
            headers: {
                "X-Api-Key": `${process.env.NEXT_PUBLIC_REMOVE_BG}`,
            },
            body: removeBgFormData,
        });

        if (!response.ok) {
            errorcount = errorcount + 1;

            if (errorcount < ApiKeys.length) {
                const retryResponse = await fetch("https://api.remove.bg/v1.0/removebg", {
                    method: "POST",
                    headers: {
                        "X-Api-Key": `${process.env.NEXT_PUBLIC_REMOVE_BG}`,
                    },
                    body: removeBgFormData,
                });

                if (!retryResponse.ok) {
                    const errorText = await retryResponse.text();
                    return NextResponse.json({error: errorText}, {status: retryResponse.status});
                }

                const resultBuffer = await retryResponse.arrayBuffer();
                fs.writeFileSync("public/backend-image/no-bg.png", Buffer.from(resultBuffer));

                return new NextResponse(
                    resultBuffer,
                    {
                        status: 200,
                        headers: {
                            "Content-Type": "image/png",
                        },
                    });
            }

            const errorText = await response.text();
            return NextResponse.json({error: errorText}, {status: response.status});
        }

        const resultBuffer = await response.arrayBuffer();
        fs.writeFileSync("public/backend-image/no-bg.png", Buffer.from(resultBuffer));

        return new NextResponse(
            resultBuffer,
            {
                status: 200,
                headers: {
                    "Content-Type": "image/png",
                },
            });
    } catch {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}