import PassengerProfile from '../models/passengerprofile.mjs';




export const create = async (req, res) => {
  
  let userProfileId = req.user.UserProfile.id
  await PassengerProfile.create({
    userProfileId
  })

  res.status(201).json({ success: true});
};


// export const driverDetails = async (req, res) => { 
//   let userProfileId = req.user.UserProfile.id
//   const driverProfile = await DriverProfile.findOne({
//     where:{userProfileId},
//   })

//   const response = await DriverProfile.findOne({
//     where: { id: driverProfile.id },
//     include: [{ model: DriverDocuments }],
//   });
//   res.status(201).json({ success: true, driverProfile: response });
// };


// export const createRoute = async (req, res) => {
//   const { routeStart,routeEnd,scheduleDate } = req.body;
//   let userProfileId = req.user.UserProfile.id
//   const driverProfile = await DriverProfile.findOne({
//     where:{userProfileId},
//   })
//   let driverDocuments = await Route.create({
//     routeStart,
//     routeEnd,
//     active:true,
//     scheduleDate,
//     driverId:driverProfile.id
//   })

//   res.status(201).json({ success: true });
// };
