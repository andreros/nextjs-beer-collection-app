'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { getIsBeerInCollectionApi } from '@/services/collectionService';

export const BeerInCollectionBadge: React.FC = () => {
    const params = useParams();
    const { data: session } = useSession();
    const [isBeerInCollection, setIsBeerInCollection] = useState(false);

    const email = session?.user?.email;
    const beerId = Number.parseInt(String(params.beerId));

    useEffect(() => {
        if (!email || !beerId) return;

        getIsBeerInCollectionApi({ email, beerId }).then((response) => {
            setIsBeerInCollection(response?.data?.isBeerInCollection ?? false);
        });
    }, [email, beerId]);

    if (!email || !beerId || !isBeerInCollection) return <></>;

    return <span className="bc-beer-in-collection-badge">[In my collection]</span>;
};
