const cardButton = document.querySelectorAll('.card button');
const modalinner = document.querySelector('.modal-inner');  
const modalouter = document.querySelector('.modal-outer'); 

function handalCArdButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');

    const ImgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;

    modalinner.innerHTML = `
        <img src="${ImgSrc.replace('200', '600')}" alt="${name}" />
        <p>${desc}</p>
    `;

    modalouter.classList.add('open');
}

cardButton.forEach(button => 
    button.addEventListener('click', handalCArdButtonClick)
);
function closeModal(){
    modalouter.classList.remove('open');
}

modalouter.addEventListener('click',function(e){
  const isOutSide = e.target.closest('.modal-inner');
  console.log(isOutSide);
   
});
window.addEventListener('keydown',event=>{
    console.log(event);
    if(event.key === 'Escape'){
        closeModal();
    }
    
});