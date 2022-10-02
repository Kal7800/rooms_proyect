'use strict';

const {CATEGORY_TABLE,schemaCategory} = require('./../models/category.model')

module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(CATEGORY_TABLE,schemaCategory);
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable(CATEGORY_TABLE);
  
  }
};
