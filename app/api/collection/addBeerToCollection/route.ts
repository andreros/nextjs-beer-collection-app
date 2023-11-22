import { NextRequest, NextResponse } from 'next/server';
import { addBeerToCollection } from '@/prisma/collection';

/**
 * POST Method API Request handler function.
 */
export const POST = async (request: NextRequest) => {
    try {
        const collectionItem = await request.json();
        let success = false;
        success = await addBeerToCollection(collectionItem);
        if (success) return NextResponse.json({ collectionItem }, { status: 200 });
        return NextResponse.json({ error: 'The sent data is invalid or entity already exists.' }, { status: 500 });
    } catch (error: unknown) {
        let message = 'Unknown error';
        if (error instanceof Error) message = error.message;
        return NextResponse.json({ error: message }, { status: 500 });
    }
}