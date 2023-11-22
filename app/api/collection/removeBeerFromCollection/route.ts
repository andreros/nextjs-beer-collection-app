import { NextRequest, NextResponse } from 'next/server';
import { removeBeerFromCollection } from '@/prisma/collection';

/**
 * DELETE Method API Request handler function.
 */
export const DELETE = async (request: NextRequest) => {
    const email = request.nextUrl.searchParams.get('email') ?? '';
    const beerId = Number.parseInt(request.nextUrl.searchParams.get('beerId') ?? '0');

    try {
        let success = false;
        success = await removeBeerFromCollection(email, beerId);
        return NextResponse.json({ success }, { status: 200 });
    } catch (error: unknown) {
        let message = 'Unknown error';
        if (error instanceof Error) message = error.message;
        return NextResponse.json({ error: message }, { status: 500 });
    }
}