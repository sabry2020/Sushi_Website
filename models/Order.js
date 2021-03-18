const mongoose =require('mongoose');

const Cart = require('./Cart');
const Customer = require('./Customers');



const OrderSchema=new mongoose.Schema({
   
CustomerInfo:{
    type:Object,
    required:true
},
CartInfo:{
type:Object,
required:true
}
,
Date:{
    type:Date,
    default:Date.now
    
}


})

const Order=mongoose.model('order', OrderSchema);

module.exports=Order;



