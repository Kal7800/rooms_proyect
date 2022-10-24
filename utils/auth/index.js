const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy');
const jwtStrategy = require('./strategies/jwt.strategy');

passport.use(jwtStrategy);
<<<<<<< HEAD
passport.use(LocalStrategy)
=======
passport.use(LocalStrategy);
>>>>>>> f044811 (commit para front)
