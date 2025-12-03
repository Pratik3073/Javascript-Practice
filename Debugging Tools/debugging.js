const people=[
    { name: 'Wes', cool: true, country: 'Canada'},
    {name: 'Scott', cool: true, country: 'Merica' },
    {name: 'Snickers', cool: false, country: 'Dog Country'},
];
people.forEach((person, index) => {
// console.error(person.name);

});
//console Methods
// console.log(person.name);
// console.info(person.name);
// console.error(person.name);
// console.warn(person.name);
console.table(people);// show arryr of obj in tabal

// function dr(name){
//     console.count("my name is pratik");
//     return `DR.${name}`
// }

function doall(){
    console.group('hi');
    console.log("pratik");
    console.info("kadam");
    console.error("ok");
    console.warn("time");
    console.groupEnd("hi");

}
