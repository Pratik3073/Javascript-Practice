// const name = ["praitk","kadam"]

// console.log(name[0]);
// console.log(name.length);

// console.log(name[name.length-1]);//used to retrieve the last element of an array

// //mutation method  do change the orignal data
// const numbers=[1,2,3,4,5,6,7,8,9];
// // const rev =numbers.reverse();
// console.log(numbers);

// //anytime you want to use a mutation method and not mutate the orignal array
// //we need to take a copy of the array
// const numberrev = [...numbers].reverse();
// console.log(numberrev);

// //immutable  -- thay do not chnage orignal data
// const silce1= numbers.slice(2,4);
// console.log(silce1);

//PUSH
// name.push("pradeep");//add at the end
// console.log(name);

// //unshift
// const name2=[...name,"lux"];
// name.unshift("pop");//add to front
// console.log(name);


//slice
/*
slice(start, end)Creates a new array by copying selected elements
without changing the original array.
*/

//splice


//splice() 
//is used to add, remove, or replace elements in an array.
//It changes (mutates) the original array.
// const numbers=[1,2,3,4,5,6,7,8,9];
// console.log(numbers);
// numbers.splice(3,2);
// console.log(numbers);


//to add value in between array
const bikes =["ffd","fdd","ggr","sdfsfeg","sdrg"];
const newbike =[
    ...bikes.slice(0,2),"bentto",

    ...bikes.slice(2)
];
console.log(newbike);

//to delete value
const newbike2=[
    ...newbike.slice(0,3),
    ...newbike.slice(4,3)
];
console.log(newbike2);


/*
Main Array Methods in JavaScript
1️⃣ push() – add at end
arr.push(100);


Adds element to end.

2️⃣ pop() – remove from end
arr.pop();


Removes last element.

3️⃣ unshift() – add at start
arr.unshift(10);

4️⃣ shift() – remove from start
arr.shift();

5️⃣ indexOf() – find index
arr.indexOf("mango");

6️⃣ includes() – check exists
arr.includes(30); // true/false

7️⃣ slice() – copy/extract (NO change)
arr.slice(1, 3);

8️⃣ splice() – add/remove/replace (changes array)
arr.splice(2, 1, "new");

9️⃣ concat() – join arrays
arr1.concat(arr2);

🔟 join() – convert array to string
arr.join("-");

1️⃣1️⃣ reverse() – reverse array
arr.reverse();


⚠️ Modifies original.

1️⃣2️⃣ sort() – sort array
arr.sort();


⚠️ Modifies original.

1️⃣3️⃣ map() – transform elements
arr.map(x => x * 2);

Returns new array.

1️⃣4️⃣ filter() – keep only matching elements
arr.filter(x => x > 10);

1️⃣5️⃣ reduce() – accumulate values
arr.reduce((sum, n) => sum + n, 0);

1️⃣6️⃣ forEach() – loop through elements
arr.forEach(x => console.log(x));

1️⃣7️⃣ find() – find first matching value
arr.find(x => x > 20);

1️⃣8️⃣ findIndex() – find index of matching value
arr.findIndex(x => x > 20);
*/

/*
🟦 Array Instance Methods

These methods you call on array instances like [1,2,3].

✔ Add / Remove

push()

pop()

shift()

unshift()

splice()

✔ Copy / Extract

slice()

concat()

✔ Search

includes()

indexOf()

find()

findIndex()

✔ Loop / Transform

forEach()

map()

filter()

reduce()

some()

every()

✔ Other

sort()

reverse()

join()

flat()

flatMap()
*/

/*
1️⃣ forEach() – loop through array

✔ Runs a function for each element
❌ Does NOT return new array
❌ Does NOT stop early

[1, 2, 3].forEach(num => {
  console.log(num);
});

2️⃣ map() – transform array

✔ Returns a new array
✔ Best for converting values

const result = [1, 2, 3].map(x => x * 2);
console.log(result); // [2, 4, 6]

3️⃣ filter() – keep only matching elements

✔ Returns new array
✔ Does NOT modify original

const result = [10, 20, 5, 30].filter(x => x > 10);
console.log(result); // [20, 30]

4️⃣ reduce() – reduce array to a single value

✔ Used for sum, total, average, max, etc.

const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0);
console.log(sum); // 6

5️⃣ some() – at least one match?

✔ Returns true/false

[3, 8, 12].some(x => x > 10);  // true

6️⃣ every() – all match?

✔ Returns true/false

[3, 5, 7].every(x => x > 2); // true

7️⃣ find() – return first matching element
[10, 20, 30].find(x => x > 15); // 20

8️⃣ findIndex() – first matching index
[10, 20, 30].findIndex(x => x > 15); // 1

9️⃣ sort() – custom sorting using callback

⚠️ Modifies original array
✔ Callback required for numbers

[5, 2, 10].sort((a, b) => a - b);
// [2, 5, 10]

🔥 Function Generation (Callback Creation)

You can create separate reusable callback functions:

✔ Named callback
function isEven(num) {
  return num % 2 === 0;
}

[1, 2, 3, 4].filter(isEven); // [2, 4]

✔ Callback Factory (function that returns a function)
function greaterThan(limit) {
  return function(num) {
    return num > limit;
  };
}

const result = [10, 20, 30].filter(greaterThan(15));
console.log(result); // [20, 30]


This is called higher-order function.   
*/


/*
🔥 1. Array .map() – Transform Array
✅ What it does

Creates a new array by applying a callback function to each element.

🔧 Syntax
array.map((item, index, array) => {
  return newValue;
});

📌 Example
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]

⭐ Key Points

Returns new array

Does not modify original

Best for transformation

🔥 2. Array .filter() – Filter/Select Elements
✅ What it does

Returns a new array containing only elements where callback returns true.

🔧 Syntax
array.filter((item, index, array) => {
  return condition;
});

📌 Example
const nums = [10, 5, 20, 3];
const big = nums.filter(n => n > 10);

console.log(big); // [20]

⭐ Key Points

Returns new array

Does not modify original

Best for conditions / filtering

🔥 3. Array .reduce() – Reduce to Single Value
✅ What it does

Combines all elements into one value (sum, max, total, object, etc.)

🔧 Syntax
array.reduce((accumulator, current, index, array) => {
  return updatedAccumulator;
}, initialValue);

📌 Example (Sum)
const nums = [1, 2, 3];
const sum = nums.reduce((acc, n) => acc + n, 0);

console.log(sum); // 6

⭐ Key Points

Returns a single value

Does not modify original

Used for: sum, total, count, grouping, flattening

🔥 4. Array .some() – At Least One True?
✅ What it does

Returns true if the callback returns true for any one element.

🔧 Syntax
array.some((item, index, array) => {
  return condition;
});

📌 Example
const scores = [40, 50, 95];
console.log(scores.some(s => s > 90)); // true

⭐ Key Points

Returns boolean

Stops early → yes

Good for checking presence

🔥 5. Array .every() – All True?
✅ What it does

Returns true if the callback returns true for every element.

🔧 Syntax
array.every((item, index, array) => {
  return condition;
});

📌 Example
const ages = [18, 20, 25];
console.log(ages.every(a => a >= 18)); // true

⭐ Key Points

Returns boolean

Stops early → yes

Good for validation (e.g., form fields)
*/