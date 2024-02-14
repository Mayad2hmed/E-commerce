import slugify from "slugify"
import { categoryModel } from "../../../database/models/category.model.js"
import { deleteOne } from "../handler/handler.js"
import { ApiFeature } from "../../utils/apiFeatures.js"

export const addCatogery=async(req,res,next)=>{
    req.body.slug=slugify(req.body,name)
    req.body.image=req.file.filename
    let catogery=new categoryModel(req.body)
    await catogery.save()
    res.json({message:"success",catogery})
}
export const getAllCatogery=async(req,res,next)=>{
    let apiFeature= new ApiFeature(categoryModel.find(),req.query).pagination().fields().filter().sort().search()
    let category=await apiFeature.mongooseQuerey
    

    res.json({message:"success",category})
}
export const getSingleCatogery=async(req,res,next)=>{
    let catogery=await categoryModel.findById(req.params.id)
    !catogery&&res.status(404).json({message:"catogery not found"})
    catogery&&res.json({message:"success",catogery})

    res.json({message:"success",catogery})
}
export const updateCatogery=async(req,res,next)=>{
    if(req.body.name)req.body.slug=slugify(req.body,name)
    
    if(req.file)req.body.image=req.file.filename
    let catogery=await categoryModel.findByIdAndUpdate(req.params.id,req.body)

    !catogery&&res.status(404).json({message:"catogery not found"})
    catogery&&res.json({message:"success",catogery})

    res.json({message:"success",catogery})
}
export const deletCatogery=deleteOne(categoryModel)