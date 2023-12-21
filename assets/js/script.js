// code for picture slideshow effect //

slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach(function(slide) {
        slide.style.transform = 'translateX(-' + slideIndex * 100 + '%)';
    })

    setTimeout(showSlides, 3000);
}

showSlides();