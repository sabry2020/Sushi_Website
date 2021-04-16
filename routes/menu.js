const express=require('express');
const router=express.Router();





router.get('/', (req,res)=>{
 
//   var balance =0;

//   //test dataset 
// // const items=[
// // {name:'Fish',price:10 , picture:'static/images/item1.jfif',checked:false, number:0, height:'150px', width:'200px'},
// // {name:'Malomma',price:53 , picture:'static/images/item2.jfif',checked:false, number:1, height:'150px', width:'200px'},
// // {name:'Howai',price:32 , picture:'static/images/item3.jfif',checked:false, number:2, height:'150px', width:'200px'},
// // {name:'Chiaww',price:156 , picture:'static/images/item4.jfif',checked:false, number:3, height:'150px', width:'200px'},
// // {name:'Michanna',price:166, picture:'static/images/item5.jfif ',checked:false, number:4, height:'150px', width:'200px'},
// // {name:'Blommins',price:88, picture:'static/images/item6.jfif',checked:false, number:5, height:'150px', width:'200px'},
// // {name:'Fish Large',price:10 , picture:'static/images/item1.jfif',checked:false, number:6, height:'200px', width:'240px'},
// // {name:'Malomma Large',price:53 , picture:'static/images/item2.jfif',checked:false, number:7, height:'200px', width:'240px'},
// // {name:'Howai Large',price:32 , picture:'static/images/item3.jfif',checked:false, number:8, height:'200px', width:'240px'},
// // {name:'Chiaww Large',price:156 , picture:'static/images/item4.jfif',checked:false, number:9, height:'200px', width:'240px'},
// // {name:'Michanna Large',price:166, picture:'static/images/item5.jfif ',checked:false, number:10, height:'200px', width:'240px'},
// // {name:'Blommins Large',price:88,  picture:'static/images/item6.jfif',checked:false, number:11, height:'200px', width:'240px'},
// // {name:'Fish Small',price:10 , picture:'static/images/item1.jfif',checked:false, number:12 , height:'100px', width:'120px'},
// // {name:'Malomma Small',price:53 ,picture:'static/images/item2.jfif',checked:false, number:13, height:'100px', width:'120px'},
// // {name:'Howai Small',price:32 , picture:'static/images/item3.jfif',checked:false, number:14, height:'100px', width:'120px'},
// // {name:'Chiaww Small',price:156 ,  picture:'static/images/item4.jfif',checked:false, number:15, height:'100px', width:'120px'},
// // {name:'Michanna Small',price:166,  picture:'static/images/item5.jfif ',checked:false, number:16, height:'100px', width:'120px'},
// // {name:'Blommins Small',price:88,  picture:'static/images/item6.jfif',checked:false, number:17, height:'100px', width:'120px'}

// // ]
// const items=[{name:'Fish',price:10 , picture:'static/images/item1.jfif',checked:false, number:0, height:'150px', width:'200px'}]


//   res.render('menu.ejs', {balance:0, items:items})
//   // console.log('info avaialable'+req.body)
  res.render('index.ejs');


})




router.post('/', (req,res)=>{


 
var balance=0 //clearing the previous values

var req1=req.body.req0;
var req2=req.body.req1;
var req3=req.body.req2;
var req4=req.body.req3;
var req5=req.body.req4;
var req6=req.body.req5;
var req7=req.body.req6;
var req8=req.body.req7;
var req9=req.body.req8;
var req10=req.body.req9;
var req11=req.body.req10;
var req12=req.body.req11;
var req13=req.body.req12;
var req14=req.body.req13;
var req15=req.body.req14;
var req16=req.body.req15;
var req17=req.body.req16;
var req18=req.body.req17;

const items=[
  {name:'Fish',price:10 , picture:'static/images/item1.jfif',checked:false, number:0, height:'150px', width:'200px'},
  {name:'Malomma',price:53 , picture:'static/images/item2.jfif',checked:false, number:1, height:'150px', width:'200px'},
  {name:'Howai',price:32 , picture:'static/images/item3.jfif',checked:false, number:2, height:'150px', width:'200px'},
  {name:'Chiaww',price:156 , picture:'static/images/item4.jfif',checked:false, number:3, height:'150px', width:'200px'},
  {name:'Michanna',price:166, picture:'static/images/item5.jfif ',checked:false, number:4, height:'150px', width:'200px'},
  {name:'Blommins',price:88, picture:'static/images/item6.jfif',checked:false, number:5, height:'150px', width:'200px'},
  {name:'Fish Large',price:10 , picture:'static/images/item1.jfif',checked:false, number:6, height:'200px', width:'240px'},
  {name:'Malomma Large',price:53 , picture:'static/images/item2.jfif',checked:false, number:7, height:'200px', width:'240px'},
  {name:'Howai Large',price:32 , picture:'static/images/item3.jfif',checked:false, number:8, height:'200px', width:'240px'},
  {name:'Chiaww Large',price:156 , picture:'static/images/item4.jfif',checked:false, number:9, height:'200px', width:'240px'},
  {name:'Michanna Large',price:166, picture:'static/images/item5.jfif ',checked:false, number:10, height:'200px', width:'240px'},
  {name:'Blommins Large',price:88,  picture:'static/images/item6.jfif',checked:false, number:11, height:'200px', width:'240px'},
  {name:'Fish Small',price:10 , picture:'static/images/item1.jfif',checked:false, number:12 , height:'100px', width:'120px'},
  {name:'Malomma Small',price:53 ,picture:'static/images/item2.jfif',checked:false, number:13, height:'100px', width:'120px'},
  {name:'Howai Small',price:32 , picture:'static/images/item3.jfif',checked:false, number:14, height:'100px', width:'120px'},
  {name:'Chiaww Small',price:156 ,  picture:'static/images/item4.jfif',checked:false, number:15, height:'100px', width:'120px'},
  {name:'Michanna Small',price:166,  picture:'static/images/item5.jfif ',checked:false, number:16, height:'100px', width:'120px'},
  {name:'Blommins Small',price:88,  picture:'static/images/item6.jfif',checked:false, number:17, height:'100px', width:'120px'}
  
  ]

var checkIndex=[]


var reqs=[req1,req2,req3,req4,req5,req6, req7,req8,req9,req10,req11,req12,req13,req14,req15,req16,req17, req18];

for( var i=0; i<reqs.length; i++){
if(reqs[i]=="on"){
items[i].checked==true;
checkIndex.push(i);
}

}



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
