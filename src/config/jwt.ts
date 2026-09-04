import jwt from "jsonwebtoken";
import { Role } from "../models/user.model";

export interface JWTPayload{
    id:string;
    role:Role;
}

const JWT_SECRET = process.env.JWT_SECRET as string;

export const generateAccessToken = (payload:JWTPayload)=>{
    return jwt.sign(payload,JWT_SECRET,{expiresIn:"15m"});
}
export const verifyToken = (token:string)=>{
    return jwt.verify(token,JWT_SECRET) as JWTPayload;
}

