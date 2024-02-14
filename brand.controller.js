import slugify from "slugify"
import { brandModel } from "../../../database/models/brand.model.js"
import { deleteOne } from "../handler/handler.js"
import { ApiFeature } from "../../utils/apiFeatures.js"
export const addBrand=async(req,res,next)=>{
    req.body.slug=slugify(req.body,name)
    req.body.logo=req.file.filename
    let brand=new brandModel(req.body)
    await brand.save()
    res.json({message:"success",brand})
}
export const getAllBrands=async(req,res,next)=>{
    let apiFeature= new ApiFeature(brandModel.find(),req.query).pagination().fields().filter().sort().search()
    let brand=await apiFeature.mongooseQuerey

    res.json({message:"success",brand})
}
export const getSingleBrand=async(req,res,next)=>{
    let brand=await brandModel.findById(req.params.id)
    !brand&&res.status(404).json({message:"=brand not found"})
    brand&&res.json({message:"success",brand})

    res.json({message:"success",brand})
}
export const updateBrand=async(req,res,next)=>{
    if(req.body.name)req.body.slug=slugify(req.body,name)
    
    if(req.file)req.body.logo=req.file.filename
    let brand=await brandModel.findByIdAndUpdate(req.params.id,req.body)

    !brand&&res.status(404).json({message:"brand not found"})
    brand&&res.json({message:"success",brand})

    res.json({message:"success",brand})
}
export const deletBrand=deleteOne(brandModel)