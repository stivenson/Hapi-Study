var Lab = require('lab')
var lab = exports.lab = Lab.script()
var code = require('code');
var server = require('../app')

lab.experiment('Pruebas de todas las formas de Bienvenida', function() {
  lab.test('Bienvenido con GET', function(done) {
    var options = {
      method: 'GET',
      url: '/welcome/Zankuda'
    }
    server.inject(options, function(response) {
      var result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      code.expect(result.mensaje).to.equal("Bienvenida(o) Zankuda")
      done()
    })
  })

  lab.test('Bienvenido con POST', function(done) {
    var options = {
      method: 'POST',
      url: '/welcome',
      payload: {
        name: 'Zankuda'
      }
    }
    server.inject(options, function(response) {
      var result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      code.expect(result.mensaje).to.equal("Bienvenida(o) Zankuda")
      done()
    })
  })

})