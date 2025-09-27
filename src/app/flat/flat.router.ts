import express from "express";
import zodValidation from "../middleware/zod/zodSchemaValidation";
import verifyUser from "../middleware/verifyUser";
import { FlatController } from "./flat.controller";
import { FlatValidation } from "./flat.validation";
const router = express.Router()
router.post('/', verifyUser,zodValidation(FlatValidation.CreateFlat), FlatController.createFalt)
router.get('/', verifyUser, FlatController.getFlatFromDb)
router.put('/:id', verifyUser, FlatController.updateFlat)
router.post('/booking-application', verifyUser, FlatController.flatBooking)
router.get('/booking-request', verifyUser, FlatController.getFlatBookingRequests)
router.post('/booking-request/:bookingId', verifyUser, FlatController.updatedFlatBookingStatus)
// router.post('/register',)
export const FlatRouter = router