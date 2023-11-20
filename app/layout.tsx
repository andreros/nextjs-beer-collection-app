import type { Metadata } from 'next';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { getEnvironmentVariables } from '@/tools/tools';

import packageJson from '@/package.json';
import './globals.scss';

export const metadata: Metadata = {
    title: getEnvironmentVariables('applicationName'),
    description: packageJson.description,
    authors: {
        name: packageJson.author
    },
    other: {
        version: packageJson.version,
        license: packageJson.license
    },
    icons: './favicon.ico'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bc-beer-collection-app">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
