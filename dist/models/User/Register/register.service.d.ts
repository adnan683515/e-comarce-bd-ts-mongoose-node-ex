import type { ILogin, IRegister } from "./register.interface.js";
export declare const registerService: (payLoad: IRegister) => Promise<boolean | undefined>;
export declare const loginService: (payLoad: ILogin) => Promise<{
    status: number;
    message: string;
} | undefined>;
export declare const GetAllUserService: () => Promise<(import("mongoose").Document<unknown, {}, IRegister, {}, {}> & IRegister & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
//# sourceMappingURL=register.service.d.ts.map