const Bcrypt = require('bcrypt'); 
const saltRounds = 10;

let users = [
    {
        id: 4,
        names: 'Stivenson',
        surnames: 'Rincon',
        number_identification: 1234,
        role: 'ADMIN',
        email: 'stivenson.rpm@gmail.com',
        password: Bcrypt.hashSync('123456', saltRounds)
    },
    {
        id: 5,
        names: 'Pepito',
        surnames: 'Perez',
        number_identification: 5678,
        role: 'ADMIN',
        email: 'pepito@gmail.com',
        password: Bcrypt.hashSync('123456', saltRounds)
    }
]

module.exports = users;