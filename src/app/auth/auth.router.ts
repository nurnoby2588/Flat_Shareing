import express from "express";
import { AuthController } from "./auth.controller";
import zodValidation from "../middleware/zod/zodSchemaValidation";
import { AuthValidation } from "./auth.validation";
const router = express.Router()
router.post('/login',zodValidation(AuthValidation.LoginUser),AuthController.loginUser)
router.post('/register',zodValidation(AuthValidation.RegisterUser), AuthController.RegisterUser)
export const AuthRouter = router