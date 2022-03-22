const express=require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

const userRouter=require('./router/user')
const classRouter=require('./router/class')


 mongoose.connect('mongodb://localhost:27017/project', err =>{  //mongodb://localhost:27020/manage

 if(err){
        console.log('DB error: ' ,err);
    }else{
        console.log('DB connected');
    }
})
const app = express();
app.use(express.json());

app.use('/user',userRouter)
app.use('/class',classRouter)

app.listen(5000,()=>{
    console.log('server is running on port 5000....');
})