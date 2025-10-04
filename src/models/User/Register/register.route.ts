



import express from 'express'
import { LoginController, RegisterController, UserGetController } from './register.controller.js'

const route = express.Router()

route.post('/registation', RegisterController)

route.post('/login',LoginController)

route.get('/users',UserGetController)

export const RegisterRouter = route