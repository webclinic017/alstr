const Axios = require('axios');

const axiosInstance = (baseUrl, config) => Axios.create({baseUrl: baseUrl, config?: config})

module.exports axiosInstance;