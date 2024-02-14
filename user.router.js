import { Router } from "express";
import * as user from './user.controller.js'
import asyncHand from "express-async-handler"
import { addUser, updateUser,paramsIdVal } from "./user.validation.js";
import { validationMiddleware } from "../../middleware/validation.js";
const router = Router({})
router.post('/adduser',validationMiddleware(addUser), asyncHand(user.addUser))
router.get('/', asyncHand(user.getAllUsers) )
router.get('/user/:id',validationMiddleware(paramsIdVal) ,asyncHand(user.getSingleUser))
router.put('/user/:id',validationMiddleware(updateUser), asyncHand(user.updateUser))
router.delete('/user/:id',validationMiddleware(paramsIdVal) , asyncHand(user.deletUser))




export default router