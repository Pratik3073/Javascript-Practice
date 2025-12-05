// //In JavaScript, “maps” can mean two different things: the Map data structure for key–value pairs, and the map() method on arrays for transforming data.
// // map allow any value yo key 


//In a Map the order is fixed as insertion order, and this is more reliable and clear than with plain objects.

// const person1={
//     name:"pratik",
//     age:25
// };

// const myMap = new Map();
// myMap.set(person1,"relly cool")
// //.set()
// //.has()
// //.delete()

// //set()
// myMap.set('name','wes'); // to set value 
// console.log(myMap);

// create a Map
// const prices = new Map();

// // add key–value pairs
// prices.set("apple", 100);
// prices.set("banana", 40);
// prices.set("mango", 80);

// // read a value by key
// console.log(prices.get("apple"));   // 100

// // check if a key exists
// console.log(prices.has("banana"));  // true

// // loop through all entries
// for (const [fruit, price] of prices) {
//   console.log(fruit, price); 
// }

const score = 200;
const prizes=new Map();
prizes.set(100,'Bear');
prizes.set(200,'Duck');
prizes.set(300,'car');
console.log(`you win a ${prizes.get(score)}`);


const ul = document.querySelector('.prices');

// prizes.forEach(entry=>{
//     console.log(entry);
// })

// for(const price of prizes){
//     // console.log(price);
//     console.log(price[0],price[1]);
// }

for (const [points, prize] of prizes) {
    const li = `<li>${points} points: ${prize}</li>`;
    ul.insertAdjacentHTML('beforeend', li);
}

console.log(Object.fromEntries(prizes));
