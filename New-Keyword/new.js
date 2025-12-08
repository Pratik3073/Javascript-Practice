// When you use the new keyword, JavaScript creates a new object and connects it to the function’s prototype.
const meDate = new Date("september 17,2000");
console.log(meDate);

const names = new Array("praitk","kadam");
const wes = new Object({name:"pratik"});

function Pizza(){
    console.log('making a pizza');
    
}

const pepperonipizza = new Pizza(); //When we use new on a function, it creates an instance of that function.
console.log(pepperonipizza);


// this keyword 

const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");

function tellMe(){
    console.log(this);
}
btn1.addEventListener('click',tellMe);
btn2.addEventListener('click',tellMe);

