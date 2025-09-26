import express, { Request, Response, type Application } from 'express'
import cors from 'cors'
import { AuthRouter } from './app/auth/auth.router';
import handleGlobalError from './app/error/handleGlobalError';
const app: Application = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/',(req:Request ,res:Response)=>{
    res.send("hello")
})

app.use('/api/v1/auth',AuthRouter)
app.use(handleGlobalError)

export default app
