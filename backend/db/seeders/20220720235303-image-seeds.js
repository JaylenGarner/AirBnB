'use strict';

const { Image } = require('../models');

let imageSeeds = [
  {
    imageableId: 2,
    imageableType: 'spot',
    url: 'url:12345'
  },
  {
    imageableId: 1,
    imageableType: 'review',
    url: 'url:ekfnfkenf'
  },
  {
    imageableId: 2,
    imageableType: 'review',
    url: 'url:kkfoekfoekf'
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     try {
      await Image.bulkCreate(imageSeeds, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     try {
      await queryInterface.bulkDelete('Images', null, {});
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
