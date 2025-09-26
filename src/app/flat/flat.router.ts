import express from "express";
import zodValidation from "../middleware/zod/zodSchemaValidation";
import verifyUser from "../middleware/verifyUser";
const router = express.Router()
router.post('/',verifyUser)
// router.post('/register',)
export const FlatRouter = router