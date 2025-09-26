import { Request, Response } from "express"
import { AuthServices } from "./auth.services"
import sendResponse from "../shared/sendResponse"
import catchAsync from "../shared/catchAsync"
import status from "http-status"

const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await AuthServices.loginUser(req.body)
        res.status(200).json({
            msg: "success",
            data: result
        })
    } catch (error) {
        res.status(200).json({
            msg: "success",
            data: error
        })
    }
}

const RegisterUser = catchAsync(async (req: Request, res: Response) => {

    const result = await AuthServices.RegisterUser(req.body)
    sendResponse(res, {
        success: true,
        statusCode: status.CREATED,
        message: "User Register successfully",
        data: result
    })

})
export const AuthController = { loginUser, RegisterUser }