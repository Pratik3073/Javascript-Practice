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
(function(){
    console.log('running the anon functon ');
    
    return 'you are cool'
})();