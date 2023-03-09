import PassengerProfile from '../models/passengerprofile.mjs';
import Parcel from '../models/parcel.mjs'




export const create = async (req, res) => {
  
  let userProfileId = req.user.UserProfile.id
  await PassengerProfile.create({
    userProfileId
  })

  res.status(201).json({ success: true});
};

export const createParcel = async (req, res) => {
  const {dimension, latitude,longitude,originImage,destinationImage,scheduleDate } = req.body
  let userProfileId = req.user.UserProfile.id
  const passengerProfile = await PassengerProfile.findOne({
    where:{userProfileId}
  })
  let point = { type: 'Point', coordinates: [latitude,longitude]};
  let parcel = await Parcel.create({
    dimension,
    dropLocation:point,
    originImage,
    destinationImage,
    scheduleDate,
    passengerId:passengerProfile.id
  })

  res.status(201).json({ success: true, parcel:parcel});
};

