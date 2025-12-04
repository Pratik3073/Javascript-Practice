// const person={
//     name:"pratik",
//     age:25,
//     city:"pune"
// };

// const city ="pune";//block scoped variable
// const person1 = {
//     name:"pratik"
// }
// person1['city'] = 'mumbai';//This line adds a new property to the person object.


// console.log(person1);//to access the object we use dot notation 
// console.log(person["city"]);

// const person={
//     name:"pratik",
//     age:25,
//     city:"pune"
// };
// person.email = "pratik@gmail.com";//Add New Property to obj
// person.age = 23;//Update Existing Property in obj
// delete person.city;//Delete a Property in obj

// //Loop Through Object Keys
// for (let key in person) {
//     console.log(key, person[key]);
//   }
  

// console.log("name" in person); // true //Check if Key Exists

// console.log(person);

//Get All Keys, Values, Entries
// console.log(Object.keys(person));// ["name", "age", "email"]
// console.log( Object.values(person));// ["Pratik", 23, "pratik@gmail.com"]
// console.log(Object.entries(person));// [["name","Pratik"],["age",23],["email","pratik@gmail.com"]]

// const newUser = { ...person }; //Copy an Object Using spread operator
// console.log(newUser);

//Merge Two Objects
// const address = { city: "Pune", pincode: 411045 };
// const merged = { ...person, ...address };
// console.log(merged);

//Freeze Object (lock – cannot change)
// Object.freeze(person); //freeze the obj
// person.name="kadam";
// console.log(person);

//Seal Object (can change values but cannot add/delete keys)
// Object.seal(person);
// person.add="baner";// not add or delete
// person.age=26;//we can change 
// console.log(person);

//Convert Object → JSON
// const jsonString = JSON.stringify(person);//This code converts a JavaScript object into a JSON string (text format)
// console.log(jsonString);



// //Convert JSON → Object
// const obj = JSON.parse(jsonString);
// console.log(obj);

//Destructure Object
// const { name as fullname, age } = person;//Object destructuring is a shortcut that lets you extract specific keys from an object and store them in variables.
// console.log(name); // Pratik


//Example (Normal way)
// const user = {
//   name: "Pratik",
//   age: 22,
//   city: "Pune"
// };

// const name = user.name;
// const age = user.age;

//Example (Destructuring way)
// const { name, age } = user;
/*

| Method      | Example               | Use Case             |
| ----------- | --------------------- | -------------------- |
| Dot         | `user.name`           | Normal access        |
| Bracket     | `user["name"]`        | Dynamic keys         |
| Destructure | `const {name} = user` | Want quick variables |
*/
