import express from 'express';
import cors from 'cors';
import { RegisterRouter } from './models/User/Register/register.route.js';
import { ProductRouter } from './models/Product/product.route.js';
import { CartRouter } from './models/Cart/cart.route.js';
export const app = express();
app.use(express.json());
app.use(cors());
//user router 
app.use('/user', RegisterRouter);
//product router
app.use('/product', ProductRouter);
//cart router
app.use('/cart', CartRouter);
app.get('/', (req, res) => {
    res.send('hello world');
});
//# sourceMappingURL=app.js.map