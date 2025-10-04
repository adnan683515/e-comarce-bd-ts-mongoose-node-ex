import type { ICart } from "./cart.interface.js";
import { Cart } from "./cart.model.js";






export const CartAddedService = async (payLoad:ICart)=>{

    try{
        const cartInfo = payLoad
        const result = await Cart.create(cartInfo)
        return result

    }catch(err){
        console.log('Error from cart Added service error',err)
    }
}



export const DeleteCartService = async (id : string)=>{

    const result = await Cart.deleteOne({_id  : id})
    return result
}
