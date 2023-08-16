const body = document.querySelector('body');
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
hamburger.addEventListener('click', handleClick);

function handleClick() {
    body.classList.toggle('body_after_click');
    hamburger.classList.toggle('hamburger_after_click');
    menu.classList.toggle('menu_after_click');
}



