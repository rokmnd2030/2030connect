import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { hashPassword } from "@/utils/password";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { lable: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {

                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error('Missing credentials');
                }

                let user = null;

                const pwHash = await hashPassword(credentials.password);

                return user;
            },
        })
    ],
});