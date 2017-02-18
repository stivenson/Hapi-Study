exports.init = function (server) {
  server.route({
    method: 'GET',
    path: '/welcome/{name}',
    handler: function (request, reply) {
      reply({
        statusCode: 0,
        mensaje: 'Bienvenida(o) ' + request.params.name
      })
    }
  })

  server.route({
    method: 'POST',
    path: '/welcome',
    handler: function (request, reply) {
      reply({
        statusCode: 0,
        mensaje: 'Bienvenida(o) ' + request.payload.name
      })
    }
  })
}