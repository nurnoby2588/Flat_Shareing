import { Request, Response } from "express"
import { AuthServices } from "./auth.services"
import sendResponse from "../shared/sendResponse"
import catchAsync from "../shared/catchAsync"
import status from "http-status"
import config from "../config"
import setCookie from "../helper/cookieHelper"

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthServices.loginUser(req.body)
    setCookie(res, "refreshToken", result.refreshToken, Number(config.cookie.refersh_cookie_expire))
    setCookie(res, "accessToken", result.accessToken, Number(config.cookie.access_cookie_expire))
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "User login successfully",
        data: result
    })
})

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