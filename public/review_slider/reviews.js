const reviewsFull = [
    {
        stars: 5,
        clientName: "Pamela",
        review:
            `"Nicky did such an amazing photoshoot for our newborn. Her commitment and dedication is much admired, she takes so much care and attention for your baby, we were so impressed. Our baby was handled gently, and we didn't feel any time pressures etc. The photos were absolutely gorgeous, we plus our family and friends were most impressed with the quality and creativity of her work. We highly recommend her, and we will be using her for all our future family events."`
    },
    {
        stars: 5,
        clientName: "Edwards",
        review:
            `"Such a great professional service! We had such a warm welcome and the photos were perfect. We will definitely be coming back when little one is older. We highly recommend, thank you so much!"`
    },
    {
        stars: 5,
        clientName: "Dale",
        review:
            `"I would highly recommend Sparkling Willow Photography. Nicky was brilliant and so calm and gentle with our little boy. We absolutely love our photos and can't thank you enough for what you did. You captured him perfectly!!!"`
    },
    {
        stars: 5,
        clientName: "Tanya",
        review:
            `"We had a wonderful cake smash photo shoot with Nicky. The photos she captured of us as a family and both our daughters are just beautiful and she truly brought out the best in all of us. She made the girls feel so comfortable and this really showed in the photos. We would highly recommend Nicky!"`
    },
    {
        stars: 5,
        clientName: "Kiran",
        review:
            `"I would highly recommend Nicky. We did our daughter's first birthday cake smash and it was brilliant. She captured some really beautiful memories for us. Again, thank you so much!"`
    },
    {
        stars: 5,
        clientName: "Timea",
        review:
            `"Thank you so much Nicky! We loved the photoshoot and the results as well 😍😍🥰
            Highly recommend!!! We've got the most wonderful pictures from our baby on her 1st birthday!🥰🥰
            "`
    },
    {
        stars: 5,
        clientName: "Sai",
        review:
            `"Truly recommend Sparkling Willow! Relaxed photoshoot, perfect for my not so keen on photoshoot husband and impatient toddler 😅 Also, Nicky was very patient with our toddler which I am so grateful. We have now beautiful Christmas family photos for keeping. Thank you!"`
    },
    {
        stars: 5,
        clientName: "Rachel",
        review:
            `"We did a maternity and newborn photo shoot with Nicola and would highly recommend her. Handled little Sofía with so much love and patience. She took amazing photos that exceeded our expectations, beautiful memories we will look back on for a long time. Very reasonable prices and amazing quality photos. Thank you!!"`
    },
    {
        stars: 5,
        clientName: "Sam",
        review:
            `"We did a newborn photo shoot with Nicola, and she was amazing. Handled our baby with so much care and patience and was so professional. She took some amazing photos and lovely memories we will look back on. Very reasonable prices too. Could not recommend more. Thankyou 😃"`
    },
    {
        stars: 5,
        clientName: "Jaime",
        review:
            `"Would highly recommend Nicky. Our little treasure was not the easiest of models and Nicky was so patient and loving with him and went the extra mile to ensure we got the full experience. The photos exceeded our expectations, and we are delighted with the whole experience. Such good value and quality in comparison with others I've looked into. Can't wait for Nicky to capture the next milestone of our Vinnie's life."`
    },
    {
        stars: 5,
        clientName: "Nicola",
        review:
            `"Nicky took some bump photos of me and my husband as we hadn't been anywhere to have photos during my pregnancy as it was lockdown! She listened to what we wanted and was patient and put us at ease. Thanks again!"`
    },
    {
        stars: 5,
        clientName: "Leila",
        review:
            `"My daughter's first photo shoot and taste of cake! She enjoyed both :) Great session with some lovely photo to remember it. Nicky was so helpful with planning it.  Thank you x"`
    },
    {
        stars: 5,
        clientName: "Jamie",
        review:
            `"Highly recommend! Nicky is lovely, patient and an amazing with babies and children! She knows how to make baby look extra cute and that toddlers can be a handful.  I couldn’t recommend Nicky more! i will only go to her for my pictures now! Not stressful or in any rush, a relaxed environment for me baby and 3-year-old. Perfect! The quality of the pictures was amazing! 100% recommend. Thanks Nicky!"`
    },
    {
        stars: 5,
        clientName: "Rachael",
        review:
            `"Such a lovely Saturday morning spent getting photos of our teeny almost 2-week-old! Nicky was so lovely and made us feel very at home. We had a choice of props and ensured we had input. Thankfully, our little one slept for some so we could get the shots. We didn’t feel rushed or that anything was too much trouble. Thank you SO MUCH highly recommend!!"`
    },
    {
        stars: 5,
        clientName: "Michelle",
        review:
            `"We had such a wonderful experience with Sparkling Willow Photography. We did a maternity/family shoot and Nicky was so amazing at keeping us laughing and getting my 2-year-old completely involved in the shoot. I would honestly recommend her. We are so happy with the photos and can’t wait to work with her again."`
    },
    {
        stars: 5,
        clientName: "Holly",
        review:
            `"Nicky did a photoshoot for my newborn son, and I cannot recommend her highly enough! She was patient, passionate and professional and I knew I could fully trust her with my baby. The photos are truly wonderful and will be centrepieces on my walls for many years to come! Thank you so much!"`
    },
    {
        stars: 5,
        clientName: "Daniela",
        review:
            `"Thank you so much for taking your time to photoshoot my daughter. It was such a lovely experience. I highly recommend❤️❤️"`
    },
    {
        stars: 5,
        clientName: "Catia",
        review:
            `"Thank you, Nicky, you're a great professional, and very sweet and patient with my baby :) much success for you!"`
    },
];

let reviews = [];

reviewsFull.forEach(rev => {
    let text = '';
    let splitText = rev.review.split(' ');

    if (splitText.length > 18) {

        let lastWord = splitText[17];

        if (lastWord[lastWord.length - 1] === '.') {
            lastWord = lastWord.slice(0, lastWord.length - 1);
            splitText[17] = lastWord;
        }

        for (let i = 0; i < 18; i++) {
            text += i !== 17 ? splitText[i] + ' ' : splitText[i] + ' ...'
        }
    }

    reviews.push(
        {
            stars: rev.stars,
            clientName: rev.clientName,
            review: text,
        }
    );
});

export default reviews;
export { reviewsFull };
