// import { Prisma } from "../../generated/prisma"
import { peginationHelper } from "../helper/paginationHelper"
import prisma from "../shared/prisma"
import { searchAbleData } from "./flat.constant"
import { IFlatBody } from "./flat.interface"

const createFalt = async (body: IFlatBody) => {
    const newFlat = await prisma.flat.create({
        data: body
    })
    return newFlat
}

const getFlatFromDb = async (query: any, options: any) => {
    const { searchTerm, availability, ...filterData } = query;
    const { page, limit, skip, sortOrder, sortBy } = peginationHelper.calculatePaginate(options)
    const andCondition = []

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
                    equals: filterData[key]
                }
            }))
        })
    }
    if (availability) {
        andCondition.push({
            availability: {
                equals: availability == 'true' ? true : availability == 'false' ? false : availability
            }
        })
    }
    const whereConding = { AND: andCondition }
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

export const FlatServices = { createFalt, getFlatFromDb }