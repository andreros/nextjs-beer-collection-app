const axios = require('axios').default;

export const nextApi = axios.create({
    baseURL: 'http://localhost:3000/api'
});
