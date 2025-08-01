import NextAuth, {AuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

type ServerData = {
    id: string;
    full_name: string;
    email: string;
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
            authType?: 'google' | 'custom';
        };
    }

    interface User {
        serverData?: ServerData;
        authType?: 'google' | 'custom';
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        serverData?: ServerData;
        authType?: 'google' | 'custom';
    }
}

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const authString = btoa(`${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`);

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
                                client_email: credentials.email,
                                password: credentials.password,
                                country: {countryCode: "UZ", countryName: "Uzbekistan"}
                            }),
                        }
                    );

                    if (response.ok) {
                        const serverData: ServerData = await response.json();
                        return {
                            id: serverData.id,
                            email: serverData.email,
                            name: serverData.full_name,
                            serverData: serverData,
                            authType: 'custom'
                        };
                    }

                    return null;
                } catch (error) {
                    console.error('Login error:', error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({user, account}) {
            if (account?.provider === 'google') {
                if (!user.email || !user.name) return false;

                const authString = btoa(`${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`);

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
                        user.authType = 'google';
                        return true;
                    }
                    return false;
                } catch {
                    return false;
                }
            }

            if (account?.provider === 'credentials') {
                return true;
            }

            return false;
        },

        async jwt({token, user}) {
            if (user?.serverData) token.serverData = user.serverData;
            if (user?.authType) token.authType = user.authType;
            return token;
        },

        async session({session, token}) {
            if (token.serverData) session.user.serverData = token.serverData;
            if (token.authType) session.user.authType = token.authType;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};