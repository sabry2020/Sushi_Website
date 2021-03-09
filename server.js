const express =require('express');
const bodyParser = require('body-parser')
 const app= express();

 require('dotenv').config();

 const mongoose=require('mongoose');
 const ejs=require('ejs');
 
const flash = require('connect-flash');
const path=require('path');
const bcrypt = require('bcryptjs'); //in case of registerations
const fs =require('fs');



const db=process.env.MONGO_URI;
const Port=process.env.PORT||8080;



//Routers
const cartRouter=require('./routes/cart');
const menuRouter=require('./routes/menu');
const purchaseRouter=require('./routes/purchase');

// const purchaseRouter=require('./routes/purchase');


//models 
const Customer=require('./models/Customers');
const Cart=require('./models/Cart');

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
    var name=undefined;  //will transfer  the name if registered



    res.render('index.ejs',{name:name})
    
    
     });

  
app.get('/aboutUs', (req,res)=>{

  res.render('aboutUs')

})


app.get('/contactUs', (req,res)=>{
  res.render('contactUs.ejs');

})

app.get('/error', (req,res)=>{
  res.render('errors')
})


app.use('/menu', menuRouter);
app.use('/cart', cartRouter);
app.use('/purchase', purchaseRouter);


app.listen( Port,console.log(`Server running on port ${Port}`));

