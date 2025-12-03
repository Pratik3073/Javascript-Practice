// const name = "praitk";// it is available throughout the file, so you can use it anywhere below the declaration.

// console.log("it workes");

// const age= 25;

// function go(){   // function scope  in this hair is only use inside the go function.
//     const hair="blonde";
// }
// console.log(age);
// console.log(hair);

//in this case the age have global scope so it can access to inside the go function 
//when we comment out the age inside the go function it will access the golbal age.
// const age = 25;    
// function go(){
//     const age = 200;
//     const hair="blonde";
//     console.log(age);
//     console.log(hair);
// }

// block scope 
// if(1===1){   // in this case the var is use var has global scope
//     let cool = true;
// }
// console.log(cool);

// let cool;  // in ths case we declear the cool as golbal variable so it can be accessible anywhere in program.
// if(1===1){
//     cool="true"
// }
// console.log(cool);


function isCool(name) {
    let cool;
    if(name === "pratik") {
        cool = true;
    }
    console.log(cool);
    return cool;
}
