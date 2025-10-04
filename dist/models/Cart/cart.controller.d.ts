import type { Request, Response } from "express";
import type { ICart } from "./cart.interface.js";
export declare const CartCreateController: (req: Request<ICart>, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getCartSpecificUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
interface Ipeymentbody {
    userId: string;
    cartItemsId: string;
    amount: number;
}
export declare const payMentCartItemsController: (req: Request<Ipeymentbody>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
interface DeleteParams {
    cartId: string;
    userId: string;
}
export declare const DeleteCartItemsController: (req: Request<DeleteParams>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=cart.controller.d.ts.map