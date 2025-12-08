console.log('strting');
setTimeout(function(){
    console.log('running');
    
},0);
console.log('ending');

/*
⭐ 1. The Event Loop (Super Simple Explanation)

JavaScript is single-threaded:

✔ It can run one task at a time
✔ It cannot run multiple lines at the same exact time

But browsers give us extra features like:
Web APIs
setTimeout
Fetch
DOM events
Promises

So how does JS manage all this?
*/

//“Should JavaScript run code from the Call Stack or pick tasks from the Callback Queue / Microtask Queue?”

/*
JavaScript Code  → Call Stack
                     ↓
               Web APIs (Browser)
                     ↓
        Callback Queue (setTimeout, DOM events)
        Microtask Queue (Promises, async/await)
                     ↓
                Event Loop
                     ↓
             Back to Call Stack

*/

/*
⭐ 2. What is Callback Hell?

Callback Hell happens when:

✔ We have too many nested callbacks
✔ Code becomes ugly, unreadable, confusing

Example:

doSomething(function(a) {
  doMore(a, function(b) {
    doMoreAgain(b, function(c) {
      doFinal(c, function(d) {
        console.log("Done", d);
      });
    });
  });
});


👉 Looks like a pyramid of doom
👉 Hard to read + hard to debug + hard to maintain
*/

//How do you avoid Callback Hell?

// A: Using Promises, async/await, named functions, or modularizing code.