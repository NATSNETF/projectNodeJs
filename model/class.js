const mongoose = require('mongoose');
const ClassSchema = new mongoose.Schema({
    classCode:{type: String, required:true, unique:true},
    slot:[{
        slotNumber:{type:Number,required:true},
        status:{type:String,required:true}
    }],
    usedBy:{type:String,required:true},

})


module.exports = mongoose.model('Class', ClassSchema);