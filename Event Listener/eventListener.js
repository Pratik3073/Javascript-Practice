
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
console.log(btn);
 
function handelClick(){
    console.log("it got clicked");
}

btn.addEventListener('click',handelClick);
btn2.addEventListener('click',handelClick);

btn.removeEventListener('click',handelClick);//to remove an event listener, you MUST use a named function.


// listener on multiple items
const buyButton = document.querySelectorAll('button.buy');

// function buyIthem(){
//     console.log('buying ithem');
    
// }
// console.log(buyButton);
// buyButton.forEach(function(buyButton){
// console.log(buyButton);
// buyButton.addEventListener('click',buyIthem);
// });

function handelBuybuttonClick(event){
    const button =event.target;
    // console.log('you are buying it!');
    // console.log(event.target.dataset.price);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target ===event.currentTarget);

    // stop this event from bubbling up
    //When you click a child element, the event first runs on the child, then moves upwards to its parent, then grandparent, and continues up to the document.
    
    event.stopPropagation();
    
}
buyButton.forEach(function(buyButton){
    buyButton.addEventListener('click',handelBuybuttonClick);
});

window.addEventListener('click',function(){
    console.log("you clicked window ");
    
})