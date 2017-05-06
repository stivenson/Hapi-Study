# Nodejs-Study

![license](https://img.shields.io/npm/l/Nodejs-Study.svg) ![github-issues](https://img.shields.io/github/issues/stivenson/Nodejs-Study.svg) ![stars](https://img.shields.io/github/stars/stivenson/Nodejs-Study.svg) ![forks](https://img.shields.io/github/forks/stivenson/Nodejs-Study.svg) ![](https://david-dm.org/stivenson/Nodejs-Study/dev-status.svg)

Exercises for personal study of Nodejs, frameworks and related topics


## 🌄 Getting Started

- Install [Nodejs v7.9.x](https://nodejs.org/en/) or higher
- Install [Npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/lang/en/)

## 🌅 Description of folders

- 🚲  __hapi-basic-example:__ Hapi.js
- 🚴  __hapi-rest-services:__ Hapi.js Basic Restful Services
- 🚕  __hapi-rest-services-jwt:__ Hapi.js Basic Restful Services and JWT authentication
- 🚜  __hapi-rest-services-jwt-bcrypt:__ Hapi.js Basic Restful Services, JWT authentication and Bcrypt
- 🚛  __hapi-rest-services-jwt-bcrypt-Middle:__ Hapi.js Basic Restf., JWT, Bcrypt, Middle., and Authorization (roles). 
- 🚚  __hapi-rest-class-es6:__ Hapi, Restful, JWT, Bcrypt, Middle. Autho., __ES6 Classes__. 🌠   
- 🚙  __hapi-rest-mysql__ (function testConnectTableUser): Hapi, Restful, JWT, Bcrypt, Middle. Autho., __ES6 Classes__, __Mysql__. 🌠   


## 🌇 In each folder, run:

- `npm install` or `yarn install`

- `npm start` or `yarn start`


## Additional for hapi-rest-mysql project:

 1. Install mysql version 5.6.x and create a database called hapimysql.

 2. Change connection data to mysql in /hapi-rest-mysql/api/config.js with your connection data.

 3. After, run the following sql into hapimysql database:


```mysql


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `names` varchar(100) NOT NULL,
  `surnames` varchar(100) NOT NULL,
  `number_identification` varchar(25) NOT NULL,
  `role` varchar(30) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


```



## 🌃 Learning

 1. [Hapi.js](https://hapijs.com/)

 2. [JWT (Json Web Tokens)](https://jwt.io/)
 
 3. [hapi-auth-jwt2](https://www.npmjs.com/package/hapi-auth-jwt2)

 4. [hapi-authorization](https://www.npmjs.com/package/hapi-authorization)


## Scripts

 - **npm run start** : `node app.js`
 - **npm run test** : `NODE_ENV='test' ./node_modules/lab/bin/lab -c`
 - **npm run startpro** : `NODE_ENV=pro node app.js`
 - **npm run readme** : `node ./node_modules/.bin/node-readme`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[bcrypt](https://www.npmjs.com/package/bcrypt) | ^1.0.2 | ✖
[code](https://www.npmjs.com/package/code) | ^4.0.0 | ✖
[hapi](https://www.npmjs.com/package/hapi) | ^16.1.0 | ✖
[hapi-auth-jwt2](https://www.npmjs.com/package/hapi-auth-jwt2) | ^7.2.4 | ✖
[hapi-authorization](https://www.npmjs.com/package/hapi-authorization) | ^3.0.2 | ✖
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | ^7.3.0 | ✖
[lab](https://www.npmjs.com/package/lab) | ^12.1.0 | ✖
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔


## Contributing

Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Author

Stivenson Rincon

## License

 - **MIT** : http://opensource.org/licenses/MIT
