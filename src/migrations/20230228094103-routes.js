
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('route',{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      routeStart: {
        type: Sequelize.DataTypes.GEOMETRY,
      },
      routeEnd: {
        type: Sequelize.DataTypes.GEOMETRY,
      },
      scheduleDate: {
        type: Sequelize.DataTypes.DATE,
      },
      active: {
        type:Sequelize.DataTypes.BOOLEAN
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
    await queryInterface.dropTable('route')
  }
};
