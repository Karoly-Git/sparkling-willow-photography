import config from "./config.js"; //Importing the configs.

/*numOfSlides is the number of the slides, taken from the config file.
As the num of the slides can't be fewer than 3, just in case,
if accidentally set to below 3, then automatically declares this variable to 3.*/

let numOfSlides = config.numOfSlides >= 3 ? config.numOfSlides : 3; //Number of the slides, taken from the config file.
const slidingTime = config.slidingTime; //Sliding time, taken from the config file.
let timeGap = config.timeGap; //Waiting time between 2 slides, taken from the config file.

let layout = numOfSlides; //Number of possible layouts.
let images = []; //List of images, will be filled up automatically with the file names later.
const dataOfSlides = []; //Data of the slides, will be filled up automatically with the properties later.

// * Building the carousel * //
const carousel = document.querySelector(".carousel");
carousel.innerHTML = `
<div class="controls">
<button class="btnL controlBtn">&lsaquo;</button>
    <button class="btnR controlBtn">&rsaquo;</button>
    </div>
    <div class="slideBox"></div>
    <div class="indicatorBox"></div>`;
// *** Building the carousel *** //

// * Building the indicatorBox * //
const indicatorBox = document.querySelector(".indicatorBox");
for (let i = 1; i <= numOfSlides; i++) {
  indicatorBox.innerHTML += `<button class="dot"></button>`;
}
// *** Building the indicatorBox *** //

// * Filling up the images list * //
images.push(`img${numOfSlides}.jpg`);
for (let i = 1; i <= numOfSlides; i++) {
  images.push(`img${i}.jpg`);
}
// *** Filling up the images list *** //

// * Building the slideBox * //
const slideBox = document.querySelector(".slideBox");
for (let i = 1; i <= numOfSlides; i++) {
  slideBox.innerHTML += `<div class="slide"></div>`;
}
// *** Building the slideBox *** //

// * Setting the background images and transition of the slides * //
const slides = [...document.querySelectorAll(".slide")];
slides.forEach((slide, i) => {
  slide.style.backgroundImage = `url(carousel/img/${images[i]})`;
  slide.style.transition = `all ${slidingTime}ms ease-in-out`;
});
// *** Setting the background images and transition of the slides *** //

// * Filling up the slide data * //
for (let i = 1; i <= numOfSlides; i++) {
  dataOfSlides.push({
    left: -100, //The relative position
    tR: `all ${slidingTime}ms esae-in-out` //Transition
  });
}
// *** Filling up the slide data *** //

// * Setting the style properties of the slides * //
slides.forEach((slide, i) => {
  slide.style.left = `${dataOfSlides[i].left}%`;
  slide.style.transition = dataOfSlides[i].tR;
});
// *** Setting the style properties of the slides *** //

let activeIndex = 0; //The index of the active indicator initially.

// * This function sets the style properties of the indicators * //
const dots = document.querySelectorAll(".dot");
function setIndicator() {
  dots.forEach((d) => {
    d.style.backgroundColor = "transparent";
    d.style.transition = `all ${slidingTime * 0.5}ms ease-in-out`;
  });
  dots[activeIndex].style.backgroundColor = "white";
}
// *** This function sets the style properties of the indicators *** //

setIndicator(); //Styling the indicators

/*To prevent the cross clicking and messing up the animation,
the buttons are suspended while image is sliding.
Why I didn't use the 'disabled' argument? Because there is a 'mouseover' event listener set
to the buttons, and if the button is disabled, then the event lisener doesn't work.
*/
let isClickSuspended = false;

function slideToRight() {
  if (!isClickSuspended) {
    //This lets to click only if slide is not moving.
    isClickSuspended = true; //After clicking, it disables the buttons.

    setTimeout(() => {
      //This enables the buttons after the sliding has finished.
      isClickSuspended = false;
    }, slidingTime);

    //
    slides.forEach((s, i) => {
      s.style.transition = `all ${slidingTime}ms ease-in-out`;
    });
    slides.forEach((s, i) => {
      if (i === activeIndex) {
        s.style.transition = "";
      }
    });

    activeIndex === numOfSlides - 1 ? (activeIndex = 0) : activeIndex++;
    setIndicator();

    dataOfSlides.forEach((d) => {
      d.left -= 100;
    });

    slides.forEach((slide, i) => {
      slide.style.left = `${dataOfSlides[i].left}%`;
    });

    //for (let i = 1; i <= numOfSlides; i++) {
    for (let j = 0; j <= numOfSlides; j++) {
      if (layout === numOfSlides - j) {
        dataOfSlides[j].left = -200 + (numOfSlides - j) * 100;
      }
    }

    slides.forEach((slide, i) => {
      slide.style.left = `${dataOfSlides[i].left}%`;
      slide.style.transition = dataOfSlides[i].tR;
    });

    layout === 1 ? (layout = numOfSlides) : layout--;
  }
}

function slideToLeft() {
  if (!isClickSuspended) {
    isClickSuspended = true;
    setTimeout(() => {
      isClickSuspended = false;
    }, slidingTime);

    slides.forEach((s, i) => {
      s.style.transition = `all ${slidingTime}ms ease-in-out`;
    });

    activeIndex === 0
      ? (slides[numOfSlides - activeIndex - 1].style.transition = "")
      : (slides[activeIndex - 1].style.transition = "");

    activeIndex === 0 ? (activeIndex = numOfSlides - 1) : activeIndex--;

    setIndicator();

    for (let i = 0; i < numOfSlides; i++) {
      for (let j = 0; j < numOfSlides - 1; j++) {
        if (layout === numOfSlides - j - 1) {
          dataOfSlides[j].left = -(numOfSlides + -(numOfSlides - 2) + j) * 100;
        }
        if (layout === numOfSlides) {
          dataOfSlides[numOfSlides - 1].left = -(numOfSlides + 1) * 100;
        }
      }
    }

    slides.forEach((slide, i) => {
      slide.style.left = `${dataOfSlides[i].left}%`;
    });

    dataOfSlides.forEach((d) => {
      d.left += 100;
    });
    slides.forEach((slide, i) => {
      slide.style.left = `${dataOfSlides[i].left}%`;
    });
    layout === numOfSlides ? (layout = 1) : layout++;
  }
}

const btnL = document.querySelector(".btnL");
const btnR = document.querySelector(".btnR");

btnL.addEventListener("click", () => {
  slideToLeft();
});

btnR.addEventListener("click", () => {
  slideToRight();
});

let autoRun = setInterval(() => {
  slideToRight();
}, timeGap + slidingTime);
//console.log(autoRun, "STARTED");

let id = autoRun;

carousel.addEventListener("mouseover", () => {
  clearInterval(id);
  //console.log(id, "STOPED");
});

carousel.addEventListener("mouseout", () => {
  let runAgain = setInterval(() => {
    slideToRight();
  }, timeGap + slidingTime);
  id = runAgain;
  //console.log(id, "STARTED");
});

window.addEventListener("blur", () => {
  clearInterval(id);
  console.log(id, "STOPED");
});

window.addEventListener("focus", () => {
  let runAgain = setInterval(() => {
    slideToRight();
  }, timeGap + slidingTime);
  id = runAgain;
  console.log(id, "STARTED");
});
