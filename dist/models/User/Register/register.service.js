import { User } from "./register.model.js";
export const registerService = async (payLoad) => {
    try {
        const result = await User.create(payLoad);
        if (result) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.log("Register Service Error", err);
    }
};
export const loginService = async (payLoad) => {
    try {
        const { password, email } = payLoad;
        console.log("password", password, email);
        const getUser = await User.findOne({ email });
        if (!getUser) {
            return { status: 404, message: 'user not found!' };
        }
        if (getUser?.password == password) {
            return { status: 200, message: 'Login successfully!' };
        }
        return { status: 409, message: 'Password Does not match!' };
    }
    catch (err) {
        console.log("Login Service Error", err);
    }
};
export const GetAllUserService = async () => {
    const result = await User.find();
    return result;
};
//# sourceMappingURL=register.service.js.map