"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// Select all indicators
const indicators = document.querySelectorAll(".indicator");

// loop through slides and set each slide's translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// Function to update the active indicator
function updateIndicators() {
  indicators.forEach((indicator, indx) => {
    if (indx === curSlide) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Function to handle slide navigation
function navigateSlide(direction) {
  if (direction === "next") {
    curSlide = (curSlide + 1) % slides.length;
  } else {
    curSlide = (curSlide - 1 + slides.length) % slides.length;
  }

  // Move the slides
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  // Update the active indicator
  updateIndicators();
}

// Add event listener for next button
const nextSlide = document.querySelector(".btn-next");
nextSlide.addEventListener("click", () => {
  navigateSlide("next");
});

// Add event listener for previous button
const prevSlide = document.querySelector(".btn-prev");
prevSlide.addEventListener("click", () => {
  navigateSlide("prev");
});

// Initialize the indicators
updateIndicators();

const video = document.querySelector(".main-video");
const playBtn = document.querySelector(".svg-container");

// Function to toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Add a click event listener to the play button
playBtn.addEventListener("click", togglePlay);
