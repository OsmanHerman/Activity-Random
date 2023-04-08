// HTML Elements
const labels = document.querySelector('.labels');
const radios = document.querySelectorAll('.input input');
const arrows = document.querySelectorAll('.arrow');


// Variables
let width = document.documentElement.clientWidth;
let currentView = 0;


// Events
window.addEventListener('resize', () => {
    width = document.documentElement.clientWidth;
    labels.scrollTo(width * currentView, 0);
})


radios.forEach(element => {
    element.addEventListener('click', (e) => {
        currentView = e.target.id * 1;
        labels.scrollTo(width * currentView, 0);
    })
})

arrows[0].addEventListener('click', (e) => {
    if (currentView !== 0) {
        currentView--
        radios[currentView].checked = true;
        labels.scrollTo(width * currentView, 0)
    }
})

arrows[1].addEventListener('click', (e) => {
    if (currentView !== 6) {
        currentView++
        radios[currentView].checked = true;
        labels.scrollTo(width * currentView, 0)
    }
})


