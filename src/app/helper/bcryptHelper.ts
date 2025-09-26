import * as bcrypt from "bcrypt";

const hashPassword = async (password: string) => {
    const solt = 12
    return bcrypt.hash(password, solt)
}
const matchHashPassword = async (plainPassword: string, hashPassword: string) => {
    return bcrypt.compare(plainPassword, hashPassword)
}

export const bcryptHelper = { hashPassword, matchHashPassword }