import { model, Schema } from "mongoose";
import type { IRegister } from "./register.interface.js";



const RegisterSchema = new Schema<IRegister>({

    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})




export const User = model<IRegister>('register',RegisterSchema)