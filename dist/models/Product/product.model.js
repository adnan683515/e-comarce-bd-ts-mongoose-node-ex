import { model, Schema } from "mongoose";
const ProductSchema = new Schema({
    title: { type: String, required: true, maxLength: 50 },
    price: { type: Number, required: true, min: 20 },
    quantity: { type: Number, required: true },
    isStock: { type: Boolean, required: true },
    image: { type: [String], required: true },
    description: { type: String, required: true },
    cetegory: { type: Schema.Types.ObjectId, required: true },
    tags: { type: [String], required: true }
});
export const ProductModel = model('products', ProductSchema);
//# sourceMappingURL=product.model.js.map