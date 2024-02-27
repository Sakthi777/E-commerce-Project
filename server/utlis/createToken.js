const jwt = require("jsonwebtoken");

const generateToken = (res, userId)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY,{
        expiresIn:"30d"
    })
    res.cookie("jwt", token, {
        httpOnly:true,
        secure:process.env.NODE_ENV == "development",
        samesite:"strict",
        maxAge:30*24*60*1000
    })

    return token;
}

module.exports = generateToken;