import type { Types } from "mongoose";
export interface ICart {
    user: Types.ObjectId;
    product: Types.ObjectId;
    quantity: number;
    totalPrice: number;
    createdAt?: Date;
    payment?: boolean;
}
//# sourceMappingURL=cart.interface.d.ts.map