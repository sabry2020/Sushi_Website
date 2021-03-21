const express=require('express');
const router=express.Router();


var balance =0;

     //test dataset 
const items=[
{name:'Sushi type 1  ',price:10 , picture:'static/images/item1.jpeg',checked:false, number:0},
{name:'Sushi type 2  ',price:1000 , picture:'static/images/item3.jpeg',checked:false, number:1},
{name:'Sushi type 3  ',price:32 , picture:'static/images/item1.jpeg',checked:false, number:2},
{name:'Sushi type 4  ',price:156 , picture:'static/images/item3.jpeg',checked:false, number:3},
{name:'Sushi type 5  ',price:166, picture:'static/images/item1.jpeg',checked:false, number:4},
{name:'Sushi type 6  ',price:88, picture:'static/images/item3.jpeg',checked:false, number:5}
]


router.get('/', (req,res)=>{
 



  res.render('menu.ejs', {balance:0,item1:'Enter item 1  price ', item2:'Enter item2 price', items:items})
  // console.log('info avaialable'+req.body)

})




router.post('/', (req,res)=>{


 
var balance=0 //clearing the previous values

var req1=req.body.req0;
var req2=req.body.req1;
var req3=req.body.req2;
var req4=req.body.req3;
var req5=req.body.req4;
var req6=req.body.req5;

var checkIndex=[]
console.log(req1, req2, req3, req4, req5, req6);

var reqs=[req1,req2,req3,req4,req5,req6];

for( var i=0; i<reqs.length; i++){
if(reqs[i]=="on"){
items[i].checked==true;
checkIndex.push(i);
}

}
//price to int 
// var f=parseInt(item1, 10);
// var s =parseInt(item2, 10);



// options.push({name:i1, price:f}, 
//   {name:i2, price:s });


//making an array for the checked items 

 var checkedItems=[]

for( var i=0; i<checkIndex.length; i++)
{
checkedItems.push(items[checkIndex[i]])
  
}



//checked items values adding
for(var i=0; i<checkIndex.length; i++){

  balance+=items[checkIndex[i]].price;
}


console.log('Checked items length is '+checkedItems.length );



console.log(` balance is ${balance} ` );




//storing data in session 
req.session.cart={
  checkedItems:checkedItems,
  balance:balance
}

res.redirect('/cart')




})



module.exports=router;
