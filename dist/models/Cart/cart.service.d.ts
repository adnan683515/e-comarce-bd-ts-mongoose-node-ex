import type { ICart } from "./cart.interface.js";
export declare const CartAddedService: (payLoad: ICart) => Promise<(import("mongoose").Document<unknown, {}, ICart, {}, {}> & ICart & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | undefined>;
export declare const DeleteCartService: (id: string) => Promise<import("mongodb").DeleteResult>;
//# sourceMappingURL=cart.service.d.ts.map