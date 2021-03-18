const mongoose =require('mongoose');

const CustomerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    number:{
         type:String,
        required:true
    },
    address:{
         type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
      }

});


const Customer=mongoose.model('Customer', CustomerSchema);

module.exports=Customer;
