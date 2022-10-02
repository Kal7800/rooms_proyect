const express = require('express');
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
    const secret = await config.jwtVerifyUser;
    const payload = await jwt.verify(body,secret);
   const newUser = await serviceUser.create(payload);
   res.json(newUser);
}
 catch (error) {
    next(error);
}
});

module.exports = router
