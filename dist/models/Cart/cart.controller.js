import { User } from "../User/Register/register.model.js";
import { ProductModel } from "../Product/product.model.js";
import { Cart } from "./cart.model.js";
import { CartAddedService, DeleteCartService } from "./cart.service.js";
import mongoose from "mongoose";
export const CartCreateController = async (req, res) => {
    try {
        const { user, product, quantity } = req.body;
        if (!mongoose.isValidObjectId(product) || !mongoose.isValidObjectId(user)) {
            return res.status(400).json({ success: false, message: "Invalid ObjectId" });
        }
        const ckUser = await User.findById(user);
        if (!ckUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const ckProduct = await ProductModel.findById(product);
        if (!ckProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        const qty = Number(quantity);
        if (isNaN(qty) || qty <= 0) {
            return res.status(400).json({ success: false, message: "Invalid quantity" });
        }
        let ckProductInCart = await Cart.findOne({ product, user });
        if (!ckProductInCart) {
            const totalPrice = ckProduct.price * qty;
            const payload = { user, product: ckProduct._id, quantity: qty, totalPrice };
            const result = await CartAddedService(payload);
            return res.status(201).json({
                success: true,
                message: "Product added to cart",
                data: result
            });
        }
        else {
            ckProductInCart.quantity += qty;
            ckProductInCart.totalPrice += qty * ckProduct.price;
            await ckProductInCart.save();
            return res.status(200).json({
                success: true,
                message: "Cart updated successfully",
                data: ckProductInCart
            });
        }
    }
    catch (err) {
        console.error("CartCreateController error:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
export const getCartSpecificUser = async (req, res) => {
    try {
        const { userId } = req?.query;
        if (!mongoose.isValidObjectId(userId)) {
            return res.send({ message: 'object Id is not valid' });
        }
        const result = await Cart.find({ user: userId });
        if (!result) {
            return res.send({ message: 'cart not found this user' });
        }
        return res.send(result);
    }
    catch (err) {
        console.log("Error from getCartSpecificuser ", err);
    }
};
export const payMentCartItemsController = async (req, res) => {
    try {
        const { userId, cartItemsId, amount } = req?.body;
        if (!mongoose.isValidObjectId(userId) || !mongoose.isValidObjectId(cartItemsId)) {
            return res.send({ message: 'object Id is not valid' });
        }
        const result = await Cart.findOne({ user: userId, _id: cartItemsId });
        if (!result) {
            return res.send({ message: 'cart items not found this user' });
        }
        if (amount < result?.totalPrice) {
            return res.send({
                success: false, message: `You will be send also ${result?.totalPrice - amount}tk`
            });
        }
        else if (amount >= result?.totalPrice) {
            result.payment = true;
            result.save();
            return res.send({
                success: true, message: `Payment Successful! ${result?.totalPrice - amount} tk remaining`,
                data: result
            });
        }
    }
    catch (err) {
    }
};
export const DeleteCartItemsController = async (req, res) => {
    try {
        const { userId, cartId } = req?.params;
        if (!mongoose.isValidObjectId(cartId)) {
            return res.status(400).json({ success: false, message: "Invalid ObjectId" });
        }
        const ckCart = await Cart.findOne({ _id: cartId, user: userId });
        if (!ckCart) {
            return res.status(400).json({ success: false, message: "cart not found" });
        }
        const id = cartId;
        const result = await DeleteCartService(id);
        if (result) {
            res.status(200).json({ success: true, message: 'cart deleted' });
        }
    }
    catch (err) {
        console.log("Delete Cart Controller", err);
    }
};
//# sourceMappingURL=cart.controller.js.map