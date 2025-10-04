import type { Request, Response } from "express";
import { filterProductService, GetAllProductService, productCreatingService, ProductDetailsService } from "./product.service.js";



//created products
export const AddProductController = async (req:Request, res:Response)=>{

    try{

        const result = await productCreatingService(req?.body)
        res.send(result)
    }
    catch (err){
        console.log("Add product controller error",err)
    }
}


//get all products
export const GetAllProductController = async (req:Request, res : Response)=>{

    try{
        const result = await GetAllProductService()
        res.send(result)
    }
    catch(err){
        console.log("get all products service",err)
    }
}


//search by cetegory  || price || tags


export const FiltersProductsController= async (req:Request, res : Response)=>{
    try{

        // const result = await 
        const options = req?.query
        const result = await filterProductService(options)
        res.send(result) 

    }
    catch(er){
        console.log("filter Product controller error",er)
    }
}


//details controller

interface Detailsparams {
    id : string
}
export const productDetailsController = async (req:Request<Detailsparams>, res:Response)=>{

    try{

        const {id} = req?.params 
        const result = await ProductDetailsService(id )
        res.send(result)
    }
    catch(err){
        console.log("Details controller error",err)
    }
}