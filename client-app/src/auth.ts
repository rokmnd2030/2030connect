import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            authorize: async credentials => {
                const { email, password } = credentials;
                let user = { email: '' }

                return user;
            }
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 24,
    },
    pages: {
        signIn: '/user/signin',
    },
    callbacks: {
        signIn: async () => {
            return true;
        },
        jwt: async ({ token, user }) => {
            return token;
        },
        session: async ({ session, token }) => {
            return session;
        }
    },
    debug: true,
});