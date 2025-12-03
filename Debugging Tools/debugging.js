const people=[
    { name: 'Wes', cool: true, country: 'Canada'},
    {name: 'Scott', cool: true, country: 'Merica' },
    {name: 'Snickers', cool: false, country: 'Dog Country'},
];
people.forEach((person, index) => {
// console.error(person.name);

});
//console Methods
// console.log(person.name);
// console.info(person.name);
// console.error(person.name);
// console.warn(person.name);
// console.table(people);// show arryr of obj in table

// function dr(name){
//     console.count("my name is pratik");
//     return `DR.${name}`
// }

// function doall(){
//     console.group('hi');
//     console.log("pratik");
//     console.info("kadam");
//     console.error("ok");
//     console.warn("time");
//     console.groupEnd("hi");
// }

//CallStack stack trace
// What is the Call Stack in JavaScript?
// The Call Stack is a data structure used by JS to keep track of function execution order.
// Think of it like a stack of plates:
// When a function is called, it is pushed onto the stack.
// When a function finishes, it is popped off the stack.
// JS runs code from top → bottom, and the call stack helps it remember which function to execute next.
// 🎯 Example of Call Stack
// function a() {
//   b();
// }

// function b() {
//   c();
// }

// function c() {
//   console.log("Hello");
// }

// a();

// Call Stack Flow:

// a() added
// a() calls b() → b() added
// b() calls c() → c() added
// c() completes → removed
// b() completes → removed
// a() completes → removed
// Call stack is now empty.

// What is a Stack Trace?
// A Stack Trace is the list of function calls the program made before an error happened.
// JavaScript prints a stack trace when an error occurs.
// 🎯 Example
// function a() {
//   b();
// }

// function b() {
//   c();
// }

// function c() {
//   throw new Error("Something broke!");
// }

// a();

// Output (Stack Trace):
// Error: Something broke!
//     at c (script.js:7)
//     at b (script.js:4)
//     at a (script.js:1)
//     at <anonymous>:1:1

// Grabbing elements
// only work in console tab to find latest click element on page 
//when you click on button on page and write in console 
//$0 it show the button code 

//$('p') it return only match with p tag
//$$('p') it return all p tag in page

//Break Points
// debugger to stop  //It simply pauses the execution temporarily so you can inspect what is happening.



//Break on Attribute
// In DevTools, you can select an HTML element and tell the browser:
// “Stop the code whenever this element's attributes (id, class, style, src, etc.) change.”
// This helps you find which JS code is modifying the DOM.
