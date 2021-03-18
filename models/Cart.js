const mongoose=require('mongoose');


const CartSchema=new mongoose.Schema({
   name:{
type:String,
required:true,
default:"Not assigned"

   } ,
   items:{
      type:Array,
      required:true
   }

   ,

   price:{//holding the balance transfered 
type:Number,
required:true

   },
  date:{
      type:Date,
      default: Date.now
  }
  //holding the items 
  

  

});

const Cart=mongoose.model('cart', CartSchema);

module.exports=Cart;
