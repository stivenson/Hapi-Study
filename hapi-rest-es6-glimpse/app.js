
var config = require('./config')

// process.env.NODE_ENV = 'pro'; optional use or npm startpro

if (process.env.NODE_ENV !== 'pro') { 
    require('@glimpse/glimpse').init(); // BEFORE of hapi
}

var hapi = require('hapi')

var server = new hapi.Server()
server.connection({ 
  host: config.server.host,
  port: config.server.port
})

var routes = require('./api/users')
routes.init(server, config)

server.start(function () {
  console.log('Server run in:', server.info.uri);
});

if (module.parent) {
  console.log("Call module")
  module.exports = server
}