import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({user}) {
            if (!user.email || !user.name) {
                return false;
            }
            if (!process.env.NEXT_PUBLIC_BASIC_ADMIN) throw new Error('Missing BASIC_ADMIN');
            if (!process.env.NEXT_PUBLIC_BASIC_PASSWORD) throw new Error('Missing BASIC_PASSWORD');


            const authString = Buffer.from(
                `${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`
            ).toString('base64');

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/clients/google/login_or_create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Basic ${authString}`,
                    },
                    cache: 'no-store',
                    body: JSON.stringify({
                        client_email: user.email,
                        client_full_name: user.name,
                        country: {
                            countryCode: "UZ",
                            countryName: "Uzbekistan"
                        }
                    }),
                });

                if (response.ok) {
                    return true;
                } else {
                    console.error("Server xatoligi:", response.status);
                    return false;
                }
            } catch (error) {
                console.error("Ulanish xatoligi:", error);
                return false;
            }
        },
    },
});

export {handler as GET, handler as POST};