const {config} = require('/home/kalet/Escritorio/proyect/backend_nodejs/config/config');



module.exports = {
    development: {
        url: config.dbUrl,
        dialect: 'postgres',
    },
    production: {
      url: config.dbUrl,
      dialect: 'postgres',
      ssl:{
      rejectUnauthorized: false
      }
    }
}