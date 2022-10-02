'use strict';

const {ROOM_TABLE,schemaRoom} = require('./../models/room.models')

module.exports = {
  async up (queryInterface) {
  await queryInterface.createTable(ROOM_TABLE,schemaRoom);
     
  },

  async down (queryInterface) {
   await queryInterface.dropTable(ROOM_TABLE);
  }
};
