import { NextFunction, Request, Response } from "express"
import { jwtHelper } from "../helper/jwtHelper"
import config from "../config"
import ApiError from "../error/ApiError"
import status from "http-status"
import { Secret } from "jsonwebtoken"

const verifyUser = async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    try {
        const accessToken = req.cookies.accessToken
        if (!accessToken) {
            throw new ApiError(status.UNAUTHORIZED, "AccessToken not found")
        }
        const verifyData = await jwtHelper.verifyToken(accessToken, config.jwt.access_token_key as Secret)
        if (!verifyData) {
            throw new ApiError(status.UNAUTHORIZED, "AccessToken invalid or expire")
        }
        req.user = verifyData
        next
    } catch (error) {
        next(error)
    }
}

export default verifyUser