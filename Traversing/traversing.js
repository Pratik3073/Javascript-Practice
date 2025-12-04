console.log("ok");

const pratik = document.querySelector('.pratik');
// console.log(pratik.children); 
// // Returns ONLY element nodes inside pratik (HTMLCollection, no text nodes)
// console.log(pratik.firstElementChild);
// // Returns the FIRST child that is an element (ignores text/comments)
// console.log(pratik.lastElementChild);
// // Returns the LAST child that is an element
// console.log(pratik.previousElementSibling);
// // Returns the previous sibling element (ignores text nodes)
// console.log(pratik.nextElementSibling);
// // Returns the next sibling element (ignores text nodes)
// console.log(pratik.parentElement);
// // Returns the parent element of pratik
// console.log(pratik.childNodes);
// // Returns ALL child nodes: text nodes, elements, comments (NodeList)

const p = document.createElement('p');
p.textContent="i will be removed";
document.body.appendChild(p);
p.remove();



// imple difference between Node and Element in the DOM
/*
What is a Node?
A Node is the most basic unit in the DOM tree.
Types of nodes:
Element Node (e.g., <div>)
Text Node (text inside elements)
Comment Node (<!-- comment -->)
Document Node (document)
Attribute Node (old DOM, rare)
*/

/*
What is an Element?

An Element is a Node that represents an HTML tag.

Examples of Elements:
<div>
<p>
<button>
<ul>
<input>

Element nodes have:
✔ Attributes
✔ Classes
✔ Styles
✔ innerText / innerHTML
✔ classList
✔ value (for inputs)
✔ tagName
*/

/*
| Feature                    | Node                       | Element                                       |
| -------------------------- | -------------------------- | --------------------------------------------- |
| Definition                 | Basic unit of DOM tree     | A type of node representing an HTML tag       |
| Includes                   | Text, comments, elements   | Only HTML elements                            |
| Example                    | text inside `<p>hello</p>` | `<p>`                                         |
| Properties available       | nodeType, nodeName         | tagName, classList, id, innerHTML             |
| Can store HTML attributes? | ❌ No                       | ✔ Yes                                         |
| Can have styles/classes?   | ❌ No                       | ✔ Yes                                         |
| Returned by                | `childNodes`, `firstChild` | `children`, `querySelector`, `getElementById` |

*/