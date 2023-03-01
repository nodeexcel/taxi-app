import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';
import DriverProfile from './driverProfile.mjs';

class DriverDocuments extends Model {}
export default DriverDocuments;

DriverDocuments.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    adhaar: {
      type: DataTypes.STRING,
    },
    panCard: {
      type: DataTypes.STRING,
    },
    drivingLicence: {
      type: DataTypes.STRING,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
    },
    bankName: {
      type: DataTypes.STRING,
    },
    ifscCode: {
      type: DataTypes.STRING,
    },
    accountNo: {
      type: DataTypes.STRING,
    },
    driverId: {
      type: DataTypes.UUID,
    }
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'DriverDocuments',
    tableName: 'driverdocuments',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
DriverProfile.hasOne(DriverDocuments,{
  foreignKey:"driverId"
})
DriverDocuments.belongsTo(DriverProfile,{
  foreignKey:'driverId'
})
