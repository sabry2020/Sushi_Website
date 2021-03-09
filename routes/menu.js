const express=require('express');
const router=express.Router();
router.get('/', (req,res)=>{
    res.render('menu.ejs');

})



router.post('/', (req,res)=>{
//options clicked 

var options=[];

//if opt 1 clicked 

options.push('first option');//just a test


  console.log(req.body);





})



module.exports=router;
