import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => {
    return (
        <header className="bc-header">
            <Link className="bc-header__logo_link" href="/">
                <Image src="/logo.svg" width="80" height="80" alt="Beer collection logo" />
            </Link>
        </header>
    );
};
