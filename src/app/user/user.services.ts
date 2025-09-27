import { Request } from "express"
import prisma from "../shared/prisma"

const getUserFromDB = async () => {
    const users = await prisma.userProfile.findMany()
    return users
}
const updateUserProfile = async (req: Request & { user?: any }) => {
    const userId = req.user?.id
    const body = req.body
    const upsertProfile = await prisma.userProfile.upsert({
        where: {
            userId
        },
        create: {
            userId,
            bio: body.bio,
            profession: body.profession,
            address: body.address
        },
        update: body
    })
    return upsertProfile


}
export const UserServices = { getUserFromDB, updateUserProfile }