import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import { getEnvironmentVariables } from '@/tools/tools';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: getEnvironmentVariables('googleClientId') ?? '',
            clientSecret: getEnvironmentVariables('googleClientSecret') ?? ''
        })
    ]
});

export { handler as GET, handler as POST };
