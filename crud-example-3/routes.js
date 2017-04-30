var jwt = require('jsonwebtoken');
var privateKey = '1A2CA2D5845248068786171C0476290E1BC5D6431C44D61209E15BEDE731558E';  // You can generate one in https://www.grc.com/passwords.htm  
let Bcrypt = require('bcrypt');      
let saltRounds = 10;
var users = [
  {
      id: 1,
      names: 'Stivenson',
      surnames: 'Rincon',
      number_identification: 1234,
      email: 'stivenson.rpm@gmail.com',
      password: Bcrypt.hashSync('123456', saltRounds) // pending encrypt password
  }
]

exports.init = function (server) {
  
  // bring your own validation function
  let validate = function (decoded, request, callback) {
      let error,
          credentials = users.filter(u => { if(u.id == decoded.userId) return u }) || {};

      if (!credentials) {
          return callback(error, false, credentials);
      }
   
      return callback(error, true, credentials)
  };

  server.register(require('hapi-auth-jwt2'), function (err) {

    if(err){
      console.log(err);
    }

    server.auth.strategy('jwt', 'jwt',
    { key: privateKey, 
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

        // find user in array
        let arruser = users.filter(u => {
          let hash = Bcrypt.hashSync(request.payload.password, saltRounds);
          if(u.email === request.payload.email && Bcrypt.compareSync(request.payload.password, u.password) ) return u
        }); 
        let user = arruser[0] || {};
        let token;
        if(user.password) delete user.password;
        if(user.id != undefined)
          token = jwt.sign({ userId: user.id }, privateKey, { algorithm: 'HS256'});
        else
          token = false;

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
      config: { auth: 'jwt' },
      handler: function (request, reply) {
        reply({
          statusCode: 0,
          list: []
        })
        .header("Authorization", request.headers.authorization)
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

  });

}