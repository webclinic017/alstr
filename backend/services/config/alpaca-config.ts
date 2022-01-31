const Alpaca = require("@alpacahq/alpaca-trade-api");

const alpacaApi = new Alpaca({
  keyId: "",
  secretKey: "",
  paper: "",
});

module.exports = alpacaApi;
