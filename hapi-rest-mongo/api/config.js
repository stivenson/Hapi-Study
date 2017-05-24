var Config = {
    plugins : [
        {
            register: require('hapi-auth-jwt2')
        },
        {
            register: require('hapi-mongodb'),
            options: {
                url: 'mongodb://localhost:27017/admin',
                settings: {
                    poolSize: 10
                },
                decorate: true
            }            
        },
        {
            register: require('hapi-authorization'),
            options: {
              roles: ['ADMIN', 'MANAGER', 'EMPLOYEE']  // By setting to false, you are not using an authorization hierarchy and you do not need to specify all the potential roles here 
            }
        }
    ]
}

module.exports = Config;
