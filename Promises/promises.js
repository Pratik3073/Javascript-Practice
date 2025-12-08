/*
What is a Promise?
A Promise is an object in JavaScript that represents the eventual result of an asynchronous operation.

It has 3 states:
Pending → waiting
Fulfilled → operation successful
Rejected → operation failed
*/
function makepizza(toppings){
    const pizzaPromises = new Promise(function(resolve,reject){
        //wait 1 seconds for the pizza
        setTimeout(function(){
            //when you are ready you can reslove the promise
            resolve(`here is you pizza with the toppings${toppings.join(' ')} `);
            //if something went wrong we can reject the promise
        },1000)

    });
    return pizzaPromises;
}

const pepporonipromise =makepizza(['pepporoni']);
const indianpromise =makepizza(['panner']);

pepporonipromise.then(function(pizza){
    console.log('i got it');
    console.log(pizza);
    
    
})
