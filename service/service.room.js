const {models} = require('./../libs/sequelize');
const { Op, where} = require('sequelize');
const {config} = require('./../config/config');
const {verifyToken, roundCategoty} = require('./../router/handler.id.js/create.relationid');

class roomService{
    constructor(){}

    async create(data,name,user){
       const {precio} = data;
       const secret = config.jwtSecret
       const payload = verifyToken(user, secret);
       const idU = payload.sub 
       const categoria = roundCategoty(precio);
       
        const newRoom = await models.Room.create({
          imageRoom: `https://hidden-shelf-36912.herokuapp.com/public/imgRoom/${name}`,
          categoriaPerteneciente: categoria,
          usuarioPerteneciente: idU,
          ...data
        });
        return newRoom
    };

    async find(query){
      const options = {
        where: {}
      }
      const {category} = query;
      if(category) {
      options.where.categoriaPerteneciente = category
      }
      const {limit, offset} = query;
      if(limit && offset){
        options.limit = limit;
        options.offset = offset;
      }

     const {wherePlace} = query;
     if(wherePlace){
      options.where.lugarRenta = wherePlace;
     }

      const {price} = query;
      if(price){
        options.where.precio = price;
      }

      const {price_min, price_max} = query;
      if(price_min && price_max){
        options.where.precio = {
          [Op.gte]: price_min,
          [Op.lte]: price_max
        }
      }
     const room = await models.Room.findAll(options);
     return room;
    };

    async findOne(id){
      const user = await models.Room.findByPk(id);
      return user;
    }

    async update(id,changes){
      const room = await this.findOne(id);
      const updateRoom = await room.update(changes);
      return updateRoom
    }

    async delete(id){
        const room = await this.findOne(id);
        const deleteUser = await room.destroy(room);
        return room;
    }

}


module.exports = roomService