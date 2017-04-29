let Lab = require('lab')
let lab = exports.lab = Lab.script()
let code = require('code');
let server = require('../app')

lab.experiment('Test for RESTFUL user services', function() {
  
  lab.test('GET users', function(done) {
    let options = {
      method: 'GET',
      url: '/users'
    }
    server.inject(options, function(response) {
      let result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      //code.expect(result.mensaje).to.equal("") optional
      done()
    })
  })

  lab.test('GET users/:id', function(done) {
    let options = {
      method: 'GET',
      url: '/users/1'
    }
    server.inject(options, function(response) {
      let result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      //code.expect(result.mensaje).to.equal("") optional
      done()
    })
  })

  lab.test('POST users', function(done) {
    let options = {
      method: 'POST',
      url: '/users',
      payload: {
        names: 'Stivenson',
        surnames: 'Rincon',
        number_identification: '123456' 
      }
    }
    server.inject(options, function(response) {
      let result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      //code.expect(result.mensaje).to.equal("")
      done()
    })
  })


  lab.test('PUT users', function(done) {
    let options = {
      method: 'PUT',
      url: '/users/1',
      payload: {
        names: 'Stivenson',
        surnames: 'Rincon',
        number_identification: '123456' 
      }
    }
    server.inject(options, function(response) {
      let result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      //code.expect(result.mensaje).to.equal("")
      done()
    })
  })


  lab.test('DELETE users', function(done) {
    let options = {
      method: 'DELETE',
      url: '/users/1'
    }
    server.inject(options, function(response) {
      let result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      //code.expect(result.mensaje).to.equal("")
      done()
    })
  })


  lab.test('LOGIN', function(done) {
    let options = {
      method: 'POST',
      url: '/login',
      payload: {
        'email': 'stivenson.rpm@gmail.com',
        'password': '123456'
      }
    }
    server.inject(options, function(response) {
      let result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      //code.expect(result.mensaje).to.equal("")
      done()
    })
  })

})