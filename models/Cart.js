const mongoose=require('mongoose');


const CartSchema=new mongoose.Schema({
   name:{
type:String,
required:true

   } ,
   price:{
type:Number,
required:true

   },
  date:{
      type:Date,
      default: Date.now
  }

});

const Cart=mongoose.model('cart', CartSchema);

module.exports=Cart;
