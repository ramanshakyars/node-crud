// middleware/auth.middleware.ts

import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../config/jwt";

export interface AuthRequest extends Request {
    user?: {
        userId: string;
        role: string;
    };
}

export function authenticate(
    req: AuthRequest,
    res: Response,
    next: NextFunction
) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization token required",
        });
    }

    const [type, token] = authHeader.split(" ");

    if (type !== "Bearer" || !token) {
        return res.status(401).json({
            success: false,
            message: "Invalid authorization format",
        });
    }

    try {

        const payload = verifyToken(token);

        req.user = {
            userId: payload.id,
            role: payload.role,
        };

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
}