const Joi = require('joi')

function pets (server, options, next) {

    let pet_schema = {
        name : Joi.string().required(),
        age: Joi.number()
    }

    server.route({
        path: '/pets',
        method: 'POST',
        handler: (request, reply) => {
            reply(request.payload);
        },
        config : {
            validate : {
                payload : pet_schema
            }
        }
    })

    /**
     * Endpoint for validate response.
     */
    server.route({
        path: '/pets/1',
        method: 'GET',
        handler: (request, reply) => {
            reply({
                name: 'doug',
                age: 2
            });
        },
        config : {
            auth: 'simple',
            response : {
                schema : pet_schema,
                //Validate 10% of responses
                sample: 10
            }
        }
    })

    next()
}

pets.attributes = {
    name : 'pets'
}

module.exports = pets