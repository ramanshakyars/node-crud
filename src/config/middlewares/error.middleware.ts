import { NextFunction, Request, Response } from "express";

export const errorHandler = (
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction,
) => {
	response.status(500).json({
		success: false,
		message: error.message || "Internal server error",
	});
};
