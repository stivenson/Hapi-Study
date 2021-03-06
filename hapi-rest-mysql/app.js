var config = require('./config')
var hapi = require('hapi')

// process.env.NODE_ENV = 'pro'; optional use or npm startpro

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