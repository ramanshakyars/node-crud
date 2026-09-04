import { NextFunction, Request, Response } from "express";
import { AuthService, LoginUser } from "../services/auth.service";

const authService = new AuthService();

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.loginUser(req.body);
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        next(error)
    }
}

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.registerUser(req.body)
        return res.status(201).json({ success: true, data: result })
    } catch (error) {
        next(error)
    }
}
