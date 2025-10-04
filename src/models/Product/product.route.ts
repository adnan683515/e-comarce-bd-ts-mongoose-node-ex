
import express from 'express'
import { AddProductController, FiltersProductsController, GetAllProductController, productDetailsController } from './product.controller.js'

const route = express.Router()


route.post('/add-product',AddProductController)

route.get('/get-products', GetAllProductController)

route.get('/products-filter', FiltersProductsController)


route.get('/product-details/:id', productDetailsController)

export const ProductRouter = route
