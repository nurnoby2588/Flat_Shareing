type Ioption = {
    page?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: string
}
type IoptionReturn = {
    page: number,
    limit: number,
    skip: number
    sortBy: string,
    sortOrder: string
}
const calculatePaginate = (options: Ioption): IoptionReturn => {
  const page = Number(options.page) || 1
    const limit = Number(options.limit) || 10
    const sortBy = options.sortBy || 'createdAt';
    const sortOrder = options.sortOrder || 'asc'
    const skip = (page - 1) * limit
    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder
    }
}
export const peginationHelper ={calculatePaginate}