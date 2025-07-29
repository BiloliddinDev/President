import NextAuth, {AuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

type ServerData = {
    id: string;
    client_email: string;
    client_full_name: string;
    country: {
        countryCode: string;
        countryName: string;
    };
    created_at?: string;
    updated_at?: string;
};

declare module "next-auth" {
    interface Session {
        user: {
            id?: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            serverData?: ServerData;
        };
    }

    interface User {
        serverData?: ServerData;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        serverData?: ServerData;
    }
}

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({user}) {
            if (!user.email || !user.name) return false;

            const authString = Buffer.from(
                `${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`
            ).toString('base64');

            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/clients/google/login_or_create`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Basic ${authString}`,
                        },
                        cache: 'no-store',
                        body: JSON.stringify({
                            client_email: user.email,
                            client_full_name: user.name,
                            country: {countryCode: "UZ", countryName: "Uzbekistan"}
                        }),
                    }
                );

                if (response.ok) {
                    user.serverData = await response.json();
                    return true;
                }
                return false;
            } catch {
                return false;
            }
        },

        async jwt({token, user}) {
            if (user?.serverData) token.serverData = user.serverData;
            return token;
        },

        async session({session, token}) {
            if (token.serverData) session.user.serverData = token.serverData;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};