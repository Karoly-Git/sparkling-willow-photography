import { reviewsFull } from "../review_slider/reviews.js";

let content = document.querySelector('.js-reviews');

reviewsFull.forEach(rev => {
    content.innerHTML += `
        <div class='box'>
            <p class='review-text'>${rev.review}</p>
            <h4 class='client-name'>- ${rev.clientName} -</h4>
        </div>
     `
})