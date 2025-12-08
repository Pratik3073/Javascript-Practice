/*
⭐ 1. What is async / await?

async/await is modern JavaScript syntax built on top of Promises that allows writing asynchronous code in a synchronous way.

async function → always returns a Promise

await → waits for a Promise to resolve/reject

⭐ 2. Syntax
async function myFunc() {
  const result = await somePromise();
  console.log(result);
}

⭐ 3. Example
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data received");
    }, 2000);
  });
}

// Using async / await
async function showUser() {
  const user = await getUser(); // wait for promise
  console.log(user);
}

showUser();


Output (after 2 sec):

User data received
*/
//JavaScript pauses execution of that async function at the await line until the promise resolves or rejects.
function wait(ms=0){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}
 async function go(){
    console.log('starting');
    await wait(2000);
    console.log('ending');
    
    
}
go();


//function declaration
async function fd(){}

//arrrow function 
const arrowFn = async () => {}

window.addEventListener('click',await function(){});

//methods

const person ={
    sayHi: async function(){

    },
    //method short hand
    async sayHello(){

    },
    //function property
    sayhay:async()=>{

    }
}