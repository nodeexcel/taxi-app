import express from 'express';
import * as passengerController from '../controllers/passenger.mjs';
import { errorHandler } from '../helpers/errorHandler.mjs';
import { authenticateUser } from '../middleware.mjs';

const router = express.Router();
// router.get(
//   '/',
//   authenticateUser,
//   errorHandler(driverController.driverDetails),
// );

router.post(
  '/create',
  authenticateUser,
  errorHandler(passengerController.create),
);

// router.post(
//   '/route',
//   authenticateUser,
//   errorHandler(driverValidators.postRouteCreate),
//   errorHandler(driverController.createRoute),
// );


export default router;
