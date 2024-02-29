const userDataSchema = require("../models/userDataSchema");
const bcrypt = require("bcryptjs");
const {generateLoginToken, generateRegisterToken} = require("../utlis/createToken");
const asyncHandler = require("../middlewares/catchAsyncError");

// userData - /userDatas/users
exports.userDatasControllers = asyncHandler((async(req, res, next)=>{
    const {userName, email, password, confirmPassword} = req.body;

    const userExists = await userDataSchema.findOne({email});
    if(userExists){
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
       generateRegisterToken(res, data._id);
       res.json(data);
    }
})) 

// user-Login - login/loginUser

exports.loginUserControllers = asyncHandler(async(req, res, next)=>{
    const {email, password} = req.body;
    const existingUser = await userDataSchema.findOne({email});

    if(existingUser){
        const verifyPassword = await bcrypt.compare(password, existingUser.password);

        if(verifyPassword){
            const loginToken =   generateLoginToken(res, existingUser._id);
            res.status(200).json( loginToken.token);
            return;
        }
    }
    else{
        // res.status(401)
        throw new Error("Email or password does not exist");
    }
})


// user-Logout - /logOut/logOutUser

exports.logOutUserControllers = asyncHandler(((req, res)=>{
    res.cookie("jwt", "" , {
        httpOnly:true,
        expires: new Date(0),
    })

    res.json({message:"logout sucessfully"});
} ))