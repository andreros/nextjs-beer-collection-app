import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.googleClientId ?? '',
            clientSecret: process.env.googleClientSecret ?? ''
        })
    ]
});

export { handler as GET, handler as POST };
