import { Router } from "express";
import * as brand from './brand.controller.js'
import asyncHand from "express-async-handler"
import { uploadSingleFile } from "../../../service/fileUploads/fileUpload.js";
import { addBrand, paramsIdVal, updateBrand } from "./brand.validation.js";
import { validationMiddleware } from "../../middleware/validation.js";
const router = Router()
router.post('/brands',uploadSingleFile('logo'),validationMiddleware(addBrand), asyncHand(brand.addBrand))
router.get('/', asyncHand(brand.getAllBrands) )
router.get('/brands/:id',validationMiddleware(paramsIdVal) ,asyncHand(brand.getSingleBrand))
router.put('/brands/:id',uploadSingleFile('logo'),validationMiddleware(updateBrand), asyncHand(brand.updateBrand))
router.delete('/brands/:id',validationMiddleware(paramsIdVal) , asyncHand(brand.deletBrand))




export default router