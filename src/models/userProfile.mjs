import { Model, DataTypes } from 'sequelize';
import User from './user.mjs'
import { sequelize } from '../db.mjs';


class UserProfile extends Model {}
export default UserProfile;

UserProfile.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    profilePicture: {
      type: DataTypes.STRING,
    },
    warnings: {
      type: DataTypes.NUMBER,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    // driverId: {
    //   type: DataTypes.UUID,
    // },
    // passengerId:{
    //     type: DataTypes.UUID,
    //   },
    // walletId:{
    //     type: DataTypes.UUID,
    //   },
    userId:{
        type: DataTypes.UUID, 
    } 
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'UserProfile',
    tableName: 'userprofile',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
