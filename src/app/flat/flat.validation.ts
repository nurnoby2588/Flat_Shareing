import z, { email } from 'zod'
const CreateFlat = z.object({
    squareFeet: z.number().min(1, { message: "SquareFeet is required and must be greater than 0" }),
    totalBedrooms: z.number().min(1, { message: "TotalBedrooms is required and must be greater than 0" }),
    totalRooms: z.number().min(1, { message: "TotalRooms is required and must be greater than 0" }),
    utilitiesDescription: z.string().nonempty({ message: "UtilitiesDescription is required" }),
    location: z.string().nonempty({ message: "Location is required" }),
    description: z.string().nonempty({ message: "Description is required" }),
    rent: z.number().min(1, { message: "Rent is required and must be greater than 0" }),
    advanceAmount: z.number().min(1, { message: "AdvanceAmount is required and must be greater than 0" }),
});

const LoginUser = z.object({
    email: z.string().nonempty("Email is required"),
    password: z.string().nonempty("password is required"),
})

export const FlatValidation = { CreateFlat }