import mongoose from "mongoose";
import type { Iproduct } from "./product.interface.js";
export declare const productCreatingService: (payLoad: Iproduct) => Promise<{
    status: number;
    message: string;
} | undefined>;
export declare const GetAllProductService: () => Promise<(mongoose.Document<unknown, {}, Iproduct, {}, {}> & Iproduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
})[] | undefined>;
interface Ioptions {
    Cetegory?: string;
    tag?: string;
    fromPrice?: string;
    endPrice?: string;
}
export declare const filterProductService: (options: Ioptions) => Promise<(mongoose.Document<unknown, {}, Iproduct, {}, {}> & Iproduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
})[] | {
    message: string;
} | undefined>;
export declare const ProductDetailsService: (id: string) => Promise<(mongoose.Document<unknown, {}, Iproduct, {}, {}> & Iproduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}) | {
    message: string;
} | undefined>;
export {};
//# sourceMappingURL=product.service.d.ts.map