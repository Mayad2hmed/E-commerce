import Joi from "joi"

export const addUser={

    body:Joi.object({
        name:Joi.string().min(5).max(200).required(),
        email:Joi.string().min(5).max(200).required(),
        password:Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).required(),
        repassword:Joi.valid(Joi.ref('password')).required()
        
    })
   
   
}
export const paramsIdVal={

    body:Joi.object({
        id:Joi.string().hex().length(24).required(),
        
    })
   
   
}
export const updateUser={

    body:Joi.object({
        id:Joi.string().hex().length(24).required(),

        name:Joi.string().min(5).max(200),
        email:Joi.string().min(5).max(200),
        password:Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).required(),
        repassword:Joi.valid(Joi.ref('password')),
        role:Joi.string().valid('user','admin')
    })
   
   
}