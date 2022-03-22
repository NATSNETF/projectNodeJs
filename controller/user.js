const User =require('../model/user');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

exports.register = async (req,res)=>{
    const user = new User({
        id:req.body.id,
        name: req.body.name,
        password: cryptoJS.AES.encrypt(req.body.password,process.env.PWD_SECRET).toString(),
        role:req.body.role
    })
    console.log(user);
    try{
        const newUser = await user.save()
        //console.log(newUser);
        res.status(200).json(newUser)

    }catch(err){
        res.status(500).json(err)

    }
}

exports.login= async (req,res)=>{
    try{
        const user = await User.findOne({name: req.body.name})
        !user && res.status(401).json('wrong Credentials')
        //token
        const token= jwt.sign({id: user._id,name: user.name},process.env.JWT_SEC_KEY,{expiresIn:"10"})
        //decrypt password
        console.log(token)
        const hashedPwd = cryptoJS.AES.decrypt(user.password,process.env.PWD_SECRET)
        const pwd = hashedPwd.toString(cryptoJS.enc.Utf8)
        console.log(pwd);
        pwd !==req.body.password && res.status(401).json('wrong password')
        res.status(200).json(token)

    }catch(err){
        res.status(500).json(err)
    }
 }


 exports.getAll= async (req,res)=>{
     try{
         const users = new User.find({})
          res.status(200).json(users);
          console.log(users);
     }catch(err){
         res.status(401).json(err)
     }
 }

 





