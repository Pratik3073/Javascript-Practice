const name = 'pratik';
const lastname = "kadam";
const city = `pune`;

const fullname = `my name is ${name} ${lastname} and i live in ${city}`
console.log(name,lastname,city);
console.log(fullname)
const html = `
<div>
    <h1>my namr is ${name} ${lastname}</h1>
    <p>i live in ${city}</p>
</div>
`;
document.body.innerHTML=html;
