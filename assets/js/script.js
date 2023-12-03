slideIndex = 0;

function slideShow() {
    const slides = document.querySelectorAll('.slides img');
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}




showSlides();