import { NextRequest, NextResponse } from 'next/server';
import { getBeerCollection } from '@/prisma/collection';

/**
 * GET Method API Request handler function.
 */
export const GET = async (request: NextRequest) => {
    const email = request.nextUrl.searchParams.get('email') ?? '';
    const search = request.nextUrl.searchParams.get('search');

    try {
        const collection = await getBeerCollection(email, search);
        return NextResponse.json({ collection }, { status: 200 });
    } catch (error: unknown) {
        let message = 'Unknown error';
        if (error instanceof Error) message = error.message;
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
