const button = document.querySelector('#connect-btn');
const modalDiv = document.querySelector('.modal-div');
const modalClose = document.querySelector('.svg3');
const Q1 = document.querySelector('#Q1');
const Q2 = document.querySelector('#Q2');
const Q3 = document.querySelector('#Q3');
const Q4 = document.querySelector('#Q4');
const Q5 = document.querySelector('#Q5');
const Q6 = document.querySelector('#Q6');
const Q7 = document.querySelector('#Q7');
const subQ1 = document.querySelector('#sub-Q1');
const subQ2 = document.querySelector('#sub-Q2');
const subQ3 = document.querySelector('#sub-Q3');
const subQ4 = document.querySelector('#sub-Q4');
const subQ5 = document.querySelector('#sub-Q5');
const subQ6 = document.querySelector('#sub-Q6');
const subQ7 = document.querySelector('#sub-Q7');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const icon3 = document.querySelector('.icon3');
const icon4 = document.querySelector('.icon4');
const icon5 = document.querySelector('.icon5');
const icon6 = document.querySelector('.icon6');
const icon7 = document.querySelector('.icon7');
const webCloud1 = document.querySelector('.web-cloud1');
const webCloud2 = document.querySelector('.web-cloud2');
const webCloud3 = document.querySelector('.web-cloud3');
const webCloud4 = document.querySelector('.web-cloud4');
const webCloud5 = document.querySelector('.web-cloud5');



button.addEventListener('click', () => {
    modalDiv.classList.add('modal-active');
})

modalClose.addEventListener('click', () => {
    modalDiv.classList.remove('modal-active'); 
})


document.addEventListener('scroll', () => {
    webCloud1.style.left = window.scrollY * 1 + 'px';
    webCloud2.style.left = window.scrollY * 1 + 'px';
    webCloud3.style.left = window.scrollY * 2 + 'px';
    webCloud4.style.right = window.scrollY * 1 + 'px';
    webCloud5.style.right = window.scrollY * 1 + 'px';

})


Q1.addEventListener('click', () => {
    subQ1.classList.toggle('MuiCollapse-root-active');
    if (icon1.classList.contains('fa-plus')) {
        icon1.classList.replace('fa-plus', 'fa-minus');
    } else {
        icon1.classList.replace('fa-minus', 'fa-plus');
    }

})

Q2.addEventListener('click', () => {
    subQ2.classList.toggle('MuiCollapse-root-active');
    if (icon2.classList.contains('fa-plus')) {
        icon2.classList.replace('fa-plus', 'fa-minus');
    } else {
        icon2.classList.replace('fa-minus', 'fa-plus');
    }
})

Q3.addEventListener('click', () => {
    subQ3.classList.toggle('MuiCollapse-root-active');
    if (icon3.classList.contains('fa-plus')) {
        icon3.classList.replace('fa-plus', 'fa-minus');
    } else {
        icon3.classList.replace('fa-minus', 'fa-plus');
    }
})

Q4.addEventListener('click', () => {
    subQ4.classList.toggle('MuiCollapse-root-active');
    if (icon4.classList.contains('fa-plus')) {
        icon4.classList.replace('fa-plus', 'fa-minus');
    } else {
        icon4.classList.replace('fa-minus', 'fa-plus');
    }
})

Q5.addEventListener('click', () => {
    subQ5.classList.toggle('MuiCollapse-root-active');
    if (icon5.classList.contains('fa-plus')) {
        icon5.classList.replace('fa-plus', 'fa-minus');
    } else {
        icon5.classList.replace('fa-minus', 'fa-plus');
    }
})

Q6.addEventListener('click', () => {
    subQ6.classList.toggle('MuiCollapse-root-active');
    if (icon6.classList.contains('fa-plus')) {
        icon6.classList.replace('fa-plus', 'fa-minus');
    } else {
        icon6.classList.replace('fa-minus', 'fa-plus');
    }
})

Q7.addEventListener('click', () => {
    subQ7.classList.toggle('MuiCollapse-root-active');
    if (icon7.classList.contains('fa-plus')) {
        icon7.classList.replace('fa-plus', 'fa-minus');
    } else {
        icon7.classList.replace('fa-minus', 'fa-plus');
    }
})

