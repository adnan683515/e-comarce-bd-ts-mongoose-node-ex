import express from 'express';
import { CartCreateController, DeleteCartItemsController, getCartSpecificUser, payMentCartItemsController } from './cart.controller.js';
const route = express.Router();
route.post('/cart-create', CartCreateController);
route.get('/cart-details-user', getCartSpecificUser);
route.delete('/delete-items-cart/:userId/:cartId', DeleteCartItemsController);
route.post('/payment-product', payMentCartItemsController);
export const CartRouter = route;
//# sourceMappingURL=cart.route.js.map