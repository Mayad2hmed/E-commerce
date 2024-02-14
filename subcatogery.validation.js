import Joi from "joi"

export const addsubCatogery={

    body:Joi.object({
        name:Joi.string().min(5).max(200).alphanum().required().trim(),
        catogery:Joi.string().hex().length(24).required()
        
    })
   
   
}
export const paramsIdVal={

    body:Joi.object({
        id:Joi.string().hex().length(24).required(),
        
    })
   
   
}
export const updatesubCatogery={

    body:Joi.object({
        name:Joi.string().min(5).max(200).alphanum().trim(),
        id:Joi.string().hex().length(24),
        catogery:Joi.string().hex().length(24)
    })
   
   
}