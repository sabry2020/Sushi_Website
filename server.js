const express =require('express');
const bodyParser = require('body-parser')

 const app= express();
 const mongoose=require('mongoose');
 const ejs=require('ejs');
 const Port=process.env.PORT||8080;
const flash = require('connect-flash');
const path=require('path');
const bcrypt = require('bcryptjs');

const fs =require('fs');

// const purchaseRouter=require('./routes/purchase');

const db="mongodb+srv://sabry:Fostyboy555@cluster0.2ilot.mongodb.net/Sushi_Customers?retryWrites=true&w=majority";


const Customer=require('./models/Customers');

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

 



// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

 //serving static files 


 app.use('/static', express.static(path.join(__dirname, 'public')))

//Setting EJS 

 app.set('view engine',ejs);



 app.get('/', (req,res)=>{
    var name=undefined;



    res.render('index.ejs',{name:name})
    
    
     });



     //Setting Routers

     //app.use('/purchase',purchaseRouter);

 app.get('/home', (req,res)=>{
    
res.render('index.ejs');


 });




 app.get('/menu', (req,res)=>{
     res.render('menu.ejs')


 })


 app.get('/purchase',  (req,res)=>{

  res.render('pay.ejs');
  
  
  
   })


  app.post('/purchase', (req,res)=>{
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
 




 
app.get('/aboutUs', (req,res)=>{

  res.render('aboutUs')

})


app.get('/error', (req,res)=>{
  res.render('errors')
})

app.listen( Port,console.log(`Server running on port ${Port}`));

