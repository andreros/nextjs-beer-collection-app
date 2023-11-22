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
        let message = 'Something went wrong while executing the `addBeerToCollection` method.';
        console.error('ERROR: ', message);
        if (error instanceof Error) {
            message = error.message;
            console.error('DETAILS: ', message);
        }
        throw new Error(message);
    }
    return true;
};

/**
 * Method responsible for getting a given beer details.
 * @param {string} email The user email. 
 * @param {number} beer_id The beer ID. 
 * @returns {ICollectionItem} The beer details. 
 */
export const getBeerDetails = async (email: string, beer_id: number): Promise<ICollectionItem> => {
    const prismaClient = getPrismaClient();
    
    try {
        const collectionItem = await prismaClient.collection.findUnique({
            where: {
                email_beer_id: {
                    email,
                    beer_id
                }
            }
        }) as ICollectionItem
        return collectionItem;
    } catch (error) {
        let message = 'Something went wrong while executing the `getBeerDetails` method.';
        console.error('ERROR: ', message);
        if (error instanceof Error) {
            message = error.message;
            console.error('DETAILS: ', message);
        }
        throw new Error(message);
    }
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
        let message = 'Something went wrong while executing the `removeBeerFromCollection` method.';
        console.error('ERROR: ', message);
        if (error instanceof Error) {
            message = error.message;
            console.error('DETAILS: ', message);
        }
        throw new Error(message);
    }
    return true;
};

/**
 * Method responsible for updating a given beer details in a user collection.
 * @param {ICollectionItem} collectionItem The beer (collection item) data. 
 * @returns Boolean value indicating if the beer was updated in the user collection or not.
 */
export const updateBeerDetails = async (collectionItem: ICollectionItem): Promise<boolean> => {
    const prismaClient = getPrismaClient();

    try {
        await prismaClient.collection.update({
            data: collectionItem,
            where: {
                email_beer_id: {
                    email: collectionItem.email,
                    beer_id: collectionItem.beer_id
                }
            }
        });
    } catch (error) {
        let message = 'Something went wrong while executing the `updateBeerDetails` method.';
        console.error('ERROR: ', message);
        if (error instanceof Error) {
            message = error.message;
            console.error('DETAILS: ', message);
        }
        throw new Error(message);
    }
    return true;
};
