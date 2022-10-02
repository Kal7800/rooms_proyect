const {config} = require('/home/kalet/Escritorio/proyect/backend_nodejs/config/config');
const {Sequelize} = require('sequelize');
const setupModel = require('/home/kalet/Escritorio/proyect/backend_nodejs/db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI,{
    dialect: 'postgres',
    logging: console.log
})

setupModel(sequelize);

module.exports = sequelize
