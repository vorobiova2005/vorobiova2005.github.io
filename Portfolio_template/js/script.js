const hamburger = document.querySelector('.hamburger'), 
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu-close');

hamburger.addEventListener('click', () => {
      menu.classList .add('active');
});        

closeElem.addEventListener('click', () => {
        menu.classList .remove('active');
});        

const counters = document.querySelectorAll('.skills-ratings-counter')
        lines = document.querySelectorAll('.skills-ratings-line span');

counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
});