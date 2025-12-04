console.log("its works");

const mypara = document.createElement('p')
mypara.textContent ='i am a para';
mypara.classList.add("special")
console.log(mypara);


const myimg = document.createElement("img");
myimg.src = 'https://picsum.photos/550';
myimg.alt="nice photo"

// console.log(myimg);
// console.log(myimg)

const myDiv = document.createElement("div");
myDiv.classList.add("wapper");
console.log(myDiv);

myDiv.appendChild(mypara);


document.body.appendChild(mypara);;  // to add para to html we use appendChild
myDiv.appendChild(myimg);

// we need to add someting to the top like heading!
const heading = document.createElement("h1");
heading.textContent="cool things";
myDiv.insertAdjacentElement('afterbegin',heading)
myDiv.appendChild(heading)


// const list =document.createElement('ul');
// const li = document.createElement('li');
// li.textContent="three";
// list.appendChild(li);

// document.body.insertAdjacentElement('afterbegin',list)

// const li5 = document.createElement('li');
// li5.textContent="five";
// list.appendChild(li5);


// const li1 = li5.cloneNode(true);
// li1.textContent="one";
// list.insertAdjacentElement('afterbegin',li1);

// const li4 = document.createElement('li');
// li4.textContent="four";
// li5.insertAdjacentElement("beforebegin",li4)

// const li2 = document.createElement('li');
// li2.textContent="tow";
// li1.insertAdjacentElement("afterend",li2);




// The DOM - HTML from Strings and XSS


