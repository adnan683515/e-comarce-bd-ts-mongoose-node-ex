import { model, Schema } from "mongoose";
const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'ProductModel', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, default: 0 },
    createdAt: { type: Date, timestamps: true },
    payment: { type: Boolean, default: false }
});
export const Cart = model('cartItems', CartSchema);
//# sourceMappingURL=cart.model.js.map