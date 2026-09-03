import { Request, Response, NextFunction } from "express";
import userModel = require("../models/user.model");


export const getUser = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const users = await userModel.User.find();
        response.status(200).json({ success: true, data: users });
    }
    catch (err) {
        next(err)
    }
}

export const createUser = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { name, email, phone, password } = request.body;
        const existing = await userModel.User.findOne({ email });
        if (existing) {
            return response.status(400).json({ success: false, message: "User already exists" });
        }
        const user = await userModel.User.create({ name, email, phone, password });
        response.status(201).json({ success: true, data: user });
    }
    catch (err) {
        next(err)
    }
}