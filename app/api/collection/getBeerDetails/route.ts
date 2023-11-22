import { NextRequest, NextResponse } from 'next/server';
import { getBeerDetails } from '@/prisma/collection';

/**
 * GET Method API Request handler function.
 */
export const GET = async (request: NextRequest) => {
    const email = request.nextUrl.searchParams.get('email') ?? '';
    const beerId = Number.parseInt(request.nextUrl.searchParams.get('beerId') ?? '0');

    try {
        const collectionItem = await getBeerDetails(email, beerId);
        return NextResponse.json({ collectionItem }, { status: 200 });
    } catch (error: unknown) {
        let message = 'Unknown error';
        if (error instanceof Error) message = error.message;
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
