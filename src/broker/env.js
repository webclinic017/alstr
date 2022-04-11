const urls = require("../../../constants/urls");

const __PAPER__ = true;

module.exports = __PAPER__
  ? {
      key: process.env.APCA_KEY_PAPER,
      secret: process.env.APCA_SECRET_PAPER,
      url_account: urls.APCA_ACCOUNT_PAPER,
      url_data: urls.APCA_DATA,
      url_stream_data: urls.APCA_STREAM_DATA_FREE,
      url_stream_crypto: urls.APCA_STREAM_CRYPTO,
    }
  : {
      key: process.env.APCA_KEY_LIVE,
      secret: process.env.APCA_SECRET_LIVE,
      url_account: urls.APCA_ACCOUNT_LIVE,
      url_data: urls.APCA_DATA,
      url_stream_data: urls.APCA_STREAM_DATA_PRO,
      url_stream_crypto: urls.APCA_STREAM_CRYPTO,
    };
