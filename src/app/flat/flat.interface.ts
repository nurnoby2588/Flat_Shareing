export type IFlatBody = {
    squareFeet: number,
    totalBedrooms: number,
    totalRooms: number,
    utilitiesDescription: string,
    location: string,
    description: string,
    rent: number,
    advanceAmount: number,
    availability: boolean;
}
export type Ioption = {
    page?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: string
}
export type IUserFilterRequest = {
    availability?: string | undefined,
    searchTerm?: string | undefined,
}