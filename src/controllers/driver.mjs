import DriverProfile from '../models/driverProfile.mjs';
import DriverDocuments from '../models/driverDocuments.mjs';
import Route from '../models/route.mjs';


export const create = async (req, res) => {
  const { adhaar, panCard, drivingLicence, bankName, ifscCode, accountNo } = req.body;
  let userProfileId = req.user.UserProfile.id
  const driverProfile = await DriverProfile.create({
    userProfileId
  })
  let driverDocuments = await DriverDocuments.create({
    adhaar,
    panCard,
    drivingLicence,
    bankName,
    ifscCode,
    accountNo,
    driverId:driverProfile.id
  })

  const response = await DriverProfile.findOne({
    where: { id: driverProfile.id },
    include: [{ model: DriverDocuments }],
  });
  res.status(201).json({ success: true, driverProfile: response });
};


export const driverDetails = async (req, res) => { 
  let userProfileId = req.user.UserProfile.id
  const driverProfile = await DriverProfile.findOne({
    where:{userProfileId},
  })

  const response = await DriverProfile.findOne({
    where: { id: driverProfile.id },
    include: [{ model: DriverDocuments }],
  });
  res.status(201).json({ success: true, driverProfile: response });
};


export const createRoute = async (req, res) => {
  const { routeStart,routeEnd,scheduleDate } = req.body;
  let userProfileId = req.user.UserProfile.id
  const driverProfile = await DriverProfile.findOne({
    where:{userProfileId},
  })
  let driverDocuments = await Route.create({
    routeStart,
    routeEnd,
    active:true,
    scheduleDate,
    driverId:driverProfile.id
  })

  res.status(201).json({ success: true });
};
