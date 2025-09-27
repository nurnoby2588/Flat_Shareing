import express from "express";
import { UserController } from "./user.controller";
import verifyUser from "../middleware/verifyUser";
const router = express.Router()
router.get('/', verifyUser, UserController.getUserFromDB)
router.put('/', verifyUser, UserController.updateUserProfile)
export const UserRouter = router