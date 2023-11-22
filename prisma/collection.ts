import { ICollectionItem } from '@/models/Collection';
import { getPrismaClient } from '@/prisma/prisma';

/**
 * Method responsible for adding a given beer from a user collection.
 * @param {ICollectionItem} collectionItem The beer (collection item) data. 
 * @returns Boolean value indicating if the beer was added to the user collection or not.
 */
export const addBeerToCollection = async (collectionItem: ICollectionItem): Promise<boolean> => {
    const prismaClient = getPrismaClient();

    try {
        await prismaClient.collection.create({ data: collectionItem });
    } catch (error) {
        console.error('Something went wrong while executing the `addBeerToCollection` method. Details: ', error);
        return false;
    }
    return true;
};

/**
 * Method responsible for verifying if a given beer is in the user collection.
 * @param {string} email The user email. 
 * @param {number} beer_id The beer ID. 
 * @returns Boolean value indicating if the beer is in the user collection or not.
 */
export const getIsBeerInCollection = async (email: string, beer_id: number): Promise<boolean> => {
    const prismaClient = getPrismaClient();
    let count = 0;
    
    count = await prismaClient.collection.count({
        where: { email, beer_id }
    });

    return count > 0;
};

/**
 * Method responsible for removing a given beer from a user collection.
 * @param {string} email The user email. 
 * @param {number} beer_id The beer ID. 
 * @returns Boolean value indicating if the beer was removed from the user collection or not.
 */
export const removeBeerFromCollection = async (email: string, beer_id: number): Promise<boolean> => {
    const prismaClient = getPrismaClient();

    try {
        await prismaClient.collection.delete({
            where: {
                email_beer_id: {
                    email,
                    beer_id
                }
            }
        });
    } catch (error) {
        console.error('Something went wrong while executing the `removeBeerFromCollection` method. Details: ', error);
        return false;
    }
    return true;
};
