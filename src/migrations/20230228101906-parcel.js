module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('parcel',{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      dimension: {
        type: Sequelize.DataTypes.STRING,
      },
      dropLocation: {
        type: Sequelize.DataTypes.GEOMETRY,
      },
      originImage: {
        type:Sequelize.DataTypes.STRING
      },
      destinationImage: {
        type:Sequelize.DataTypes.STRING
      },
      scheduleDate: {
        type:Sequelize.DataTypes.DATE
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
    await queryInterface.dropTable('parcel')
  }
};
