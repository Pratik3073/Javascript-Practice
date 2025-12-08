// Moving repeated methods from inside the constructor function into the function’s prototype, so all instances can share the same method instead of creating new copies.


// Before Refactor (Bad Practice)
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
  
//     this.sayHi = function () {   // ❌ New copy created for every instance
//       console.log("Hi, I am " + this.name);
//     };
//   }
  
//   const p1 = new Person("Pratik", 24);
//   const p2 = new Person("Amit", 30);
  

// After Prototype Refactor (Good Practice)

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   // ✔ shared method for all instances
//   Person.prototype.sayHi = function () {
//     console.log("Hi, I am " + this.name);
//   };
  
//   const p1 = new Person("Pratik", 24);
//   const p2 = new Person("Amit", 30);
  

/*
⭐ 1. What is a Prototype?

In JavaScript, every object has a hidden property called:

[[Prototype]]

You can see it in Chrome DevTools as:
__proto__

A prototype is just another object that a JavaScript object can use to access shared properties and methods.
*/

/*
2. Why do we need Prototypes?

To avoid copying the same methods again and again for every object.

Example:

function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};
const p1 = new Person("Pratik");
const p2 = new Person("Amit");
👉 Both p1 and p2 share one sayHi function from the prototype.
*/

/*
⭐ 3. How objects access prototype methods? (Prototype Chain)

When you use:

p1.sayHi();

JavaScript does this:
Look inside p1 → does it have sayHi? ❌ No
Look inside p1.__proto__ → (Person.prototype) → Found ✔
Execute the method
This lookup chain is called:
Prototype Chain
*/

/*
⭐ 4. What is Prototypal Inheritance?

Prototypal Inheritance means:
One object can inherit (use) properties and methods from another object through prototypes.
This allows shared behavior.
*/


// const parent = {
//     greet() {
//       console.log("Hello from parent");
//     }
//   };
  
//   const child = Object.create(parent); // inheritance
//   child.name = "Pratik";
  
//   child.greet(); // inherited
  
/*
⭐ 5. Constructor Function + Prototype Inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " is eating");
};

function Dog(name, breed) {
  Animal.call(this, name); // inherit properties
  this.breed = breed;
}

// Inherit methods
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(this.name + " is barking");
};

const d = new Dog("Rocky", "German Shepherd");

d.eat();  // from Animal prototype
d.bark(); // from Dog prototype
*/

/*



⭐ Why do we need call, apply, bind?

They are used to manually set the value of this inside a function.

🚀 1. call()
👉 Calls the function immediately and lets you pass arguments one by one.
Syntax:
func.call(thisValue, arg1, arg2, ...)

Example:
function greet(city) {
  console.log("Hi " + this.name + " from " + city);
}

const user = { name: "Pratik" };

greet.call(user, "Mumbai");

Output:
Hi Pratik from Mumbai


✔ this becomes user

🚀 2. apply()
👉 Same as call(), but arguments are passed as an array.
Syntax:
func.apply(thisValue, [arg1, arg2, ...])

Example:
greet.apply(user, ["Pune"]);


✔ Useful when you already have data in an array.

🚀 3. bind()
👉 Does NOT call the function immediately.
👉 It returns a new function with this permanently set.
Syntax:
const newFunc = func.bind(thisValue, arg1, arg2);

Example:
const greetPratik = greet.bind(user, "Delhi");

greetPratik(); // call later


✔ Creates a new function
✔ this is locked to user

⭐ Quick Comparison (Very Easy)
Method	When called?	How arguments are passed?	Returns?
call	Immediately	arg1, arg2, arg3	result of function
apply	Immediately	[arg1, arg2, arg3]	result of function
bind	Later (when you call new function)	arg1, arg2	new function
⭐ Interview Example
const person = {
  name: "Amit",
  greet() {
    console.log("Hello " + this.name);
  }
};

const greetFunc = person.greet;
greetFunc();          // ❌ this = undefined

const correctGreet = person.greet.bind(person);
correctGreet();       // ✔ Hello Amit

⭐ Real Use Case of bind()

Used in:

Event listeners

setTimeout

React class components

Passing methods as callbacks

Example:

const obj = {
  name: "Pratik",
  show() {
    setTimeout(function () {
      console.log(this.name); // ❌ undefined
    }, 1000);
  }
};

obj.show();


Fix with bind:

const obj = {
  name: "Pratik",
  show() {
    setTimeout(function () {
      console.log(this.name);
    }.bind(this), 1000);
  }
};

⭐ Final One-Line Definitions

✔ call: Call function now with custom this
✔ apply: Call function now with custom this + array args
✔ bind: Create a new function with custom this to call later
*/

/*
What is a Set in JavaScript?

A Set is a built-in JavaScript object that stores unique values only.

No duplicates allowed

Order is preserved (insertion order)

You can store any data type (numbers, strings, objects, arrays, etc.)
*/

const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Set(4) {1, 2, 3, 4}


//add(value)
const s = new Set();
s.add(10);
s.add(20);
console.log(s); // Set {10, 20}

s.delete(10);
console.log(s); // Set {20}

// Check element exists or not.
console.log(s.has(20)); // true
console.log(s.has(30)); // false
