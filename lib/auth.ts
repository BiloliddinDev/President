import {signIn} from "next-auth/react";

export async function createUserAndSignIn({
                                              email,
                                              password,
                                              fullName,
                                          }: {
    email: string;
    password: string;
    fullName: string;
}) {
    const authString = btoa(
        `${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`
    );

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/clients/form/create`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${authString}`,
                },
                cache: "no-store",
                body: JSON.stringify({
                    client_email: email,
                    client_password: password,
                    client_full_name: fullName,
                    country: {
                        countryCode: "UZ",
                        countryName: "Uzbekistan",
                    },
                }),
            }
        );

        if (!res.ok) return null;

        const data = await res.json();

        const loginRes = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (loginRes?.ok) return {success: true, data};
        return {success: false, error: "Login failed"};
    } catch (err) {
        console.error("Registration error:", err);
        return null;
    }
}
