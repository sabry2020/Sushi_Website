

//change the item color and BackgroundText on click

const { name } = require("ejs");


document.addEventListener('DOMContentLoaded', ()=>{




var items=document.querySelectorAll('.menu-cards');

for( var i=0 ; i<items.length ; i++){

    var nameInput=`req${i}`;
    items[i].setAttribute(name, nameInput);
    
}
items.forEach(item=>item.addEventListener('click',()=>{
// item.style.filter='blur(5px)';
// item.style.fontSize='30px';
// item.style.fontWeight='bold';

item.style.backgroundImage="url('static/images/item1.jpeg')"
item.checked=true;

//filter: blur(10px);;

    })
    )

items.forEach(item=>item.addEventListener('drag',()=>{
    
    
        })
        )

    })





