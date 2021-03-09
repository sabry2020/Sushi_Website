const express=require('express');
const router=express.Router();


router.get('/', (req,res)=>{
    var balance=0;


    res.render('Cart.ejs', {balance:balance});


})


router.post('/', (req,res)=>{



})
module.exports=router;
