const express = require('express');
const passport = require('passport');
<<<<<<< HEAD
const authService = require('./../service/auth.mail');
const service = new authService();

const router = express.Router();

router.post('/',
passport.authenticate('local', {session: false}),
async (req,res,next) =>{
    try {
        const user = req.user;
        res.json(service.signToken(user));
    } catch (error) {
        next(error)
    }
}
)


router.post('/recovery',
=======
const AuthService = require('../service/auth.mail');

const service = new AuthService();

const router = express.Router();

router.post(
  '/',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/recovery',
>>>>>>> f044811 (commit para front)
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const rta = await service.sendRecovery(email);
      res.json(rta);
    } catch (error) {
      next(error);
    }
<<<<<<< HEAD
  }
);

router.post('/change-password',
  async (req, res, next) => {
    try {
      const { token,newPassword } = req.body;
=======
  },
);

router.post(
  '/change-password',
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
>>>>>>> f044811 (commit para front)
      const rta = await service.changePassword(token, newPassword);
      res.json(rta);
    } catch (error) {
      next(error);
    }
<<<<<<< HEAD
  }
);

module.exports = router;
=======
  },
);

module.exports = router;
>>>>>>> f044811 (commit para front)
