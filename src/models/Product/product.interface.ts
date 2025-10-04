import type { Types } from "mongoose";



export interface Iproduct {

    title : string,
    price : number,
    quantity : number,
    isStock : boolean,
    image : string[],
    description : string,
    cetegory : Types.ObjectId,
    tags : string[]
}