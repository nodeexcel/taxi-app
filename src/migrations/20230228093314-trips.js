module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('trips',{
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
    },
    origin: {
      type: Sequelize.DataTypes.GEOMETRY,
    },
    destination: {
      type: Sequelize.DataTypes.GEOMETRY,
    },
    tripTime: {
      type:Sequelize.DataTypes.TIME
    },
    driverId: {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: {
          tableName: 'driverprofile',
        },
        key: 'id',
      },
    },
    passengerId: {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: {
          tableName: 'passengerprofile',
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
    await queryInterface.dropTable('trips')
  }
};
