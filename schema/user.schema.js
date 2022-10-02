const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(5).max(20);
const surname =  joi.string().min(5).max(20);
const email = joi.string().email();
const password = joi.string().min(8);
const photo = joi.string();

const createUser = joi.object({
    name: name.required(),
    surname: surname.required(),
    email: email.required(),
    password: password.required(),
    photo: photo  
});

const updateUser = joi.object({
    name: name,
    email: email,
    surname: surname,
    password: password,
    photo: photo
});

const getUser = joi.object({
    id: id.required()
})


module.exports = {createUser, updateUser, getUser}