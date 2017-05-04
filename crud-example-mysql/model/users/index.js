const Resources = require('../Resources').default;
const User = require('./user').default;     
let dataUsers = require('../../data/users'); // Simulate data of database
const jwt = require('jsonwebtoken');
const GeneralConfig = require('../../config');
const ApiConfig = require('../../api/config'); 

class Users extends Resources {

    constructor() {
        super();
        this._list = [];
        for(let user of dataUsers)
            this._list.push(new User(user));
    }

    login(email,password){
        // find user in array
        let arruser = dataUsers.filter(u => {
          let hash = User.hasfOfPassword(password);
          if(u.email === email && User.compareSyncPassword(password, u.password)) return u
        }); 
        let user = arruser[0] || {};
        let token;
        if(user.password) delete user.password;
        if(user.id != undefined)
          token = jwt.sign({ userId: user.id }, GeneralConfig.privateKey, { algorithm: 'HS256'});
        else
          token = false;
          return { user: user, token: token};
    }

    list(){
        return this._list;
    }


    validate(userId){
        return dataUsers.filter(u => { if(u.id == userId) return u });
    }

    detail(id){
        let usersF = dataUsers.filter(u => { if(u.id == id) return u });
        return usersF.length < 1 ? false : new User(usersF[0]);
    }

    save(props){
        try{
            dataUsers.push(new User(props));
            return dataUsers[dataUsers.length - 1];
        }catch(err){
            return false;
        }
    }

    update(id,props){
        try{
            let index = dataUsers.findIndex(u => u.id == id);
            dataUsers[index].names = props.names;
            dataUsers[index].surnames = props.surnames;
            dataUsers[index].number_identification = props.number_identification;
            dataUsers[index].role = props.role;
            dataUsers[index].email = props.email;
            dataUsers[index].password = props.password;
            return dataUsers[index];
        }catch(err){
            return false;
        }
    }

    delete(id){
        try{
            let index = dataUsers.findIndex(u => u.id == id);
            delete dataUsers[index];
            return dataUsers;
        }catch(err){
            return false;
        }
    }

    static testConnectTableUser(plugin){

        plugin.pool.getConnection(function(err, connection) {
            // Use the connection
            console.log(err);
            connection.query(
                'SELECT DATABASE();',
                function(err, rows) {
                    if(err)
                        throw new Error(err)
                }
            )

            // And done with the connection.
            return connection.release();
        });
    }

}

exports.default = Users;
