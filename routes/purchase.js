const express = require("express");
const router = express.Router();

const Customer = require("../models/Customers");
const Cart = require("../models/Cart");

const Order = require("../models/Order");

//for dates 
var dateFormat = require("dateformat");
// var now = new Date();

router.get("/", (req, res) => {
  res.render("pay.ejs", { errors: undefined });
});

router.post("/", (req, res) => {
  //No need for this as long as it is orders that is registered not Customers

  //   var errors=[];

  //            const{name, email, number,address}=req.body;
  //     Customer.findOne({name:name}).then(registered=>{
  //     if(registered){

  //         errors.push({ msg: 'name already exists' });
  //     res.render('pay.ejs', {
  //         name,
  //         email,
  //         number,
  //         address,
  //         errors:errors
  //     });

  //     }
  //     else{
  //      const newCustomer= new Customer({
  //          name:name,
  //          email:email,
  //          number:number,
  //          address:address
  //      });

  //     newCustomer.save();

  // })

  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  const address = req.body.address;

  const newCustomer = new Customer({
    name: name,
    email: email,
    number: number,
    address: address,
  });
  newCustomer.save();

  var retrieve = req.session.purchase;
  var checkedItems = retrieve.checkedItems;
  var balance = retrieve.balance;

  //assign  session to null

  const newCart = new Cart({
    name: newCustomer.name+' s'+ "Cart",
    items: checkedItems,
    price: balance,
  });
  newCart.save();

  const d=new Date()
try{
  var newOrder = new Order({
    CustomerInfo: newCustomer,
    CartInfo: newCart,
    Date:dateFormat()
  });
  newOrder.save();
}
catch(err){
  var newOrder = new Order({
    CustomerInfo: newCustomer,
    CartInfo: newCart,
    Date:d.toTimeString()
  });
  newOrder.save();
}
  console.log("\x1b[36m%s\x1b[0m", "Cart saved in the db With Id ");//colored log for the id 
  console.log(newOrder.id);

  res.redirect("/"); //redirect to Success payment page instead
});

module.exports = router;
