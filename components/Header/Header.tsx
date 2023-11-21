'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SessionProvider } from 'next-auth/react';

import { AuthenticationButton } from '@/components/AuthenticationButton/AuthenticationButton';

export const Header: React.FC = () => {
    return (
        <header className="bc-header">
            <Link className="bc-header__logo_link" href="/">
                <Image src="/logo.svg" width="80" height="80" alt="Beer collection logo" />
            </Link>
            <SessionProvider>
                <AuthenticationButton />
            </SessionProvider>
        </header>
    );
};
