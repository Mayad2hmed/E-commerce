import { Router } from "express";
import * as cat from './category.controller.js'
import asyncHand from "express-async-handler";
import { validationMiddleware } from "../../middleware/validation.js";

import {addCatogery,updateCatogery} from "./catogery.validation.js";
import { uploadSingleFile } from "../../../service/fileUploads/fileUpload.js";
import {allowedTo, protectedRoute} from "../auth/auth.controller.js"
const router = Router()
//catogeryRouter.use('/:catogery/subcatogery',subcatogeryRouter)
router.post('/catogeries',protectedRoute,allowedTo('user','admin'),uploadSingleFile('img'),validationMiddleware(addCatogery), asyncHand(cat.addCatogery))
router.get('/', asyncHand(cat.getAllCatogery) )
router.get('/catogries/:id',validationMiddleware(paramsIdVal) ,asyncHand(cat.getSingleCatogery))
router.put('/catogries/:id',protectedRoute,uploadSingleFile('img'),validationMiddleware(updateCatogery), asyncHand(cat.updateCatogery))
router.delete('/catogries/:id',protectedRoute,validationMiddleware(paramsIdVal) , asyncHand(cat.deletCatogery))




export default router