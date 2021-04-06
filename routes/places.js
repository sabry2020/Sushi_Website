const express=require('express');
const router=express.Router();





router.get('/Zamalek', (req,res)=>{

    res.render('Zamaleek.ejs');
})
router.get('/Giza', (req,res)=>{

    res.render('Giza.ejs');
})

module.exports=router;
