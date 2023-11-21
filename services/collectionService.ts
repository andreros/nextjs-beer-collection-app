import { AxiosPromise } from 'axios';

import { IGetIsBeerInCollectionParams, IGetIsBeerInCollectionApiResponse } from '@/models/Collection';
import { nextApi } from '@/services/nextApi';

export const getIsBeerInCollectionApi = (params: IGetIsBeerInCollectionParams): AxiosPromise<IGetIsBeerInCollectionApiResponse> => {
    const { email, beerId } = params;
    return nextApi({ method: 'get', url: '/collection/getIsBeerInCollection', params: { email, beerId } });
};

