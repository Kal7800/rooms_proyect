<<<<<<< HEAD
const {Strategy} = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const userService = require('./../../../service/service.user');
const service = new userService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password',
},
async (email, password, done) =>{
    try {
        const user = await service.findEmail(email);
        if(!user){
            done(boom.unauthorized(), false);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            done(boom.unauthorized(), false);
        }
        delete user.dataValues.password;
        done(null, user)
    } catch (error) {
        done(error, false);

    }
});



module.exports = LocalStrategy;
=======
const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('../../../service/service.user');

const service = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await service.findEmail(email);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  },
);

module.exports = LocalStrategy;
>>>>>>> f044811 (commit para front)
