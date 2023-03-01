import express from 'express';
import userRoute from './user.mjs'
import driverRoute from './driver.mjs'
import passengerRoute from './passenger.mjs'

const router = express.Router();

router.use('/user',userRoute)
router.use('/driver', driverRoute)
router.use('/passenger', passengerRoute)
export default router;
