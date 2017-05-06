exports.init = function (server) {
  server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
      reply({
        statusCode: 0,
        list: []
      })
    }
  })

  server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: function (request, reply) {
      reply({
        statusCode: 0,
        item: {'id':request.params.id,'names': 'Stivenson','surnames':'Rincon','number_identification':1234}
      })
    }
  })

  server.route({
    method: 'POST',
    path: '/users',
    handler: function (request, reply) {
      reply({
        statusCode: 0,
        item: {'names': request.payload.names,'surnames':request.payload.surnames,'number_identification':request.payload.number_identification}
      })
    }
  })

  server.route({
    method: 'PUT',
    path: '/users/{id}',
    handler: function (request, reply) {
      reply({
        statusCode: 0,
        item: {'id':request.params.id,'names': request.payload.names,'surnames':request.payload.surnames,'number_identification':request.payload.number_identification}
      })
    }
  })

  server.route({
    method: 'DELETE',
    path: '/users/{id}',
    handler: function (request, reply) {
      reply({
        statusCode: 0,
        item: {'id': request.params.id}
      })
    }
  })





}