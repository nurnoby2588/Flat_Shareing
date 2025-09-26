import jwt, { Secret } from 'jsonwebtoken'
const generatedToken = (payload: any, secret : Secret, expire: string )=>{
return jwt.sign(payload,secret,{algorithm:'HS256',expiresIn: expire} as jwt.SignOptions ) 
}

const verifyToken = (token : string, secret : Secret)=>{
    return jwt.verify(token,secret)
}

export const jwtHelper = {generatedToken, verifyToken}