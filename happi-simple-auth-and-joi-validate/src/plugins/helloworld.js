
function helloWorld (server, options, next) {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            let name = request.query.name
            reply(`${options.shall} ${name}`)
        }
    })
    next()
}

helloWorld.attributes = {
    name: 'hello-world'
}

module.exports = helloWorld

