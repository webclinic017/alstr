const Axios = require('axios');

const axiosInstance = (baseUrl, configs) => Axios.create({baseUrl: baseUrl, configs?: configs})

module.exports = axiosInstance;