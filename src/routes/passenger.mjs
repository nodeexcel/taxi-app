import express from 'express';
import * as passengerController from '../controllers/passenger.mjs';
import { errorHandler } from '../helpers/errorHandler.mjs';
import { authenticateUser } from '../middleware.mjs';
import passengerValidator from '../validators/passengerValidators.mjs'

const router = express.Router();

router.post(
  '/create',
  authenticateUser,
  errorHandler(passengerController.create),
);

router.post(
  '/parcel',
  authenticateUser,
  errorHandler(passengerValidator.postParcelCreate),
  errorHandler(passengerController.createParcel),
);




export default router;
