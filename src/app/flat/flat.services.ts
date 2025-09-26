import { Flat, Prisma } from "../../generated/prisma"
import { peginationHelper } from "../helper/paginationHelper"
import prisma from "../shared/prisma"
import { searchAbleData } from "./flat.constant"
import { IFlatBody, Ioption, IUserFilterRequest } from "./flat.interface"

const createFalt = async (body: IFlatBody) => {
    const newFlat = await prisma.flat.create({
        data: body
    })
    return newFlat
}

const getFlatFromDb = async (query: IUserFilterRequest, options: Ioption) => {
    const { searchTerm, availability, ...filterData } = query;
    const { page, limit, skip, sortOrder, sortBy } = peginationHelper.calculatePaginate(options)
    const andCondition: Prisma.FlatWhereInput[] = []

    if (query.searchTerm) {
        andCondition.push({
            OR: searchAbleData.map(key => ({
                [key]: {
                    contains: query.searchTerm,
                    mode: 'insensitive'
                }
            }))
        })
    }
    if (Object.keys(filterData).length > 0) {
        console.log(filterData)
        andCondition.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: (filterData as any)[key]
                }
            }))
        })
    }
    if (availability) {
        andCondition.push({
            availability: {
                equals: JSON.parse(availability)
            }
        })
    }
    const whereConding: Prisma.FlatWhereInput = { AND: andCondition }
    const result = await prisma.flat.findMany({
        where: whereConding,
        skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder
        }
    })
    return result
}
const updateFlat = async (id: string, body: Partial<Flat>) => {
    await prisma.flat.findUniqueOrThrow({
        where: {
            id
        }
    })
    const updateFalt = await prisma.flat.update({
        where: {
            id
        },
        data: body
    })
    return updateFalt

}

export const FlatServices = { createFalt, getFlatFromDb, updateFlat }