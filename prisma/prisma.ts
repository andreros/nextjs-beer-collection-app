import { PrismaClient } from '@prisma/client';

let prismaClient: PrismaClient | null = null;

/**
 * Method responsible for returning always the same instance of `prismaClient` variable.
 * @returns {PrismaClient} The singleton Prisma Client instance.
 */
export const getPrismaClient = (): PrismaClient => {
    if (!prismaClient) prismaClient = new PrismaClient();
    return prismaClient;
};
