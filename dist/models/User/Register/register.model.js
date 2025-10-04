import { model, Schema } from "mongoose";
const RegisterSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
export const User = model('register', RegisterSchema);
//# sourceMappingURL=register.model.js.map