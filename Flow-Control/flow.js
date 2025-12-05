// const age=25;
// if(age > 20){
//     console.log("in to your 25");

// }else if (age>66){
//     console.log("in to your 66");
// }else if (age>50){
//     console.log("in to your 25");
// }


// function slugify(sentence,lowercase){
//     if(lowercase){
//         return sentence.replace(/\s/g,'-').toLowerCase();
//         /* What is \s ?
//         \s matches any whitespace
//         → spaces, tabs, line breaks, etc.
//         What is g?
//         g means global, so it replaces all matches, not just the first one.
//         What does it do?
//         It replaces all whitespace with dashes (-).
//          */
//     }
//     else{
//         return sentence.replace(/\s/g,'-');
//     }
// }

// const name = "Pratik";  

// //  or||  and &&

// if (name ==="kadam" || name =="Pratik"){
//     console.log("coool name");
    
// }

//Truthy and Falsy
/*
//Falsy
| Value       | Description   |
| ----------- | ------------- |
| `false`     | Boolean false |
| `0`         | Number zero   |
| `-0`        | Negative zero |
| `0n`        | BigInt zero   |
| `""`        | Empty string  |
| `null`      | No value      |
| `undefined` | Not defined   |
| `NaN`       | Not a number  |

*/

//Truthy 
/*
| Value             | Description                               |
| ----------------- | ----------------------------------------- |
| `true`            | Boolean true                              |
| `"hello"`         | Non-empty string                          |
| `" "`             | String with space                         |
| `1`, `-1`, `3.14` | All non-zero numbers                      |
| `[]`              | Empty array                               |
| `{}`              | Empty object                              |
| `function(){}`    | Any function                              |
| `[] == false`     | Special case truthy comparison but tricky |
| `Infinity`        | Infinity is truthy                        |
| `-Infinity`       | Negative Infinity                         |

 */
// const dog= "snickers";
// if(dog)
//     {
//     console.log("you have a dog ")
// }else {
//     console.log("you dont have a dog ");
    
// }


//Coercion
//JavaScript is a loosely typed language, meaning it can automatically convert one data type into another when needed.
/*
| Expression           | Result  | Why                         |
| -------------------- | ------- | --------------------------- |
| `"5" + 5`            | `"55"`  | + joins strings             |
| `"5" - 5`            | `0`     | - forces numeric conversion |
| `true + 1`           | `2`     | true → 1                    |
| `false + 5`          | `5`     | false → 0                   |
| `10 + null`          | `10`    | null → 0                    |
| `"10" * "2"`         | `20`    | * forces number             |
| `undefined + 1`      | `NaN`   | undefined → NaN             |
| `null == undefined`  | `true`  | loose equality              |
| `null === undefined` | `false` | strict equality             |

*/


//Ternaries 
// const count =1;
// const word = count ===1 ? "item": "items";
// const sentence = `you have ${count} ${word}`
// console.log(sentence);

// function showAdmin(){
//     console.log("showing admin bar");
// }
// const isAdmin =true;
// isAdmin ?showAdmin() : null;

// And And trick

// function check(){
//     return true;
// }
// function check2(){
//     return true;
// }
// function check3(){
//     return true;
// }
// if(check() && check2()&& check3()){
//     console.log('all passed');
// }else{
//     console.log("some checks are failed");
    
// }






//Conditional Abuse
let isLoggedIn = true;
let role = "admin";

if (isLoggedIn) {
  if (role === "admin") {
    console.log("Welcome Admin");
  } else {
    console.log("Welcome User");
  }
} else {
  console.log("Please login");
}

//Better Alternatives
isLoggedIn ? console.log(role === "admin" ? "Welcome Admin" : "Welcome User")
  : console.log("Please login");
