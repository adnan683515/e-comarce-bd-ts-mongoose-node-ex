import { GetAllUserService, loginService, registerService } from "./register.service.js";
import { User } from "./register.model.js";
export const RegisterController = async (req, res) => {
    try {
        const result = await registerService(req?.body);
        const { email } = req?.body;
        const ckUser = await User.findOne({ email });
        if (ckUser) {
            return res.status(400).json({
                'message': 'this email already exists!'
            });
        }
        if (result) {
            res.status(200).json({
                'message': 'User Registration Successfully',
            });
            return res.status(409).json({
                'message': 'Registration Error!'
            });
        }
    }
    catch (err) {
        console.log("Register Controller error", err);
    }
};
export const LoginController = async (req, res) => {
    try {
        const result = await loginService(req?.body);
        res.send(result);
    }
    catch (err) {
        console.log("error", err);
    }
};
export const UserGetController = async (req, res) => {
    const result = await GetAllUserService();
    res.send(result);
};
//# sourceMappingURL=register.controller.js.map