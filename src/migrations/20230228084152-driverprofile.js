module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('driverprofile', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      isLicenced: {
        type: Sequelize.DataTypes.BOOLEAN,
      },
      licenceNo: {
        type: Sequelize.DataTypes.STRING,
      },
      totalTrips: {
        type: Sequelize.DataTypes.INTEGER,
      },
      successFullTrips: {
        type: Sequelize.DataTypes.INTEGER,
      },
      address: {
        type: Sequelize.DataTypes.STRING,
      },
      onDuty: {
        type: Sequelize.DataTypes.BOOLEAN,
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
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('driverprofile');
  },
};
