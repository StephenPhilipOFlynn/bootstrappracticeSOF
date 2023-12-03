// code for picture slideshow effect //

slideIndex = 0;

function slideShow() {
    const slides = document.querySelectorAll('.slides img');
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    //transform function here

    setTimeout(showSlides, 3000);
}

showSlides();