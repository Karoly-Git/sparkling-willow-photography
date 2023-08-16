const scrollUpBtn = document.querySelector('#scroll');

// When the user scrolls down XX px from the top, then shows the scroll-up button

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        scrollUpBtn.style.right = "0";
    } else {
        scrollUpBtn.style.right = "-1.75rem";
    }
}

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
