import { User } from "../../generated/prisma"
import { bcryptHelper } from "../helper/bcryptHelper"
import prisma from "../shared/prisma"
import { IRegisterBody} from "./auth.interface"

const loginUser = async (params: any) => {
    const result = prisma.user.findFirstOrThrow({
        where: {
            email: params.email
        }
    })
    return result
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