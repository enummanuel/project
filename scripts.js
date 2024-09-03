document.addEventListener("DOMContentLoaded", function() {
    // Add any JavaScript functionality here
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let index = 0;
    const intervalTime = 3000; // Time in milliseconds (3 seconds)
    let interval;

    // Function to update slide position
    function updateSlidePosition() {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    // Function to move to the next slide
    function moveToNextSlide() {
        index = (index + 1) % slideCount;
        updateSlidePosition();
    }

    // Start the automatic slide transition
    function startSlider() {
        interval = setInterval(moveToNextSlide, intervalTime);
    }

    // Stop automatic sliding on manual navigation
    function stopSlider() {
        clearInterval(interval);
    }

    // Event listeners for manual navigation
    document.querySelector('.next').addEventListener('click', function() {
        stopSlider();
        moveToNextSlide();
        startSlider();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        stopSlider();
        index = (index - 1 + slideCount) % slideCount;
        updateSlidePosition();
        startSlider();
    });

    // Initialize slider
    startSlider();
});
