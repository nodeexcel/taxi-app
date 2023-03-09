import express from 'express';
import * as driverController from '../controllers/driver.mjs';
import { errorHandler } from '../helpers/errorHandler.mjs';
import { authenticateUser } from '../middleware.mjs';
import driverValidators from '../validators/driverValidators.mjs'

const router = express.Router();
router.get(
  '/',
  authenticateUser,
  errorHandler(driverController.driverDetails),
);

router.post(
  '/create', 
  authenticateUser,
  errorHandler(driverValidators.postDriverCreate),
  errorHandler(driverController.create),
);

router.post(
  '/route',
  authenticateUser,
  errorHandler(driverValidators.postRouteCreate),
  errorHandler(driverController.createRoute),
);


export default router;
