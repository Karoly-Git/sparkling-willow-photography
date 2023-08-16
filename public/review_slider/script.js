import reviews from "./reviews.js";     //Import reviewsclass="slide"

const slidingTime = 1500;               //Transition duration
const transitionType = "ease";          //Transition type

let currentLayout = reviews.length;     //Initial value is the number of the slides/filses.

// * Building the reviewSlider * //
const reviewSlider = document.querySelector(".reviewSlider");
reviewSlider.innerHTML = '<div class="reviewDisplayBox"></div>';
// *** Building the reviewSlider *** //

// * Building the reviewDisplayBox * //
const reviewDisplayBox = document.querySelector(".reviewDisplayBox");
function getStars(numOfStars) {
  let stars = "";
  for (let i = 0; i < numOfStars; i++) {
    stars += "<span>&#9733;</span>";
  }
  for (let i = 0; i < 5 - numOfStars; i++) {
    stars += "<span>&#9734;</span>";
  }
  return stars;
}

/*<div class="stars">
  ${getStars(reviews[i - 1].stars)}
</div>*/

for (let i = 1; i <= reviews.length; i++) {
  reviewDisplayBox.innerHTML += `
  <div class="reviewSlide">
    <div class="name">
      - ${reviews[i - 1].clientName} -
    </div>
    <p class="review">
      ${reviews[i - 1].review}
    </p>
    <a class='read-all' href="/reviews">read all</a>
  </div>
  `;
}
// *** Building the reviewDisplayBox *** //

// * Setting the transition of the slides * //
const slides = [...document.querySelectorAll(".reviewSlide")];
slides.forEach((slide, i) => {
  slide.style.transition = `all ${slidingTime}ms ${transitionType}`;
});
// *** Setting the transition of the slides *** //

// * Setting the position of the slides * //
slides.forEach((slide, i) => {
  slide.style.left = `${-200}%`;
});
// *** Setting the position of the slides *** //

let indexOfFirstSlide = 0;  //Index of the first slide.
let bigChild = 3;           //The big child's number.

// * Setting the scale of the slides * //
function setSlides() {
  [...document.querySelectorAll(".reviewSlide")].forEach((slide) => {
    slide.style.scale = "0.7";
    slide.style.opacity = "0.5";
    document.querySelector(`.reviewSlide:nth-child(${bigChild})`).style.scale = "0.95";
    document.querySelector(`.reviewSlide:nth-child(${bigChild})`).style.opacity = "1";
  });
  bigChild === reviews.length ? (bigChild = 1) : bigChild++;
}
// *** Setting the scale of the slides *** //

setSlides();

/*To prevent the cross clicking and messing up the animation,
the click is suspended while image is sliding.
*/
let isClickSuspended = false;

function forward() {
  /**
   * 1. Click is suspended while sliding is in progress, nothing happens when clicking on the control buttons.
   * 2. Click is enabled again when sliding has finished.
   * 3. Set the z-index of the first slide to -50, and the others to 50. 
   * 4. Increase the indexOfFirstSlide by 1, however, if it is the last index, then set it to 0.
   * 5. Set the scale of slides.
   * 6. Move the first slide to the last position, also move all other slides to left. 
   * 7. Decrease the current layout by 1, however, if it is 1, then set it back to the initial value.
   */
  if (!isClickSuspended) {
    //1.
    isClickSuspended = true;
    //2.
    setTimeout(() => {
      isClickSuspended = false;
    }, slidingTime);
    //3.
    slides.forEach((slide, i) => {
      if (i === indexOfFirstSlide) {
        slide.style.transition = 'unset';
        slide.style.zIndex = '-50';
      } else {
        slide.style.zIndex = '50';
        slide.style.transition = `all ${slidingTime}ms ${transitionType}`;
      }
    });
    //4.
    indexOfFirstSlide === reviews.length - 1 ? (indexOfFirstSlide = 0) : indexOfFirstSlide++;
    //5.
    setSlides();
    //6.
    slides.forEach((slide, i) => {
      if (currentLayout === reviews.length - i) {
        slide.style.left = `${-300 + (reviews.length - i) * 100}%`;
      } else {
        let newLeft = Number(slide.style.left.split('%').join('')) - 100;
        slide.style.left = `${newLeft}%`;
      }
    });
    //7.
    currentLayout === 1 ? (currentLayout = reviews.length) : currentLayout--;
  }
}

// * Setting the click event of the slider * //
reviewSlider.addEventListener("click", () => {
  forward();
});
// *** Setting the click event of the slider  *** //

