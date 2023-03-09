'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('payment',{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      amount: {
        type: Sequelize.DataTypes.FLOAT,
      },
      tripId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'trips',
          },
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('payment')
  }
};
