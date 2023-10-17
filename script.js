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

// to toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// event listener for the play button
playBtn.addEventListener("click", togglePlay);

document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const yearSpan = document.getElementById("current-year");
  yearSpan.textContent = currentYear;
});

// contact detail form
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const company = document.getElementById("company");
  const country = document.getElementById("country");

  const firstNameError = document.getElementById("firstName-error");
  const lastNameError = document.getElementById("lastName-error");
  const emailError = document.getElementById("email-error");
  const companyError = document.getElementById("company-error");
  const countryError = document.getElementById("country-error");

  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  companyError.textContent = "";
  countryError.textContent = "";

  if (!firstName.value) {
    e.preventDefault();
    firstNameError.textContent = "First Name cannot be empty";
  }

  if (!lastName.value) {
    e.preventDefault();
    lastNameError.textContent = "Last Name cannot be empty";
  }

  if (!email.value) {
    e.preventDefault();
    emailError.textContent = "Email cannot be empty";
  }

  if (!company.value) {
    e.preventDefault();
    companyError.textContent = "Company cannot be empty";
  }

  if (!country.value) {
    e.preventDefault();
    countryError.textContent = "Please select a country";
  }
});
