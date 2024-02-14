import{userModel}  from "../../../database/models/user.model.js"
import { deleteOne } from "../handler/handler.js"
import { ApiFeature } from "../../utils/apiFeatures.js"
export const addUser=async(req,res,next)=>{
    let user=new userModel(req.body)

    await user.save()
    res.json({message:"success",user})
}
export const getAllUsers=async(req,res,next)=>{
    
    let apiFeature= new ApiFeature(userModel.find(),req.query).pagination().fields().filter().sort().search()
    let user=await apiFeature.mongooseQuerey

    res.json({message:"success",page:apiFeature.pageNumber,user})
}
export const getSingleUser=async(req,res,next)=>{
    let user=await userModel.findById(req.params.id)
    !user&&res.status(404).json({message:"user not found"})
    user&&res.json({message:"success",user})

    res.json({message:"success",user})
}
export const updateUser=async(req,res,next)=>{

    let user=await userModel.findByIdAndUpdate(req.params.id,req.body)

    !user&&res.status(404).json({message:"user not found"})
    user&&res.json({message:"success",user})

    res.json({message:"success",user})
}
export const deletUser=deleteOne(userModel)
