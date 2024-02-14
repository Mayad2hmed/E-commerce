import slugify from "slugify"
import{subcategoryModel}  from "../../../database/models/subcatogery.model.js"
import { deleteOne } from "../handler/handler.js"
export const addsubCatogery=async(req,res,next)=>{
    req.body.slug=slugify(req.body,name)
    let subcategory=new subcategoryModel(req.body)
    await subcategory.save()
    res.json({message:"success",subcategory})
}
export const getAllSubCatogery=async(req,res,next)=>{
    let filterObj={}
    if(req.params.catogery){
        filterObj.catogery=req.params.catogery
    }
    let apiFeature= new ApiFeature(subcategoryModel.find(),req.query).pagination().fields().filter().sort().search()
    let subcategory=await apiFeature.mongooseQuerey

    res.json({message:"success",page:apiFeature.pageNumber,subcategory})
}
export const getSingleSubCatogery=async(req,res,next)=>{
    let subcategory=await subcategoryModel.findById(req.params.id)
    !subcategory&&res.status(404).json({message:"subcategory not found"})
    subcategory&&res.json({message:"success",subcategory})

    res.json({message:"success",subcategory})
}
export const updateSubCatogery=async(req,res,next)=>{
    if(req.body.name)req.body.slug=slugify(req.body,name)
    
    if(req.file)req.body.image=req.file.filename
    let subcategory=await subcategoryModel.findByIdAndUpdate(req.params.id,req.body)

    !subcategory&&res.status(404).json({message:"subcategory not found"})
    subcategory&&res.json({message:"success",subcategory})

    res.json({message:"success",subcategory})
}
export const deletsubCatogery=deleteOne(subcategoryModel)
