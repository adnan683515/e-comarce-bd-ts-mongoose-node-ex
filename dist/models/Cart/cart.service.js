import { Cart } from "./cart.model.js";
export const CartAddedService = async (payLoad) => {
    try {
        const cartInfo = payLoad;
        const result = await Cart.create(cartInfo);
        return result;
    }
    catch (err) {
        console.log('Error from cart Added service error', err);
    }
};
export const DeleteCartService = async (id) => {
    const result = await Cart.deleteOne({ _id: id });
    return result;
};
//# sourceMappingURL=cart.service.js.map