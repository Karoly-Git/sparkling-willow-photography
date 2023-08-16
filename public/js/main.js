function delayBodyRendering(delayTime) {
    setTimeout(() => {
        document.querySelector('body').style.display = 'block';
    }, delayTime);
}

delayBodyRendering(500);

const yearSpan = document.querySelector('#this-year');
let year = new Date().getFullYear();
yearSpan.innerHTML = `&copy; ${year} `;