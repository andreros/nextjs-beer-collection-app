import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AuthenticationButton } from '@/components/AuthenticationButton/AuthenticationButton';
import { MyCollectionLink } from '@/components/MyCollectionLink/MyCollectionLink';
import { Provider } from '@/components/Provider/Provider';

export const Header: React.FC = () => {
    return (
        <header className="bc-header">
            <Link className="bc-header__logo_link" href="/">
                <Image src="/logo.svg" width="80" height="80" alt="Beer collection logo" />
            </Link>
            <div className="bc-header__nav-links">
                <Provider>
                    <MyCollectionLink />
                    <AuthenticationButton />
                </Provider>
            </div>
        </header>
    );
};
