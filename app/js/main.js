const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
    // Close menu
    if (header.classList.contains('open')) { 
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element) {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        })
    } else { // Open menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
});