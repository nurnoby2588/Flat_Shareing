import z, { email } from 'zod'
const RegisterUser = z.object({
    email: z.string().nonempty("Email is required"),
    name: z.string().nonempty({ message: "Name is required" }),
    password: z.string().nonempty("password is required"),
})

const LoginUser = z.object({
    email: z.string().nonempty("Email is required"),
    password: z.string().nonempty("password is required"),
})

export const AuthValidation = { RegisterUser , LoginUser }