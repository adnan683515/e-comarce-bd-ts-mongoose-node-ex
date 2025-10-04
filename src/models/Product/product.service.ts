import mongoose from "mongoose";
import type { Iproduct } from "./product.interface.js";
import { ProductModel } from "./product.model.js";
import { error } from "console";






//add product service
export const productCreatingService = async (payLoad: Iproduct) => {

    try {

        const { title, cetegory: cetagoryId } = payLoad

        const ckproduct = await ProductModel.findOne({ title })


        if (!mongoose.isValidObjectId(cetagoryId)) {
            return { status: 400, message: 'CetegoryId is not validate' }
        }

        if (ckproduct) {
            return { status: 409, message: 'This Product Already Created' }
        }
        const result = await ProductModel.create(payLoad)
        if (result) {
            return { status: 200, message: 'Add Product Successfully' }
        }
    } catch (err) {
        console.log("Product Created Service Error", err)
    }
}



//get all products
export const GetAllProductService = async () => {

    try {
        const result = await ProductModel.find()
        return result
    }
    catch (err) {
        console.log("Error from get all product service", err)
    }
}


// filter product service
interface Ioptions {
    Cetegory?: string,
    tag?: string,
    fromPrice?: string,
    endPrice?: string
}
export const filterProductService = async (options: Ioptions) => {

    try {
        const query: any = {}
        if (options?.Cetegory && mongoose.isValidObjectId(options?.Cetegory)) {
            query.cetegory = options?.Cetegory

            const result = await ProductModel.find(query)
            return result
        }
        else if (options?.Cetegory && !mongoose.isValidObjectId(options?.Cetegory)) {
            return { message: "Cetegory id is not valid!" };
        }


        if (options?.tag) {
            const result = await ProductModel.find({ tags: options?.tag })
            if (result?.length < 1) {
                return { message: 'Not found' }
            }
            return result
        }

        if (options?.fromPrice && options?.endPrice) {

            const { fromPrice, endPrice } = options

            const result = await ProductModel.find({ price: { $gte: parseInt(fromPrice), $lte: parseInt(endPrice) } })
            return result
        }


    }
    catch (err) {
        console.log("Filter Product Service error", err)
    }

}


//product details service
export const ProductDetailsService = async (id:string)=>{

    try{
        if(!mongoose.isValidObjectId(id)){
            return {message : 'Object id is not valid'}
        }
        const ckProduct = await ProductModel.findOne({_id : id})
        if(!ckProduct){
            return {message : 'product not found'}
        }
        return ckProduct
    }
    catch(err){
        console.log("product details eror",err)
    }
}