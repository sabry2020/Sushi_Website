const express =require('express');

 const app= express();

 require('dotenv').config();

 const mongoose=require('mongoose');
 const ejs=require('ejs');
 
const flash = require('connect-flash');
const path=require('path');
const bcrypt = require('bcryptjs'); //in case of registerations(passwords bcryption)
const fs =require('fs');
var session = require('express-session');

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

 //serving static files 


 app.use('/static', express.static(path.join(__dirname, 'public')))

//Setting EJS 

 app.set('view engine',ejs);



 app.get('/', (req,res)=>{
    var name=undefined;  //will transfer  the name if registered



    res.render('index.ejs',{name:name})
    
    
     });
     app.post('/', (req,res)=>{

console.log('in post index ');
     })

  
app.get('/aboutUs', (req,res)=>{

  res.render('aboutUs.ejs')

})


app.get('/contactUs', (req,res)=>{
  res.render('contactUs.ejs');

})

app.get('/error', (req,res)=>{
  res.render('errors.ejs')
})

app.get('/privacyPolicy', (req,res)=>{

  res.render('privacyPolicy.ejs');

})



app.get('/places', (req,res)=>{
  res.render('places.ejs');
})
app.get('/places/Zamalek', (req,res)=>{

  res.render('Zamaleek.ejs');
})
app.get('/places/Giza', (req,res)=>{

  res.render('Giza.ejs');
})

//Session middleware 
app.use(session({ secret:process.env.SESSION_SECRET}) );

//Routers
app.use('/menu', menuRouter);
app.use('/cart', cartRouter);
app.use('/purchase', purchaseRouter);


app.listen( Port,console.log(`Server running on port ${Port}`));

