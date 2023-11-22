import { AxiosPromise } from 'axios';

import {
    IAddBeerToCollectionParams,
    IAddBeerToCollectionApiResponse,
    IGetIsBeerInCollectionParams,
    IGetIsBeerInCollectionApiResponse,
    IRemoveBeerFromCollectionParams,
    IRemoveBeerFromCollectionApiResponse, 
} from '@/models/Collection';
import { nextApi } from '@/services/nextApi';

export const addBeerToCollectionApi = (params: IAddBeerToCollectionParams): AxiosPromise<IAddBeerToCollectionApiResponse> => {
    const { collectionItem } = params;
    return nextApi({ method: 'post', url: '/collection/addBeerToCollection', data: collectionItem });
};

export const getIsBeerInCollectionApi = (params: IGetIsBeerInCollectionParams): AxiosPromise<IGetIsBeerInCollectionApiResponse> => {
    const { email, beerId } = params;
    return nextApi({ method: 'get', url: '/collection/getIsBeerInCollection', params: { email, beerId } });
};

export const removeBeerFromCollectionApi = (params: IRemoveBeerFromCollectionParams): AxiosPromise<IRemoveBeerFromCollectionApiResponse> => {
    const { email, beerId } = params;
    return nextApi({ method: 'delete', url: '/collection/removeBeerFromCollection', params: { email, beerId } });
};
