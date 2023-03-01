module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userprofile', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      firstname: {
        type: Sequelize.DataTypes.STRING,
      },
      lastname: {
        type: Sequelize.DataTypes.STRING,
      },
      profilePicture: {
        type: Sequelize.DataTypes.STRING,
      },
      warnings: {
        type: Sequelize.DataTypes.INTEGER,
      },
      isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
      },
      userId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'users',
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
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('userprofile');
  },
};
