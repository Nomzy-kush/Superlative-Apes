const button = document.querySelector('#connect-btn');
const modalDiv = document.querySelector('.modal-div');
const modalClose = document.querySelector('.svg3');

button.addEventListener('click', () => {
    modalDiv.classList.add('modal-active');
})

modalClose.addEventListener('click', () => {
    modalDiv.classList.remove('modal-active'); 
})