'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { updateBeerDetailsApi } from '@/services/collectionService';

export type TBeerRatingRangeProps = {
    previousRating?: number;
};

export const BeerRatingRange: React.FC<TBeerRatingRangeProps> = ({ previousRating }) => {
    const params = useParams();
    const { data: session } = useSession();

    const email = session?.user?.email;
    const beerId = Number.parseInt(String(params.beerId));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!email || !beerId) return;
        updateBeerDetailsApi({
            collectionItem: {
                email,
                beer_id: beerId,
                rating: Number.parseInt(event.currentTarget.value)
            }
        });
    };

    return <input className="bc-beer-rating-range" type="range" min="0" max="5" step="1" defaultValue={previousRating} onChange={handleChange} />;
};
