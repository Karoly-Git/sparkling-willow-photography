A)  FOLDER STRUCTURE:

    review_slider
        |__ favicon.png
        |__ index.html
        |__ readme.txt
        |__ reviews.js
        |__ script.js
        |__ style.css


B)  HOW TO SETUP:

    1.  Copy the 'review_slider' folder to your project.
 
    2.  Add the following script to the end of the body in the HTML file. Make sure
        the 'src' points to the 'script.js' with the correct path.
        <script type="module" src="./script.js"></script>
        
    3.  Add the following css link to the head of the HTML file.
        <link rel="stylesheet" href="./style.css">
    
    4.  Add the following div tag to the HTML file.
        <div class="reviewSlider"></div>

    5.  Specify the following parameters in the 'style.css' file:

        :root {
            --review-width:         The width of the reviewSlider.
        }

    6.  Specify the following parameters in the 'script.js' file:
            
            const slidingTime:      Transition duration.
            const transitionType:   Transition type.
    
    7.  Specify the reviews in the 'reviews.js' file. Minimum 5 reviews must be added.

    8.  Customize the style as per your wish.


    
