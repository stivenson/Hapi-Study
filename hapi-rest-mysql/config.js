var config = {};
let privateKey = '1A2CA2D5845248068786171C0476290E1BC5D6431C44D61209E15BEDE731558E';  // You can generate one in https://www.grc.com/passwords.htm  

if (process.env.NODE_ENV == 'pro') {
  config = {
    server: {
      host: 'localhost',
      port: process.env.PORT || 3000
    },
    privateKey: privateKey
  }
}
if (process.env.NODE_ENV == 'dev' || !process.env.NODE_ENV) {
  config = {
    server: {
      host: 'localhost',
      port: process.env.PORT || 3010
    },
    privateKey: privateKey
  }
}
if (process.env.NODE_ENV == 'test') {
  config = {
    server: {
      host: 'localhost',
      port: process.env.PORT || 3020
    },
    privateKey: privateKey
  }
}

module.exports = config