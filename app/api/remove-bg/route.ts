import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const userID = formData.get("userId") as string;
    const file = formData.get("file") as File;
    const authString = Buffer.from(
        `${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`
    ).toString("base64");

    if (!file) {
        return NextResponse.json({error: "No file uploaded"}, {status: 400});
    }

    if (!userID) {
        return NextResponse.json({error: "User not authenticated"}, {status: 401});
    }

    try {
        const buffer = Buffer.from(await file.arrayBuffer());

        const removeBgFormData = new FormData();
        removeBgFormData.append("size", "auto");
        removeBgFormData.append("image_file", new Blob([buffer]), file.name);

        const removeResponse = await fetch("https://api.remove.bg/v1.0/removebg", {
            method: "POST",
            headers: {
                "X-Api-Key": `${process.env.NEXT_PUBLIC_REMOVE_BG}`,
            },
            body: removeBgFormData,
        });

        if (!removeResponse.ok) {
            const errorText = await removeResponse.text();
            return NextResponse.json({error: errorText}, {status: removeResponse.status});
        }

        const resultBuffer = await removeResponse.arrayBuffer();

        const uploadFormData = new FormData();
        uploadFormData.append("clientId", userID);
        uploadFormData.append("file", new File([resultBuffer], "no-bg.png", {type: "image/png"}));

        const uploadResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/b2b/upload`, {
            method: "POST",
            headers: {
                "Authorization": `Basic ${authString}`,
                "accept": "*/*",
            },
            body: uploadFormData,
        });

        const uploadTextResult = await uploadResponse.text();

        console.log("Upload Response:", uploadTextResult);

        if (!uploadResponse.ok) {
            return NextResponse.json({error: uploadTextResult}, {status: uploadResponse.status});
        }

        return new NextResponse(Buffer.from(resultBuffer), {
            status: 200,
            headers: {
                "Content-Type": "image/png",
            },
        });
    } catch (error) {
        console.error("RemoveBG or Upload error:", error);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}