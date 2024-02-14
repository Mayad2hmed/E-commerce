
import Joi from "joi"
export const addCatogery={

    body:Joi.object({
        name:Joi.string().min(5).max(200).alphanum().required().trim(),
        image:Joi.object({
            fieldname:Joi.string().required(),
            originalname:Joi.string().required(),
            originalname:Joi.string().required(),
            originalname:Joi.string().required(),
            originalname:Joi.string().required(),
            encoding:Joi.string().required(),
            mimetype:Joi.string().valid('image/jpeg','image/png','image/jpg').required(),
            size:Joi.number().max(5252880).required(),
            destination:Joi.string().required(),
            filename:Joi.string().required(),
            path:Joi.string().required(),
        }).required()
        
    })
   
   
}
export const paramsIdVal={

    body:Joi.object({
        id:Joi.string().hex().length(24).required(),
        
    })
   
   
}
export const updateCatogery={

    body:Joi.object({
        name:Joi.string().min(5).max(200).alphanum().trim(),
        id:Joi.string().hex().length(24).required(),
        image:Joi.object({
            fieldname:Joi.string().required(),
            originalname:Joi.string().required(),
            originalname:Joi.string().required(),
            originalname:Joi.string().required(),
            originalname:Joi.string().required(),
            encoding:Joi.string().required(),
            mimetype:Joi.string().valid('image/jpeg','image/png','image/jpg').required(),
            size:Joi.number().max(5252880).required(),
            destination:Joi.string().required(),
            filename:Joi.string().required(),
            path:Joi.string().required(),
        }).required()
    })
   
   
}