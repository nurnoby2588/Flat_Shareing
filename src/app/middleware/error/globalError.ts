import { NextFunction, Request, Response } from "express";
import status from "http-status";

const handleGlobalError = async (error: any, req: Request, res: Response, next: NextFunction) => {
    console.log("in gloal error")
    res.status(status.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message || "Something went wrong",
        errorDetails: error
    })
}
export default handleGlobalError