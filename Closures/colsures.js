//A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.
// function outer(){
//     const outervar= "i am the outer";
//     function inner(){
//         const innervar="inner var";
//         console.log(innervar);
//         console.log(outervar);   
//     }
//     inner();
// }

// function outer() {
//     const outervar = "i am the outer";

//     function inner() {
//         const innervar = "inner var";
//         console.log(innervar);   // inner var
//         console.log(outervar);   // i am the outer
//     }

//     return inner;
// }

// const innerFn = outer();
// innerFn();

function careateGreeting(greeting=''){
    const myGreet= greeting.toLocaleUpperCase();
    return function(name){
        return `${myGreet} ${name}`;
    }
}
const sayHello = careateGreeting('hello');
const sayHey=careateGreeting('hey');
console.log(sayHello('was'));
console.log(sayHello('pratik'));
