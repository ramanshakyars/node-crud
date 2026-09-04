import mongoose ,{Document,Schema} from "mongoose";

export interface IUser extends Document{
    name: string;
    email: string;
    phone:string;
    password: string;

}

const userSchema=new Schema<IUser>(
{
    name:{type:String,required:[    true,"Name is required"]},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    password:{type:String,required:true}
}
);
export const User=mongoose.model<IUser>("User",userSchema);
