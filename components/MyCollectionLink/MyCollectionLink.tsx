'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export const MyCollectionLink: React.FC = () => {
    const { data: session } = useSession();
    const isAuthenticated = !!session?.user?.email;

    if (!isAuthenticated) return <></>;

    return (
        <Link className="bc-my-collection-link" href="/beers/collection">
            My collection
        </Link>
    );
};
