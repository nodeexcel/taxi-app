import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';
import UserProfile from './userProfile.mjs';

class PassengerProfile extends Model {}
export default PassengerProfile;

PassengerProfile.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    preferredArea: {
      type: DataTypes.STRING,
    },
    totalTrips: {
      type: DataTypes.NUMBER,
    },
    successFullTrips: {
      type: DataTypes.NUMBER,
    },
    userProfileId: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'PassengerProfile',
    tableName: 'passengerprofile',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
PassengerProfile.hasOne(UserProfile, {
  foreignKey: 'userProfileId',
});
