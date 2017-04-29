const Resources = require('../Resources').default;
const User = require('./user').default;     
let dataUsers = require('../../data/users'); // Simulate data of database
const jwt = require('jsonwebtoken');
const GeneralConfig = require('../../config');

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

	}

	update(){

	}

	save(){

	}

	delete(){

	}

}

exports.default = Users;
