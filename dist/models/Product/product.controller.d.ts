import type { Request, Response } from "express";
export declare const AddProductController: (req: Request, res: Response) => Promise<void>;
export declare const GetAllProductController: (req: Request, res: Response) => Promise<void>;
export declare const FiltersProductsController: (req: Request, res: Response) => Promise<void>;
interface Detailsparams {
    id: string;
}
export declare const productDetailsController: (req: Request<Detailsparams>, res: Response) => Promise<void>;
export {};
//# sourceMappingURL=product.controller.d.ts.map