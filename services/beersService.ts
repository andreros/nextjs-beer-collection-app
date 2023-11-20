import { AxiosPromise } from 'axios';

import { IBeer, IGetBeersParams, IGetBeerParams } from '@/models/Beer';
import { api } from '@/services/api';
import { getEnvironmentVariables } from '@/tools/tools';

export const getBeersApi = (params?: IGetBeersParams): AxiosPromise<IBeer[]> => {
    const { beer_name, page = 1, per_page = Number.parseInt(getEnvironmentVariables('itemsPerPage') || '10') } = params || {}; 
    return api({ method: 'get', url: '/beers', params: { beer_name, page, per_page } });
};

export const getBeerApi = (params: IGetBeerParams): AxiosPromise<IBeer> => {
    const { id } = params;
    return api({ method: 'get', url: `/beers/${id}` });
};
