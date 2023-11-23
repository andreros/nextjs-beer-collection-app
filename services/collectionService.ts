import { AxiosPromise } from 'axios';

import {
    IAddBeerToCollectionParams,
    IAddBeerToCollectionApiResponse,
    IGetBeerCollectionParams,
    IGetBeerCollectionApiResponse,
    IGetBeerDetailsParams,
    IGetBeerDetailsApiResponse,
    IGetIsBeerInCollectionParams,
    IGetIsBeerInCollectionApiResponse,
    IRemoveBeerFromCollectionParams,
    IRemoveBeerFromCollectionApiResponse,
    IUpdateBeerDetailsParams, 
    IUpdateBeerDetailsApiResponse
} from '@/models/Collection';
import { nextApi } from '@/services/nextApi';

export const addBeerToCollectionApi = (params: IAddBeerToCollectionParams): AxiosPromise<IAddBeerToCollectionApiResponse> => {
    const { collectionItem } = params;
    return nextApi({ method: 'post', url: '/collection/addBeerToCollection', data: collectionItem });
};

export const getBeerCollectionApi = (params: IGetBeerCollectionParams): AxiosPromise<IGetBeerCollectionApiResponse> => {
    const { email, search } = params;
    return nextApi({ method: 'get', url: '/collection/getBeerCollection', params: { email, search } });
};

export const getBeerDetailsApi = (params: IGetBeerDetailsParams): AxiosPromise<IGetBeerDetailsApiResponse> => {
    const { email, beerId } = params;
    return nextApi({ method: 'get', url: '/collection/getBeerDetails', params: { email, beerId } });
};

export const getIsBeerInCollectionApi = (params: IGetIsBeerInCollectionParams): AxiosPromise<IGetIsBeerInCollectionApiResponse> => {
    const { email, beerId } = params;
    return nextApi({ method: 'get', url: '/collection/getIsBeerInCollection', params: { email, beerId } });
};

export const removeBeerFromCollectionApi = (params: IRemoveBeerFromCollectionParams): AxiosPromise<IRemoveBeerFromCollectionApiResponse> => {
    const { email, beerId } = params;
    return nextApi({ method: 'delete', url: '/collection/removeBeerFromCollection', params: { email, beerId } });
};

export const updateBeerDetailsApi = (params: IUpdateBeerDetailsParams): AxiosPromise<IUpdateBeerDetailsApiResponse> => {
    const { collectionItem } = params;
    return nextApi({ method: 'put', url: '/collection/updateBeerDetails', data: collectionItem });
};
