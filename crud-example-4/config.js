var config = {};
if (process.env.NODE_ENV == 'pro') {
  config = {
    server: {
      host: 'localhost',
      port: process.env.PORT || 3000
    }
  }
}
if (process.env.NODE_ENV == 'dev' || !process.env.NODE_ENV) {
  config = {
    server: {
      host: 'localhost',
      port: process.env.PORT || 3010
    }
  }
}
if (process.env.NODE_ENV == 'test') {
  config = {
    server: {
      host: 'localhost',
      port: process.env.PORT || 3020
    },
  }
}

module.exports = config