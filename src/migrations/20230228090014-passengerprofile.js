'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('passengerprofile',{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      totalTrips: {
        type: Sequelize.DataTypes.INTEGER,
      },
      successFullTrips: {
        type: Sequelize.DataTypes.INTEGER,
      },
      preferredArea: {
        type:Sequelize.DataTypes.STRING
      },
      userProfileId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'userprofile',
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
    await queryInterface.dropTable('passengerprofile')
  }
};
