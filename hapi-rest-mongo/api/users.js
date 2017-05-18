const ApiConfig = require('./config') 
const GeneralConfig = require('../config');
const Users = require('../model/users').default;


let users = new Users();


exports.init = function (server) {
  
  // bring your own validation function
  let validate = function (decoded, request, callback) {

      let error,
          credentials = users.validate(decoded.userId);

      if (credentials.length < 1) {
        return callback(error, false, credentials);
      }

      return callback(error, true, credentials[0]);

  };

  server.ext('onRequest', function (request, reply) {
      // Check header example 
      if(request.headers.example){
        reply.continue();
      }
      reply({
          statusCode: 500,
          message: "No found header called example"
      });
  });

  server.register(ApiConfig.plugins, function (err) {

    if(err){
      console.log(err);
    }

    server.auth.strategy('jwt', 'jwt',
    { key: GeneralConfig.privateKey, 
      validateFunc: validate,            
      verifyOptions: { algorithms: [ 'HS256' ] } // Pick a strong algorithm
    });

    server.auth.default('jwt');

    // Send token of user with email y password obtained for post
    server.route({
      method: 'POST',
      path: '/login',
      config: { auth: false },
      handler: function (request, reply) {

        let { user, token } = users.login(request.payload.email,request.payload.password);

        reply({
          statusCode: 0,
          item: user,
          token: token
        })
      }
    })

    // Get Authorization in Headers 
    server.route({
      method: 'GET',
      path: '/users',
      config: { auth: 'jwt', plugins: {'hapiAuthorization': {role: 'ADMIN'}} }, // Too is possible multiple ['MANAGER',ADMIN]
      handler: function (request, reply) {
        reply({
          statusCode: 0,
          list: users.list()
        })
        .header("Authorization", request.headers.authorization)
      }
    })

    server.route({
      method: 'GET',
      path: '/users/{id}',
      config: { auth: 'jwt', plugins: {'hapiAuthorization': {role: 'ADMIN'}} },
      handler: function (request, reply) {
        reply({
          statusCode: 0,
          item: users.detail(request.params.id)
        })
        .header("Authorization", request.headers.authorization)
      }
    })

    server.route({
      method: 'POST',
      path: '/users',
      config: { auth: 'jwt', plugins: {'hapiAuthorization': {role: 'ADMIN'}} },
      handler: function (request, reply) {
        reply({
          statusCode: 0,
          item: users.save(request.payload)
        })
        .header("Authorization", request.headers.authorization)
      }
    })

    server.route({
      method: 'PUT',
      path: '/users/{id}',
      config: { auth: 'jwt', plugins: {'hapiAuthorization': {role: 'ADMIN'}} },
      handler: function (request, reply) {
        reply({
          statusCode: 0,
          item: users.update(request.params.id,request.payload)
        })
        .header("Authorization", request.headers.authorization)
      }
    })

    server.route({
      method: 'DELETE',
      path: '/users/{id}',
      config: { auth: 'jwt', plugins: {'hapiAuthorization': {role: 'ADMIN'}} },
      handler: function (request, reply) {
        reply({
          statusCode: 0,
          item: users.delete(request.params.id)
        })
        .header("Authorization", request.headers.authorization)
      }
    })

    server.route({
      method: 'GET',
      path: '/testDocumentMongo',
      handler: function (request, reply) {
        reply({
          statusCode: 0,
          list: Users.testDocumentMongo(server.plugins['hapi-mongodb'])
        })
      }
    })

  });

}
