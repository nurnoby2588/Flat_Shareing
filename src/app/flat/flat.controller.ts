import { Request, Response } from "express";
import catchAsync from "../shared/catchAsync";
import { FlatServices } from "./flat.services";
import sendResponse from "../shared/sendResponse";
import status from "http-status";

const createFalt=catchAsync(async(req:Request, res: Response)=>{
    const result = await FlatServices.createFalt(req.body)
    sendResponse(res,{
        statusCode:status.CREATED,
        success:true,
        message:"Flat created successfully",
        data: result
    })
})
export const FlatController = {createFalt}