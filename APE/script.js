const button = document.querySelector('#connect-btn');
const modalDiv = document.querySelector('.modal-div');
const modalClose = document.querySelector('.svg3');
const Q1 = document.querySelector('#Q1');
const plusIcon = document.querySelector('#plus-icon');
const minusIcon = document.querySelector('.minus');
const subQ1 = document.querySelector('#sub-Q1');
const panelBlah = document.querySelector('#panel1d-content')

button.addEventListener('click', () => {
    modalDiv.classList.add('modal-active');
})

modalClose.addEventListener('click', () => {
    modalDiv.classList.remove('modal-active'); 
})

Q1.addEventListener('click', () => {
    
})

