'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { IBeer } from '@/models/Beer';
import { addBeerToCollectionApi, getIsBeerInCollectionApi, removeBeerFromCollectionApi } from '@/services/collectionService';

export type TAddRemoveToCollectionButton = {
    beer: IBeer;
};

export const AddRemoveToCollectionButton: React.FC<TAddRemoveToCollectionButton> = ({ beer }) => {
    const params = useParams();
    const { data: session } = useSession();
    const [isBeerInCollection, setIsBeerInCollection] = useState(false);

    const email = session?.user?.email;
    const beerId = Number.parseInt(String(params.beerId));

    const handleClick = () => {
        if (!email || !beerId) return;
        if (isBeerInCollection) {
            removeBeerFromCollectionApi({ email, beerId });
            setIsBeerInCollection(false);
        } else {
            addBeerToCollectionApi({
                collectionItem: {
                    email,
                    beer_id: beerId,
                    name: beer.name,
                    image_url: beer.image_url,
                    tagline: beer.tagline,
                    description: beer.description,
                    brewers_tips: beer.brewers_tips,
                    first_brewed: beer.first_brewed,
                    rating: 0
                }
            });
            setIsBeerInCollection(true);
        }
    };

    useEffect(() => {
        if (!email || !beerId) return;
        // :( SAD timeout Workaround for Prisma SQLite concurrent calls bug...
        const t = setTimeout(() => {
            getIsBeerInCollectionApi({ email, beerId }).then((response) => {
                setIsBeerInCollection(response.data.isBeerInCollection);
            });
            clearTimeout(t);
        }, 500);
    }, [email, beerId]);

    if (!email || !beerId) return <></>;

    return (
        <button className="bc-add-remove-to-collection-button bc-button bc-button--primary bc-button--sm" type="button" onClick={handleClick}>
            {isBeerInCollection ? <>Remove from my collection</> : <>Add to collection</>}
        </button>
    );
};
