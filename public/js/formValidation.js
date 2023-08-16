// elements
const userNameAlert = document.querySelector('.required-name');
const userName = document.querySelector('#name');

const userEmailAlert = document.querySelector('.required-email');
const userEmail = document.querySelector('#email');
const isValidEmail = document.querySelector('.isValidEmail');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userMessageAlert = document.querySelector('.required-message');
const userMessage = document.querySelector('#message');

const checkBoxAlert = document.querySelector('.required-check');
const checkBox = document.querySelector('#checkbox');

const leftContent = document.querySelector('.js-left-content');
const rightContent = document.querySelector('.js-right-content');

const jsWord = document.querySelector('.js-word');
const jsId = document.querySelector('.js-id');
const animated = document.querySelector(".js-animated");

const refreshBtn = document.querySelector('.js-refresh-btn');
const submitBtn = document.querySelector('.js-submit-btn');


// data
const dataFrontEnd = [
    { id: 'Q1', head: 'Panda is black and', tail: '.' },
    { id: 'Q2', head: 'Dog has', tail: 'legs.' },
    { id: 'Q3', head: 'Cat has', tail: 'legs.' },
    { id: 'Q4', head: 'Pigeon has', tail: 'wings.' },
    { id: 'Q5', head: 'The sky is', tail: '.' }
];


// global variables
let rIndex = randIndex();
let refreshBtnAngle = 0;


// calling functions
fillValues(rIndex);
alertOff(userName, userNameAlert);
alertOff(userEmail, userEmailAlert);
alertOff(userMessage, userMessageAlert);
alertOff(checkBox, checkBoxAlert);


// handling events
refreshBtn.addEventListener('click', handleRefreshClick);
submitBtn.addEventListener('click', handleSubmitClick);
checkBox.addEventListener("click", handleCheckBoxClick);


// functions

// get new question
function handleRefreshClick(e) {
    animated.style.opacity = '0';
    setTimeout(() => {
        animated.style.opacity = '1';
    }, 200);

    e.target.style.transform = `rotateZ(${refreshBtnAngle += 360}deg)`;
    let newIndex = randIndex();
    while (newIndex === rIndex) {
        newIndex = randIndex();
    }
    rIndex = newIndex
    fillValues(rIndex);
    jsWord.value = '';
}

// animate the question box
function handleCheckBoxClick(e) {
    if (e.target.checked) {
        //*setTimeout(() => {
        document.querySelector('.hidden').style.left = "0";
        //*}, 300);
        document.querySelector('.hidden').style.marginTop = "0";
    } else {
        document.querySelector('.hidden').style.left = "-30rem";
        //*setTimeout(() => {
        document.querySelector('.hidden').style.marginTop = "-3rem";
        //*}, 500);
    }
}

// get random question index
function randIndex() {
    return Math.trunc(Math.random() * (dataFrontEnd.length));
}

// set input values
function fillValues(random) {
    leftContent.innerHTML = dataFrontEnd[random].head;
    rightContent.innerHTML = dataFrontEnd[random].tail;
    jsId.value = random;
}

/*function setInputWidth() {
    dynamicInputs.forEach((din, i) => {
        din.style.width = din.value.length + "ch";
        jsTail.value.length !== 1 ? jsTail.style.marginLeft = '0.5rem' : jsTail.style.marginLeft = '0.1rem';
    });
}*/

// take alert message off
function alertOff(element, alert) {
    element.addEventListener('input', () => {
        if (['text', 'email', 'textarea'].includes(element.type)) {
            if (element.value) {
                //*setTimeout(() => {
                alert.style.marginTop = '-1.5rem';
                //*}, 300);
                alert.style.left = '-15rem';
            } else {
                //*setTimeout(() => {
                alert.style.left = '0';
                //*}, 300);
                alert.style.marginTop = '0';
            }
        }
        if (element.type === 'checkbox') {
            if (element.checked) {
                //*setTimeout(() => {
                alert.style.marginTop = '-1.5rem';
                //*}, 300);
                alert.style.left = '-15rem';
            } else {
                //*setTimeout(() => {
                alert.style.left = '0';
                //*}, 300);
                alert.style.marginTop = '0';
            }
        }
    });
}

// alert if requered not given
function handleSubmitClick() {
    if (!userName.value) {
        userNameAlert.style.left = '0';
        userNameAlert.style.marginTop = '0';
    } else {
        userNameAlert.style.left = '-15rem';
        userNameAlert.style.marginTop = '-1.5rem';
    }

    if (!userEmail.value) {
        userEmailAlert.style.left = '0';
        userEmailAlert.style.marginTop = '0';
    } else {
        userEmail.style.left = '-15rem';
        userEmailAlert.style.marginTop = '-1.5rem';
    }

    if (!userMessage.value) {
        userMessageAlert.style.left = '0';
        userMessageAlert.style.marginTop = '0';
    } else {
        userMessageAlert.style.left = '-15rem';
        userMessageAlert.style.marginTop = '-1.5rem';
    }

    if (!checkBox.checked) {
        checkBoxAlert.style.left = '0';
        checkBoxAlert.style.marginTop = '0';
    } else {
        checkBoxAlert.style.left = '-15rem';
        checkBoxAlert.style.marginTop = '-1.5rem';
    }
}
