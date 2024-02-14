import { Router } from "express";
import * as subcat from './subcategory.controller.js'
import asyncHand from "express-async-handler"

import { addsubCatogery, paramsIdVal, updatesubCatogery } from "./subcatogery.validation.js";
import { validationMiddleware } from "../../middleware/validation.js";
const router = Router({mergeParams:true})
router.post('/subcatogeies',validationMiddleware(addsubCatogery), asyncHand(subcat.addsubCatogery))
router.get('/', asyncHand(subcat.getAllSubCatogery) )
router.get('/subcatogries/:id',validationMiddleware(paramsIdVal) ,asyncHand(subcat.getSingleSubCatogery))
router.put('/subcatogries/:id',validationMiddleware(updatesubCatogery), asyncHand(subcat.updateSubCatogery))
router.delete('/subcatogries/:id',validationMiddleware(paramsIdVal) , asyncHand(subcat.deletsubCatogery))




export default router