'use strict';

const {USER_TABLE,schemaUser} = require('./../models/user.model')

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable(USER_TABLE,schemaUser);
   
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable(USER_TABLE);
     
  }
};