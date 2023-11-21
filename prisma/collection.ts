import { ICollectionItem } from '@/models/Collection';
import { prismaClient } from '@/prisma/prisma';

/**
 * Method responsible for verifying if a given beer is in the user collection.
 * @param {string} email The user email. 
 * @param {number} beer_id The beer ID. 
 * @returns Boolean value indicating if the beer is in the user collection or not.
 */
export const getIsBeerInCollection = async (email: string, beer_id: number): Promise<boolean> => {
    let count = 0;
    
    count = await prismaClient.collection.count({
        where: { email, beer_id }
    });

    return count > 0;
};

export const insertCollectionItem = async () => {
    const collectionItem: ICollectionItem = {
                email: 'andreros@gmail.com',
                beer_id: Math.floor(Math.random() * 999999999),
                name: 'TESTE',
                image_url: 'https://placehold.co/200x200',
                tagline: 'TESTE',
                description: 'TESTE',
                brewers_tips: 'TESTE',
                first_brewed: '06/1079',
                rating: 0
            };
    try {
        await prismaClient.collection.create({ data: collectionItem });
    } catch (error) {
        console.error('Something went wrong while executing the `insertBeerIntoCollection` method. Details: ', error);
    }
};
