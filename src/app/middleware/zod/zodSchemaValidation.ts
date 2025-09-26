import { NextFunction, Request, Response } from "express"

const zodValidation = (model: any) => {
    return async (req: Request, res: Response, nex: NextFunction) => {
        try {
            model.parse(req.body)
            nex()
        } catch (error) {
            nex(error)
        }
    }
}

export default zodValidation