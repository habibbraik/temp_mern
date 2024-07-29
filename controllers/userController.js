import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
export const getApplicationStats = async(req,res)=>{
    const users=await User.countDocuments();
    // const jobs=await JobModel.countDocuments();
    // res.status(StatusCodes.OK).json({users,jobs})
    res.status(StatusCodes.OK).json({users})
}
export const getAllUsers = async (_req, res) => {
    const users = await User.find({
      role:"user",
    }).select("-password");
    res.status(StatusCodes.OK).json({ users });
  };
// export const updateUser = async(req,res)=>{
//     const newUser={...req.body}
//     delete newUser.password;

//     if(req.file){
//         const response=await cloudinary.v2.uploader.upload(req.file.path)
//         await fs.unlink(req.file.path)
//         newUser.avatar=response.secure_url
//         newUser.avatarPublicId=response.public_id
//     }
//     const updatedUser=await User.findByIdAndUpdate(req.user.userId,newUser)
//     if(req.file && updatedUser.avatarPublicId){
//         await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId)
//     }
//     res.status(StatusCodes.OK).json({msg:'get update user',user:updatedUser})

// }
