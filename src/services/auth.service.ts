import { generateAccessToken } from "../config/jwt";
import { Role, User } from "../models/user.model";
import bcrypt from "bcrypt";

export interface RegisterUser {
    name: string;
    email: string;
    phone: string;
    password: string;
    role: Role;
}

export interface LoginUser{
    email:string,
    password:string

}


export class AuthService {

    async registerUser(data: RegisterUser) {
        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) {
            throw new Error("User already exists");
        }
        const hashPassword = await bcrypt.hash(data.password,12);
        const user = await User.create({
            name: data.name,
            email: data.email,
            password: hashPassword,
            phone: data.phone,
            role: data.role
        });

        return user
    }

    async loginUser(data:LoginUser){
       const user =  await User.findOne({email:data.email}).select("+password");
       if(!user){
        throw new Error("User not found");
       }
       const passwordMatch = await bcrypt.compare(data.password,user.password);
       if(!passwordMatch){
        throw new Error("Invalid Credentials")
       }
       const payload ={
         id: user._id.toString(),
         role: user.role
       }
       let token;
       if(passwordMatch){
        token = generateAccessToken(payload);
       }

       return {
        token,user

       }
       
    }
}

