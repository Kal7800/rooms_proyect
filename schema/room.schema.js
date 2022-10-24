const joi = require('joi');

const id = joi.number().integer();
const category = joi.string().min(4).max(7);
const user = joi.number().integer();
const image = joi.string().min(3);
const place = joi.string().min(5).max(50);
<<<<<<< HEAD
=======
const direction = joi.string().min(10).max(50);
>>>>>>> f044811 (commit para front)
const description = joi.string().min(70).max(200);
const price = joi.number().precision(2);

const limit = joi.number().integer();
const offset = joi.number().integer();
const price_min = joi.number();
const price_max = joi.number();
const wherePlace = joi.string();

const createRoom = joi.object({
<<<<<<< HEAD
categoriaPerteneciente: category,
usuarioPerteneciente: user,
imageRoom: image,
lugarRenta: place.required(),
descripcion: description.required(),
precio: price.required()  
})

const updateRoom = joi.object({
    categoriaPerteneciente: category,
    usuarioPerteneciente: user,
    imageRoom: image,
    lugarRenta: place,
    descripcion: description,
    precio: price  
})

const getRoom = joi.object({
    id: id
})

const queryParamsRoom = joi.object({
   limit,
   offset,
   price,
   category,
   wherePlace,
   price_min,
   price_max: price_max.when('price_min', {
    is: joi.number().required(),
    then : joi.required()
   })
})

module.exports = { createRoom, updateRoom, getRoom, queryParamsRoom};
=======
  categoriaPerteneciente: category,
  usuarioPerteneciente: user,
  imageRoom: image,
  departamento: place.required(),
  direccion: direction.required(),
  descripcion: description.required(),
  precio: price.required(),
});

const updateRoom = joi.object({
  categoriaPerteneciente: category,
  usuarioPerteneciente: user,
  imageRoom: image,
  departamento: place,
  direccion: direction,
  descripcion: description,
  precio: price,
});

const getRoom = joi.object({
  id,
});

const queryParamsRoom = joi.object({
  limit,
  offset,
  price,
  category,
  wherePlace,
  price_min,
  price_max: price_max.when('price_min', {
    is: joi.number().required(),
    then: joi.required(),
  }),
});

module.exports = {
  createRoom, updateRoom, getRoom, queryParamsRoom,
};
>>>>>>> f044811 (commit para front)
