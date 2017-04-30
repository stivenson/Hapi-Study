const Bcrypt = require('bcrypt'); 
const saltRounds = 10;

const users = [
    {
        id: 4,
        names: 'Stivenson',
        surnames: 'Rincon',
        number_identification: 1234,
        role: 'ADMIN',
        email: 'stivenson.rpm@gmail.com',
        password: Bcrypt.hashSync('123456', saltRounds)
    }
]

module.exports = users;