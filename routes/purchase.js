const express = require('express');
const router = express.Router();

router.get('/',  (req,res)=>{

    res.render('pay.ejs');
    
    
    
     })


    router.post('/', (req,res)=>{

        const{name, email, number, country}=req.body;
    Customer.findOne({name:name}).then(registered=>{
    if(registered){
    
        errors.push({ msg: 'name already exists' });
    res.render('pay.ejs', {
        name, 
        email,
        number, 
        country
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
    
    
    
     res.redirect('/');
    
     
    }

})
    })
