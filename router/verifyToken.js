const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next)=>{
    const authHeader = req.headers.authorization
    if(authHeader){
        const token = authHeader.split(' ')[1]
        console.log(token)
        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            if(err){
                res.status(403).json('Token not Valid')
            } else{
                req.user = user;
                next()
            }
        })
    } else {
        return res.status(401).json('You are not Authorized')
    }
}

//authorize admin




exports.adminAuthorize =(req,res,next)=>{
    if(req.body.role === "admin"){
      next();
    }else{
      res.send(" user is unauthorized here ");
    }
  }

  exports.userAuthorize =(req,res,next)=>{
    if(req.body.role === "user"){
      next();
    }else{
      res.send(" admin is unauthorized here");
    }
  }

  