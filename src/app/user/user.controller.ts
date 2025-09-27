import { NextFunction, Request, Response } from "express"
import catchAsync from "../shared/catchAsync"
import { UserServices } from "./user.services"
import sendResponse from "../shared/sendResponse"
import status from "http-status"

const getUserFromDB = catchAsync(async (req: Request, res: Response,next: NextFunction) => {
    const result = await UserServices.getUserFromDB()
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "User retrieved successfully",
        data: result
    })
})
const updateUserProfile = catchAsync(async (req: Request, res: Response,next: NextFunction) => {
    const result = await UserServices.updateUserProfile(req)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "User updated successfully",
        data: result
    })
})
export const UserController = { getUserFromDB, updateUserProfile }