'use strict';
const {DataTypes} = require('sequelize')
const {ROOM_TABLE} = require('../models/room.models');
const {CATEGORY_TABLE} = require('../models/category.model');
const {USER_TABLE} = require('../models/user.model');

module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(USER_TABLE,{
    userId: {
      autoIncrement: false,
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
  },
 name: {
     allowNull: false,
     type: DataTypes.STRING(50),
     field: 'user_name',
     unique: false
 },
 surname:{
     allowNull: false,
     type: DataTypes.STRING(50),
     field: 'user_surnames',
     unique: false
 },
 email:{
    allowNull: false,
    unique: true,
    type: DataTypes.STRING(75),
    field: 'user_email'
 },
 password:{
    allowNull: false,
    unique: true,
    type: DataTypes.STRING(150),
    field: 'password'
 },
 recoveryToken:{
  field: 'recovery_token',
  allowNull: true,
  type: DataTypes.STRING
 }
 ,
 photo: {
  allowNull: true,
  unique: true,
  type: DataTypes.STRING(75),
  field: 'profile_photo'
 },
});
await queryInterface.createTable(CATEGORY_TABLE,{
  categoryId:{
    allowNull: false,
    type: DataTypes.STRING(7),
    primaryKey: true,  
},
typeCategory: {
   allowNull: false,
   type: DataTypes.STRING,
   field: 'tipo_categoria',
   unique: true

}
});
await queryInterface.createTable(ROOM_TABLE,{
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'room_id',
    primaryKey: true,
    autoIncrement: true
},
categoriaPerteneciente: {
   allowNull: false,
   type: DataTypes.STRING(7),
   unique: false,
   field: 'categoria_perteneciente',
   references: {
    model: CATEGORY_TABLE,
    key: 'categoryId'
   },
   onUpdate: 'CASCADE',
   onDelete: 'SET NULL'

   
},
usuarioPerteneciente: {
   allowNull: false,
   type: DataTypes.STRING,
   field: 'usuario_perteneciente',
   unique: false,
   references: {
    model: USER_TABLE,
    key: 'userId'
   },
   onUpdate: 'CASCADE',
   onDelete: 'SET NULL'
},
imageRoom:{
   allowNull: false,
   type: DataTypes.STRING(150),
   field: 'image_url',
   unique: true
},
lugarRenta: {
   allowNull: false,
   type: DataTypes.STRING(50),
   field: 'lugar_de_renta',
   unique: false,
},
descripcion: {
allowNull: false,
type: DataTypes.STRING(200),
field: 'descripcion',
},
precio: {
allowNull: false,
type: DataTypes.DECIMAL(5,2),
field: 'precio'
}
});
},

  async down (queryInterface) {
   await queryInterface.dropTable(USER_TABLE);
   await queryInterface.dropTable(CATEGORY_TABLE);
   await queryInterface.dropTable(ROOM_TABLE);
  }
};
