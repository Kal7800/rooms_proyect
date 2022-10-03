const {config} = require('../config/config');
const {Sequelize} = require('sequelize');
const setupModel = require('../db/models/index');

const options = {
    dialect: 'postgres',
    logging: config.isProd ? false : console.log
}

if(config.isProd){
    options.dialectOptions = {
       ssl:{
        require: true,
        rejectUnauthorized: false
      }
}}

const sequelize = new Sequelize(config.dbUrl,options)

setupModel(sequelize);

module.exports = sequelize
