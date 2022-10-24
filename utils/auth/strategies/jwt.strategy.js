<<<<<<< HEAD
const {Strategy, ExtractJwt} = require('passport-jwt');

const {config} = require('./../../../config/config')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

const jwtStrategy = new Strategy(options, (payload,done)=>{
    return done(null, payload);
});
=======
const { Strategy, ExtractJwt } = require('passport-jwt');

const { config } = require('../../../config/config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

const jwtStrategy = new Strategy(options, (payload, done) => done(null, payload));
>>>>>>> f044811 (commit para front)

module.exports = jwtStrategy;
