
const Class = require('../model/class');

exports.addClass = async (req, res)=>{
    const newClass = new Class(req.body)
    console.log(req.body);
    try{
         await newClass.save()
        res.status(200).json('class saved')
    }catch(err){
        res.status(500).json(err);
    }
}

exports.getClassById= async (req,res)=>{
    try{
    const newClass = await Class.findById(req.params.id);
    res.status(200).json(newClass);
    }catch(err){
        res.status(500).json(err);

    }
}
exports.getAllClasses= async (req,res)=>{
   Class.find({})
   .then(data=> res.status(200).json(data))
    .catch(err => res.status(404).json(err)) 

}

 // admin can delete class
 exports.deleteByID = (req, res)=>{
    Class.deleteOne({_id:req.params.id})
    .then(data=> res.status(200).json(data))
    .catch(err => res.status(404).json(err))  
   
 };

 // user request a class
exports.requestClass = (req,res, next) =>{
    const course = req.body.classCode;
    Class.find({classCode : course})
    .then(data=>{
        let message;
           if(data[0].slot[0].status === 'busy'){
             message ='the class is full'

           }else{
               message ='you can added to the class'
           }
     res.status(200).json(message)

    })
    .catch(err => res.status(404).json(err))  
};

















 //admin can view class ... done
// exports.viewClass= (req,res)=>{
//     Class.find({})
//      .then(data=> res.status(200).json(data))
//      .catch(err => res.status(404).json(err))       
//  }


 



 



