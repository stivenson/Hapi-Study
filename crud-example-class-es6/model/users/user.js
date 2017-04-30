const Bcrypt = require('bcrypt'); 
const saltRounds = 10;

class User {
	constructor(props) {
		this._id = props.id || false;
		this._names = props.names || '';
		this._surnames = props.surnames || ''; 
		this._number_identification = props.number_identification || '';
		this._role = props.role || '';
		this._email = props.email || '';
		this._password = props.password || ''; 
	}

	get id(){
		return this._id;
	}

	get names(){
		return this._name;
	}

	get surnames(){
		return this._surnames;
	}

	get number_identification(){
		return this._number_identification;
	}

	get role(){
		return this._role;
	}

	get email(){
		return this._email;
	}
  
	get password(){
		return this._password;
	}  

	set password(password){
		this._password = Bcrypt.hashSync(password, saltRounds);
	}

	static hasfOfPassword(password){
		return Bcrypt.hashSync(password, saltRounds);
	}

	static compareSyncPassword(password1,password2){
		return Bcrypt.compareSync(password1, password2);  
	}


}

exports.default = User;

