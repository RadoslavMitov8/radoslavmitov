let slideIndex = 0; // Initialize the slide index
showSlides(); // Call the function to show the first slide

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show"); // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset to first slide if at the end
    slides[slideIndex - 1].classList.add("show"); // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    slideIndex += n; // Adjust the slide index by n
    if (slideIndex > document.getElementsByClassName("mySlides").length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("mySlides").length; }
    showSlidesManual(slideIndex);
}

function showSlidesManual(n) {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show"); // Hide all slides
    }
    slides[n - 1].classList.add("show"); // Show the selected slide
}
