const express=require('express');
const Cart = require('../models/Cart');
const router=express.Router();
// var session = require('express-session')

//container of the balance transfered 

router.get('/', (req,res)=>{
   


    //using  prev. req session 
    if(req.session.cart){
 var retreive=req.session.cart;

 var checkedItems=retreive.checkedItems;
var balance=retreive.balance;
}
 
if(balance!==undefined)
    res.render('Cart.ejs', {balance:balance, test:checkedItems });

else
res.render('Cart.ejs',{balance:0, test:[] })
    

})


router.post('/', (req,res)=>{

    
//storing data from cart 
var retreive=req.session.cart;
       
        var checkedItems=retreive.checkedItems;
       var balance=retreive.balance;
//to purchase 

req.session.purchase={
    checkedItems:checkedItems,
    balance:balance
  }



        
       
 
       
//storing the info in out db 



    
res.redirect('/purchase');


})
module.exports=router;
