const express = require('express');
const router = express.Router();

const Customer=require('../models/Customers');
const Cart=require('../models/Cart');

router.get('/',  (req,res)=>{

    res.render('pay.ejs', {errors:undefined});
    
    
    
     })


    router.post('/', (req,res)=>{
var errors=[];

        const{name, email, number, country}=req.body;
    Customer.findOne({name:name}).then(registered=>{
    if(registered){
    
        errors.push({ msg: 'name already exists' });
    res.render('pay.ejs', {
        name, 
        email,
        number, 
        country,
        errors:errors
    });
    
    }
    else{
     const newCustomer= new Customer({
         name:name,
         email:email,
         number:number,
         country:country
     });
     
    newCustomer.save();
    
    
    
     res.redirect('/'); //redirect to Success payment page instead 
    
     
    }

})
    })


    module.exports=router;
    