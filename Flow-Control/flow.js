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
const dog= "snickers";
if(dog)
    {
    console.log("you have a dog ")
}else {
    console.log("you dont have a dog ");
    
}