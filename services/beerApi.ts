import { getEnvironmentVariables } from '@/tools/tools';

const axios = require('axios').default;

export const beerApi = axios.create({
    baseURL: getEnvironmentVariables('beerApiBaseURL')
});
