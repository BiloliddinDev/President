import NextAuth, {AuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({user}) {
            if (!user.email || !user.name) {
                console.error("Missing email or name for Google account.");
                return false;
            }

            if (!process.env.NEXT_PUBLIC_BASE_URL) {
                console.error("API URL is missing in the environment variables.");
                return false;
            }

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/clients/google/login_or_create`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        client_email: user.email,
                        client_full_name: user.name,
                        country: {
                            countryCode: "UZ",
                            countryName: "Uzbekistan"
                        }
                    }),
                });

                console.log("Backend response:", res);

                if (!res.ok) {
                    const errorMsg = await res.text();
                    console.error("Backend error:", errorMsg);
                    return false;
                }

                return true;
            } catch (err) {
                console.error("Error connecting to backend:", err);
                return false;
            }
        },
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};