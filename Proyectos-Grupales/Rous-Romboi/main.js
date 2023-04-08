// const romboidWrapper = document.querySelector('.romboid-wrapper');
const romboid = document.querySelector('.romboid');
const menu = document.querySelector('.container');

console.log(menu);

/* document.querySelector('.span-wrapper').addEventListener('click', function() {
    romboid.classList.toggle('active');
    document.querySelector('.one').classList.toggle('one-activated');
    document.querySelector('.two').classList.toggle('two-activated');
    document.querySelector('.three').classList.toggle('three-activated');
    xy();
}) */

const lines = [document.querySelector('.one'),
                document.querySelector('.two'),
                document.querySelector('.three')]

/* document.body.addEventListener('click', function() {
    console.log(lines[0].className)
})*/

document.querySelector('.span-wrapper').addEventListener('click', function() {
    romboid.classList.toggle('active');
    menu.classList.toggle('container-zoom');
    
    lines.forEach((element) => {
        const elementClasses = Array.from(element.classList);
        const activated = elementClasses[0]+'-activated';
        const deactivated = elementClasses[0]+'-deactivated';
        
        if (elementClasses.includes(activated)) {
            element.classList.remove(activated);
            element.classList.add(deactivated);
        } else {
            element.classList.remove(deactivated)
            element.classList.add(activated);
        }
    })

    /* lines.forEach((element) => {
        const newElement = Array.from(element.classList);
        
        if (newElement.includes(newElement[0]+'-activated')) {
            element.classList.remove(newElement[0]+'-activated');
            element.classList.add(newElement[0]+'-deactivated');
        } else {
            element.classList.remove(newElement[0]+'-deactivated')
            element.classList.add(newElement[0]+'-activated');
        }
    }) */
})

