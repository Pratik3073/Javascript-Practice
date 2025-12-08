/*
🔥 1. for Loop

Used to run a block of code a specific number of times.

✅ Syntax
for (initialization; condition; increment) {
  
}
*/

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
  

// 2. for…in Loop
// Used to iterate over object keys (properties).
// const person = { name: "Pratik", age: 22 };

// for (let key in person) {
//   console.log(key, person[key]);
// }

// 🔥 3. for…of Loop
// Used to iterate over values of an iterable:
// Array, String, Map, Set, etc.

// Example (Array)

// const nums = [10, 20, 30];
// for (let num of nums) {
//   console.log(num);
// }

// Example (String)
// for (let ch of "Hello") {
//     console.log(ch);
//   }

//   ⭐ Best For

// Arrays (values)
// Strings
// Iterables
// Cleaner than for loop

// 🔥 4. while Loop
// Runs the block as long as the condition is true.
  
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }


// forEach() is an array method used to loop through each element of an array.
const fruits = ["apple", "banana", "mango"];

fruits.forEach(item => {
  console.log(item);
});

fruits.forEach((item, index) => {
    console.log(index, item);
  });
  
