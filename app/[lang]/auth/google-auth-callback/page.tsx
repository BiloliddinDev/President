"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import Cookies from "js-cookie";

interface CountryCookie {
    name: string;
    code: string;
}

const Page = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            const countryString = Cookies.get("country");
            const user = session.user;


            const country: CountryCookie | null = countryString
                ? JSON.parse(countryString)
                : null;


            const postUserData = async () => {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_ADMIN}/api/v1/clients/google/login_or_create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        client_full_name: user.name,
                        client_email: user.email,
                        client_password: "google",
                        country: {
                            countryCode: country?.code || "UZ",
                            countryName: country?.name || "Uzbekistan",
                        },
                    }),
                });

                if (res.ok) {
                    const result = await res.json();
                    console.log("API javobi:", result);
                    router.push("/aaaaaaaaaaaaaaa");
                } else {
                    console.error("Xatolik:", await res.text());
                }
            };

            postUserData();
        }
    }, [session, status, router]);

    return <p className="text-center mt-10 text-lg">Loading...</p>;
};

export default Page;
