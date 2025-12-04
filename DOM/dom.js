// Document Object Model
//querySelector is a DOM method used to select the first element in the document that matches a CSS selector.
// const p = document.querySelector('p');

// //querySelectorAll is a DOM method used to select all elements in the document that match a CSS selector.
// const divs = document.querySelectorAll('div');
// console.log(p);
// console.log(divs);

//Common Element Properties

/* | Property        | Description                                 | Example                          |
| --------------- | ------------------------------------------- | -------------------------------- |
| `innerHTML`     | Get/set HTML inside element                 | `div.innerHTML = "<p>Hello</p>"` |
| `innerText`     | Get/set visible text inside element         | `div.innerText = "Hello"`        |
| `textContent`   | Get/set all text content (ignores style)    | `div.textContent`                |
| `id`            | Element’s id attribute                      | `div.id = "main"`                |
| `className`     | Get/set element’s class                     | `div.className = "active"`       |
| `style`         | Inline styles of element                    | `div.style.color = "red"`        |
| `value`         | Value of input/textarea                     | `input.value = "Hi"`             |
| `attributes`    | All element attributes                      | `div.attributes`                 |
| `parentElement` | Reference to parent                         | `div.parentElement`              |
| `children`      | Collection of child elements                | `div.children`                   |
| `childNodes`    | Collection of child nodes (text + elements) | `div.childNodes`                 |
| `dataset`       | Access `data-*` attributes                  | `div.dataset.id = "123"`         |
*/
//Common Element Methods

/*
| Method                       | Description                  | Example                               |
| ---------------------------- | ---------------------------- | ------------------------------------- |
| `getAttribute(attr)`         | Get value of an attribute    | `div.getAttribute("id")`              |
| `setAttribute(attr, value)`  | Set value of an attribute    | `div.setAttribute("class", "active")` |
| `removeAttribute(attr)`      | Remove an attribute          | `div.removeAttribute("id")`           |
| `appendChild(node)`          | Add a child node             | `div.appendChild(p)`                  |
| `removeChild(node)`          | Remove a child node          | `div.removeChild(p)`                  |
| `replaceChild(new, old)`     | Replace a child node         | `div.replaceChild(p2, p1)`            |
| `querySelector(selector)`    | Select first matching child  | `div.querySelector(".btn")`           |
| `querySelectorAll(selector)` | Select all matching children | `div.querySelectorAll("p")`           |
| `classList.add("class")`     | Add a class                  | `div.classList.add("active")`         |
| `classList.remove("class")`  | Remove a class               | `div.classList.remove("active")`      |
| `classList.toggle("class")`  | Toggle a class               | `div.classList.toggle("hidden")`      |
| `cloneNode(deep)`            | Clone element                | `const clone = div.cloneNode(true)`   |
| `focus()`                    | Focus on input element       | `input.focus()`                       |

*/

//Properties → Access/modify element’s attributes, text, style, children
// Methods → Perform actions on element like add/remove/replace nodes, modify classes, focus
// JavaScript + DOM = full control of web page content and behavior

// The DOM - Element Properties and Methods

// const p = document.querySelector('p');
// const items = document.querySelectorAll('.item');
// const heading = document.querySelector('h2');
// console.log(heading);
// //set the textcontent property on that element
// heading.textContent="partik kadam";
// console.dir(heading.textContent);//Shows all properties of the object, including functions and nested objects.
// console.dir(heading.innerText);// they both are same textcontent and inner Text

// The DOM - Working with Classes

//Use classList for safe, easy class manipulation
// Avoid className if you want to preserve existing classes while adding/removing
// add, remove, toggle, contains, replace → most commonly used methods
// const pic = document.querySelector('.nice')
// console.log(pic.classList);


//The DOM - Build in and Custom Data Attributes

//Built-in Attributes
/*
| Attribute | Description                 | Example                              |
| --------- | --------------------------- | ------------------------------------ |
| `id`      | Unique identifier           | `<div id="main"></div>`              |
| `class`   | Class name(s)               | `<div class="box active"></div>`     |
| `src`     | Image source                | `<img src="image.jpg">`              |
| `href`    | Link URL                    | `<a href="https://example.com"></a>` |
| `alt`     | Alternative text for images | `<img src="img.jpg" alt="My Image">` |
| `value`   | Value for input elements    | `<input value="Hello">`              |

*/

const img = document.querySelector(".nice");

console.log(img.src);  
console.log(img.alt);  
console.log(img.id);  


const pic = document.querySelector('.nice')
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);


/*
Custom Data Attributes

Attributes that start with data-

Let you store extra information on HTML elements without affecting the DOM

Accessible via dataset in JS
*/