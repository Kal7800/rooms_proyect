const roomService = require('./../service/service.room');
const express = require('express');
const passport = require('passport');
const uploadRoom = require('./getImage/get.image.run');
const validatorHandler = require('./../middleware/validator.handler');
const {createRoom,updateRoom,getRoom,queryParamsRoom} = require('./../schema/room.schema');

const router = express.Router();
const serviceRoom = new roomService();


router.get('/',
validatorHandler(queryParamsRoom, 'query'),
async (req,res,next)=>{
    try {
      console.log(req.query); 
      const data = await serviceRoom.find(req.query);
      res.json(data) 
       
    } catch (error) {
      next(error)
    }
})

router.get('/:id',
validatorHandler(getRoom, 'params'),
async (req,res,next)=>{
   try {
    const {id} = req.params;
    const user = await serviceRoom.findOne(id);
    res.json(user);
   } catch (error) {
     next(error);
   }
})


router.post('/',
passport.authenticate('jwt', {session: false}),
uploadRoom.single('imageRoom'),
validatorHandler(createRoom, 'body'),
async (req,res,next)=>{
    try {
    const body = req.body;
    const header = req.headers.authorization.slice(7);
    const name = req.file.filename;
    const newRoom = await serviceRoom.create(body,name,header);
    res.json(newRoom);
    } catch (error) {
    next(error)
    }
})


router.patch('/:id',
validatorHandler(getRoom, 'params'),
validatorHandler(updateRoom, 'body'),
async (req,res,next)=>{
    try {
    const {id} = req.params;
    const changes = req.body;
    const updateRoom = await serviceRoom.update(id,changes);
    res.json(updateRoom);
    } catch (error) {
       next(error)
    }
})

router.delete('/:id',
validatorHandler(getRoom, 'params'),
async (req,res)=>{
    try {
        const {id} = req.params;
        const deleteRoom = serviceRoom.delete(id);
        res.json(deleteRoom)
    } catch (error) {
       next(error)
    }
})


module.exports = router;