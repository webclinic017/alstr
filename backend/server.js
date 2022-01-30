const dotenv = require("dotenv");
dotenv.config();
// const AlpacaAPI = require("./services/alpaca/account-api");

const { key, secret } = require("./services/config/env");

console.log(key, secret);
