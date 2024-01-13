import type { Metadata } from 'next';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { getEnvironmentVariables } from '@/tools/tools';

import packageJson from '@/package.json';
import './globals.scss';

const PAGE_TITLE = `${getEnvironmentVariables('applicationName')} - Next.JS Example App`;

export const metadata: Metadata = {
    metadataBase: new URL('https://www.example-beer-collection-app.com'),
    title: PAGE_TITLE,
    description: packageJson.description,
    authors: {
        name: packageJson.author
    },
    other: {
        version: packageJson.version,
        license: packageJson.license
    },
    icons: './favicon.ico',
    openGraph: {
        title: PAGE_TITLE,
        description: packageJson.description
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: PAGE_TITLE,
        description: packageJson.description,
        specialty: 'Beercraft'
    };

    return (
        <html lang="en">
            <body className="bc-beer-collection-app">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
