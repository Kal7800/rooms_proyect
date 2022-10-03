const {Strategy, ExtractJwt} = require('passport-jwt');

const {config} = require('./../../../config/config')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'UOtRN68jWl9p2EAZ04Jy7evczIYa1qDV'
}

const jwtStrategy = new Strategy(options, (payload,done)=>{
    return done(null, payload);
});

module.exports = jwtStrategy;
