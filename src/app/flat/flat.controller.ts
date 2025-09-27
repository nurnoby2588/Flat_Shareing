import { Request, Response } from "express";
import catchAsync from "../shared/catchAsync";
import { FlatServices } from "./flat.services";
import sendResponse from "../shared/sendResponse";
import status from "http-status";
import pick from "../shared/pick";
import { filterAbleData, peginationField } from "./flat.constant";


const createFalt = catchAsync(async (req: Request, res: Response) => {
    const result = await FlatServices.createFalt(req.body)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Flat created successfully",
        data: result
    })
})
const getFlatFromDb = catchAsync(async (req: Request, res: Response) => {
    const filterData = pick(req.query, filterAbleData)
    const options = pick(req.query, peginationField)
    const result = await FlatServices.getFlatFromDb(filterData, options)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Flats retrieved successfully",
        data: result
    })
})
const updateFlat = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    console.log(id)
    const result = await FlatServices.updateFlat(id, req.body)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Flat information updated successfully",
        data: result
    })
})
const flatBooking = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body)
    const result = await FlatServices.flatBooking(req)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Booking requests submitted successfully",
        data: result
    })
})
const getFlatBookingRequests = catchAsync(async (req: Request, res: Response) => {
    const result = await FlatServices.getFlatBookingRequests()
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Booking requests submitted successfully",
        data: result
    })
})
const updatedFlatBookingStatus = catchAsync(async (req: Request, res: Response) => {
    const {bookingId} = req.params;
    const statusData = req.body.status
    const result = await FlatServices.updatedFlatBookingStatus(bookingId, statusData)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Booking requests submitted successfully",
        data: result
    })
})
export const FlatController = { createFalt, getFlatFromDb, updateFlat, flatBooking, getFlatBookingRequests ,updatedFlatBookingStatus }