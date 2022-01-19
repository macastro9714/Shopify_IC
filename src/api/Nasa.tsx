import axios from 'axios';

import config from '../config';

const NasaAPI = axios.create({
    baseURL: config.host,
});

export default NasaAPI;
