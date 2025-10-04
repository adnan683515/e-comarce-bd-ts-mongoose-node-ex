import { model, Schema } from "mongoose"
import type { Iproduct } from "./product.interface.js"




const ProductSchema = new Schema<Iproduct>({

    title: {type : String, required : true , maxLength : 50} ,
    price: {type : Number , required : true, min : 20},
    quantity: {type : Number, required : true},
    isStock: {type : Boolean , required : true},
    image: {type : [String] , required : true},
    description: {type : String , required : true},
    cetegory: {type : Schema.Types.ObjectId , required : true },
    tags: {type : [String] , required : true}
})

export const ProductModel = model<Iproduct>('products',ProductSchema)