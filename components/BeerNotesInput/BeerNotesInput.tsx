'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { getBeerDetailsApi, updateBeerDetailsApi } from '@/services/collectionService';

export type TBeerNotesInputProps = {
    placeholder?: string;
};

export const BeerNotesInput: React.FC<TBeerNotesInputProps> = ({ placeholder }) => {
    const params = useParams();
    const { data: session } = useSession();
    const [notes, setNotes] = useState('');

    const email = session?.user?.email;
    const beerId = Number.parseInt(String(params.beerId));

    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        if (!email || !beerId) return;
        updateBeerDetailsApi({
            collectionItem: {
                email,
                beer_id: beerId,
                notes: event.target.value
            }
        });
        setNotes(event.target.value);
    };

    useEffect(() => {
        if (!email || !beerId) return;
        // :( SAD timeout Workaround for Prisma SQLite concurrent calls bug...
        const t = setTimeout(() => {
            getBeerDetailsApi({ email, beerId }).then((response) => {
                setNotes(response.data.collectionItem?.notes ?? '');
                clearTimeout(t);
            });
        }, 750);
    }, [email, beerId]);

    if (!email || !beerId) return <></>;

    return (
        <div className="bc-beer-notes-input">
            <div className="bc-beer-notes-input__label">My notes</div>
            <textarea className="bc-beer-notes-input__control" placeholder={placeholder} onBlur={handleBlur} defaultValue={notes} />
        </div>
    );
};
