import { bcryptHelper } from "../helper/bcryptHelper"
import prisma from "../shared/prisma"
import { ILoginBody, IRegisterBody } from "./auth.interface"
import ApiError from "../error/ApiError"
import status from "http-status"
import { jwtHelper } from "../helper/jwtHelper"
import config from "../config"
import { Secret } from "jsonwebtoken"
import { User } from "../../../generated/prisma"

const loginUser = async (body: ILoginBody) => {
    const userData = await prisma.user.findFirstOrThrow({
        where: {
            email: body.email
        }
    })
    const match = await bcryptHelper.matchHashPassword(body.password, (await userData).password)
    if (!match) {
        throw new ApiError(status.UNAUTHORIZED, 'Password incorrect')
    }
    const payload = {
        id: userData.id,
        email: userData.email,
        name: userData.name
    }
    const accessToken = await jwtHelper.generatedToken(payload,config.jwt.access_token_key as Secret,config.jwt.access_token_expire as string)
    const refreshToken = await jwtHelper.generatedToken(payload,config.jwt.refresh_token_key as Secret,config.jwt.refresh_token_expire as string)


    return {accessToken, refreshToken}
}
const RegisterUser = async (body: IRegisterBody): Promise<User> => {
    const hashPassword = await bcryptHelper.hashPassword(body.password)
    const userData = {
        name: body.name,
        email: body.email,
        password: hashPassword
    }
    const createUser = await prisma.user.create({
        data: userData,
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true
        }
    })
    return createUser as User
}
export const AuthServices = { loginUser, RegisterUser }