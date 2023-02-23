'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('users', {
      type: 'unique',
      name: 'unique_email',
      fields: ['email'],
    });
    await queryInterface.addConstraint('users', {
      type: 'unique',
      name: 'unique_no',
      fields: ['phoneNo'],
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('users', 'unique_email');
    await queryInterface.removeConstraint('users', 'unique_no');
  },
};
