const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({
	host: 'localhost',
	port: 5000
})

const plugins = [
	require('hapi-auth-basic'),
	require('./plugins/auth'),
	{
		register: require('./plugins/helloworld'),
		options: {
			shall: 'Bonjur'
		}
	},
	require('./plugins/pets')
]

server.register(plugins, (err) => {

	if (err) {
		return console.error(err)
	}

	server.start(() => {
		console.log('server started')
	})

})


