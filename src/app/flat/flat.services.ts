// import { Prisma } from "../../generated/prisma"
import prisma from "../shared/prisma"
import { IFlatBody } from "./flat.interface"

const createFalt = async (body : IFlatBody) => {
    const newFlat = await prisma.flat.create({
        data: body    
    })
    return newFlat
}

export const FlatServices = { createFalt }