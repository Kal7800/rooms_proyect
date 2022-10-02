const {config} = require('/home/kalet/Escritorio/proyect/backend_nodejs/config/config');
const {Sequelize} = require('sequelize');
const setupModel = require('/home/kalet/Escritorio/proyect/backend_nodejs/db/models/index');

const options = {
    dialect: 'postgres',
    logging: config.isProd ? false : console.log
}

if(config.isProd){
    options.dialectOptions = {
       ssl:{ rejectUnauthorized: false
      }
}}

const sequelize = new Sequelize(config.dbUrl,options)

setupModel(sequelize);

module.exports = sequelize
