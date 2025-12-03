// function calculateBill(){
//     console.log("calculating the bill");    //this is the function body
//     const total = 100*1.13
    
//     return total;
// }
// const mytotal = calculateBill(); // function call
// console.log(mytotal);

// function calculateBill (billAmount,taxRate){
//     console.log("calculating bill");
//     const total = billAmount * (1 + taxRate);
//     return total;
// }
// const myTotal = calculateBill(100,0.13);
// console.log(myTotal);
// function calculateBill (billAmount ,taxRate=0.13,tipRate=0.15){
//   console.log("calculating bill");
//   const total = billAmount +(billAmount*taxRate)+(billAmount*tipRate) ;
  
//   return total;
// }

// ways to make a function

// function without name is called Anonymous functions
// function (firstName){
// return`DR.${firstName}`;
// }

// function Expression 
// const doctorize = function(firatName){
//     return `Dr.${firatName}`;
// };

//JavaScript hoisting fully supports function declarations, but NOT function expressions or arrow functions.

// Arrow function 
// const inchToCm = (inches) => inches *2.54; // You can remove parentheses ONLY when there is exactly 1 parameter.For multiple parameters, you must use parentheses:

// function add(a,b=3){
//     const total = a+b;
//     return total;
// }

// const add = (a,b=3) =>a+b;

//return object 

// function babyInfo(first,last){
//     const baby ={
//         name:`${first} ${last}`,
//         age:0
//     }
//     return baby;
// }

// const babyInfo = (first,last) => {
//     const baby ={
//         name:`${first} ${last}`,
//         age:0
//     }
//     return baby;
// }

// IIFE
// Immediately invoked function Expression
//For an IIFE (Immediately Invoked Function Expression), we must wrap the function in parentheses.
// (function(){
//     console.log('running the anon function ');
    
//     return 'you are cool'
// })();

//Methods!!
// const wes={
//  name:'wes bos',
//  sayHi: function (){
//     console.log("hey ");
//     return 'hey wes';
//  }
// }

//this in Arrow Function
//Arrow functions do NOT have their own this
//Instead, they inherit this from the parent scope (lexical this).
//❌ In objects/classes, arrow functions cannot be used as methods (if you need this).
// const user = {
//    name: "Pratik",
//    greet: () => {
//      console.log(this.name); // ❌ undefined
//    }
//  };
 
//  user.greet();
 //👉 Because this in arrow function doesn’t refer to user.
//It refers to the outer scope (global), not the object.

//this in Regular Function (Inside Class/Object Method)
// class User {
//    constructor(name) {
//      this.name = name;
//    }
 
//    greet() {
//      console.log("Hello", this.name); // ✔ works
//    }
//  }
 
//  const u = new User("Pratik");
//  u.greet();
 //Here this = instance of the class (u).

 //Arrow Function INSIDE a Class
 //Arrow functions are sometimes useful because they fix this to the instance.
 class User {
   constructor(name) {
     this.name = name;
   }
 
   greet = () => {
     console.log("Hi", this.name);
   }
 }
 
 const u = new User("Pratik");
 u.greet(); // Hi Pratik
 