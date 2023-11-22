'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { updateBeerDetailsApi } from '@/services/collectionService';

export type TBeerNotesInputProps = {
    placeholder?: string;
    previousNotes?: string;
};

export const BeerNotesInput: React.FC<TBeerNotesInputProps> = ({ placeholder, previousNotes }) => {
    const params = useParams();
    const { data: session } = useSession();

    const email = session?.user?.email;
    const beerId = Number.parseInt(String(params.beerId));

    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        if (!email || !beerId) return;
        updateBeerDetailsApi({
            collectionItem: {
                email,
                beer_id: beerId,
                notes: event.currentTarget.value
            }
        });
    };

    return <textarea className="bc-beer-notes-input" placeholder={placeholder} onBlur={handleBlur} value={previousNotes} />;
};
