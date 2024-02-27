const userDataSchema = require("../models/userDataSchema");
const bcrypt = require("bcryptjs");
const createToken = require("../utlis/createToken");
const asyncHandler = require("../middlewares/catchAsyncError");

// userData - /userDatas/users
exports.userDatasControllers = asyncHandler((async(req, res, next)=>{
    const {userName, email, password, confirmPassword} = req.body;

    const userExists = await userDataSchema.findOne({email});
    if(userExists){
        // res.status(401).json({status:false, message:"user already exist"});
        throw new Error("User already exist");
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const hashConfirmPassword = await bcrypt.hash(confirmPassword, salt); 
        const data = new userDataSchema({
            userName:userName,
            email:email,
            password:hashPassword,
            confirmPassword:hashConfirmPassword
        })
    
       await data.save();
       createToken(res, data._id);
       res.json(data);
    }

})) 