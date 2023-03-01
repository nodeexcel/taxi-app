
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('driverdocuments',{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      adhaar: {
        type: Sequelize.DataTypes.STRING,
      },
      panCard: {
        type: Sequelize.DataTypes.STRING,
      },
      drivingLicence: {
        type:Sequelize.DataTypes.STRING
      },
      isVerified: {
        type:Sequelize.DataTypes.BOOLEAN
      },
      bankName: {
        type:Sequelize.DataTypes.STRING
      },
      ifscCode: {
        type:Sequelize.DataTypes.STRING
      },
      accountNo: {
        type:Sequelize.DataTypes.STRING
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
    await queryInterface.dropTable('driverdocuments')
  }
};
