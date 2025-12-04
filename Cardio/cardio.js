console.log("ok");
const div= document.createElement('div');
div.classList.add("wrapper");
document.body.appendChild(div);

const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`

div.innerHTML=ul;
console.log(div);

const img = document.createElement('img');
img.src="https://picsum.photos/550";
img.width=250;
img.alt="cute";
div.appendChild(img);

const myHtml=`
<div>
    <p>paragraph one </p>
    <p>paragraph two</p>
</div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
// ulElement.insertAdjacentElement('beforebegin',myHtml);
// ulElement.insertAdjacentHTML('myHtml')

// const myDiv = div.querySelector('div');
const myDiv = div.firstElementChild;
console.log(myDiv);
