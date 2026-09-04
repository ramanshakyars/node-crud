import mongoose, { Document, Schema } from "mongoose";

export enum Role {
    Admin = "admin",
    User = "user",
    Other = "other"
}

export interface IUser extends Document {
    name: string;
    email: string;
    phone: string;
    password: string;
    role: Role;

}

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: [true, "Name is required"] },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: Role, default: Role.User }
    }
);
export const User = mongoose.model<IUser>("User", userSchema);
