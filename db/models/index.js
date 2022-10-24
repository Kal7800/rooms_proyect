<<<<<<< HEAD
const {schemaUser,User} = require('./user.model');
const {schemaRoom,Room} = require('./room.models');
const {schemaCategory,Category} = require('./category.model');

function setupModel(sequelize){
=======
const { schemaUser, User } = require('./user.model');
const { schemaRoom, Room } = require('./room.models');
const { schemaCategory, Category } = require('./category.model');

function setupModel(sequelize) {
>>>>>>> f044811 (commit para front)
  User.init(schemaUser, User.config(sequelize));
  Category.init(schemaCategory, Category.config(sequelize));
  Room.init(schemaRoom, Room.config(sequelize));

  Room.associate(sequelize.models);
  Category.associate(sequelize.models);
  User.associate(sequelize.models);
}

<<<<<<< HEAD
module.exports = setupModel;
=======
module.exports = setupModel;
>>>>>>> f044811 (commit para front)
