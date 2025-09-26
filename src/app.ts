import express, { Request, Response, type Application } from 'express'
import cors from 'cors'
import { AuthRouter } from './app/auth/auth.router';
import handleGlobalError from './app/error/handleGlobalError';
import cookieParser from 'cookie-parser'
import { FlatRouter } from './app/flat/flat.router';
const app: Application = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())

app.get('/',(req:Request ,res:Response)=>{
    res.send("hello")
})

app.use('/api/v1/auth',AuthRouter)
app.use('/api/v1/flat',FlatRouter)
app.use(handleGlobalError)

export default app
