'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { getBeerDetailsApi, updateBeerDetailsApi } from '@/services/collectionService';

export const BeerRatingRange: React.FC = () => {
    const params = useParams();
    const { data: session } = useSession();
    const [rating, setRating] = useState('0');

    const email = session?.user?.email;
    const beerId = Number.parseInt(String(params.beerId));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!email || !beerId) return;
        updateBeerDetailsApi({
            collectionItem: {
                email,
                beer_id: beerId,
                rating: Number.parseInt(event.target.value)
            }
        });
        setRating(event.target.value);
    };

    useEffect(() => {
        if (!email || !beerId) return;
        // :( SAD timeout Workaround for Prisma SQLite concurrent calls bug...
        const t = setTimeout(() => {
            getBeerDetailsApi({ email, beerId }).then((response) => {
                setRating(response.data.collectionItem?.rating?.toString() ?? '0');
                clearTimeout(t);
            });
        }, 1000);
    }, [email, beerId]);

    if (!email || !beerId) return <></>;

    return (
        <div className="bc-beer-rating-range">
            <div className="bc-beer-rating-range__label">My rating</div>
            <input className="bc-beer-rating-range__control" type="range" min="0" max="5" step="1" value={rating} onChange={handleChange} />
        </div>
    );
};
