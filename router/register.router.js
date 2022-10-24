const express = require('express');
<<<<<<< HEAD
const userService = require('./../service/service.user');
const validatorHandler = require('./../middleware/validator.handler');
const {createUser} = require('./../schema/user.schema');
const serviceUser = new userService();
const passport = require('passport');
const authService = require('../service/auth.mail');
const {config} = require('./../config/config')
const jwt = require('jsonwebtoken')
const serivceAuth = new authService();
const router = express.Router();

router.post('/',
validatorHandler(createUser, 'body'),
async (req,res,next)=>{
    try {
    const body= req.body;
   const token = await serivceAuth.sendMailUser(body)
   res.json({
    mesage: `verificacio enviada a ${body.email}`
   });
    } catch (error) {
        next(error)
    }
});

router.post('/verify',
passport.authenticate('jwt', {session: false})
,async (req,res,next)=>{
try {
    const body = req.headers.authorization.slice(7);
    const secret = config.jwtSecret;
    const payload = await jwt.verify(body,secret);
   const newUser = await serviceUser.create(payload);
   res.json(newUser);
}
 catch (error) {
    next(error);
}
});

module.exports = router
=======
const passport = require('passport');
const jwt = require('jsonwebtoken');
const UserService = require('../service/service.user');
const validatorHandler = require('../middleware/validator.handler');
const { createUser } = require('../schema/user.schema');

const AuthService = require('../service/auth.mail');
const { config } = require('../config/config');

const serivceAuth = new AuthService();
const serviceUser = new UserService();
const router = express.Router();

router.post(
  '/',
  validatorHandler(createUser, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req; await serivceAuth.sendMailUser(body);
      res.status(200).json({
        mesage: body.email,
      });
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/verify',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const body = req.headers.authorization.slice(7);
      const secret = config.jwtSecret;
      const payload = await jwt.verify(body, secret);
      const newUser = await serviceUser.create(payload);
      res.json({
        status: 200,
         ...newUser
      });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
>>>>>>> f044811 (commit para front)
