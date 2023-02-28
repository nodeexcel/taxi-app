
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dispute',{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      type: {
        type: Sequelize.DataTypes.STRING,
      },
      status: {
        type: Sequelize.DataTypes.STRING,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
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
    await queryInterface.dropTable('dispute')
  }
};
