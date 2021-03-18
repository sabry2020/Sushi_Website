const express=require('express');
const Cart = require('../models/Cart');
const router=express.Router();
var session = require('express-session')

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


    if(req.session.cart){
        var retreive=req.session.cart;
       
        var checkedItems=retreive.checkedItems;
       var balance=retreive.balance;
       
 
       
//storing the info in out db 

const newCart=new Cart({
    items:checkedItems,
    price:balance

})
newCart.save();
console.log('\x1b[36m%s\x1b[0m', 'Cart saved in the db ');
console.log(newCart.id)
    }
res.redirect('/purchase');


})
module.exports=router;
