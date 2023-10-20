"use strict";

const toggle = document.getElementById("nav__toggle");
const navMenu = document.getElementById("nav__menu");
const navList = document.getElementById("nav__list");
const navClose = document.getElementById("nav__close");

toggle.addEventListener("click", function () {
  console.log("hihi");
  navMenu.classList.add("nav__menu__visible");
  navList.classList.add("nav__list__expand");
  toggle.classList.add("hide__toggle");
  navClose.classList.add("show__toggle");
});

navClose.addEventListener("click", function () {
  navMenu.classList.remove("nav__menu__visible");
  navList.classList.remove("nav__list__expand");
  navClose.classList.remove("show__toggle");
  toggle.classList.remove("hide__toggle");
});

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

// auto playing carousel on mobile & tablets
function checkScreenSize() {
  if (window.innerWidth < 1024) {
    setInterval(() => {
      navigateSlide("next");
    }, 3000);
  }
}

window.addEventListener("resize", checkScreenSize);

checkScreenSize();

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

  const firstNameErrorContainer = document.getElementById(
    "firstname-error-container"
  );
  const firstNameError = document.getElementById("firstName-error");
  const lastNameErrorContainer = document.getElementById(
    "lastname-error-container"
  );
  const lastNameError = document.getElementById("lastName-error");
  const emailErrorContainer = document.getElementById("email-error-container");
  const emailError = document.getElementById("email-error");
  const companyErrorContainer = document.getElementById(
    "company-error-container"
  );
  const companyError = document.getElementById("company-error");
  const countryErrorContainer = document.getElementById(
    "country-error-container"
  );
  const countryError = document.getElementById("country-error");

  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  companyError.textContent = "";
  countryError.textContent = "";

  if (!firstName.value) {
    e.preventDefault();
    firstNameErrorContainer.style.display = "block";
    firstName.style.border = "1px solid #FF7777";
    firstNameError.textContent =
      "This field can’t be empty. Please fill it in.";
    return;
  } else {
    firstName.style.border = "1px solid rgba(255, 255, 255, 0.5)";
    firstNameErrorContainer.style.display = "none";
  }

  if (!lastName.value) {
    e.preventDefault();
    lastNameErrorContainer.style.display = "block";
    lastNameError.textContent = "This field can’t be empty. Please fill it in.";
    return;
  } else {
    lastNameErrorContainer.style.display = "none";
  }

  if (!email.value) {
    e.preventDefault();
    emailErrorContainer.style.display = "block";
    emailError.textContent = "This field can’t be empty. Please fill it in.";
    return;
  } else {
    emailErrorContainer.style.display = "none";
  }

  if (!validateEmail(email.value)) {
    email.value = "";
    e.preventDefault();
    emailErrorContainer.style.display = "block";
    emailError.textContent = "Enter a valid email";
    return;
  } else {
    emailErrorContainer.style.display = "none";
  }

  if (!company.value) {
    e.preventDefault();
    companyErrorContainer.style.display = "block";
    companyError.textContent = "This field can’t be empty. Please fill it in.";
    return;
  } else {
    companyErrorContainer.style.display = "none";
  }

  if (!country.value || country.value === "") {
    e.preventDefault();
    countryErrorContainer.style.display = "block";
    countryError.textContent = "This field can’t be empty. Please fill it in.";
    return;
  } else {
    countryErrorContainer.style.display = "none";
  }

  setTimeout(function () {
    // Redirect to the "Thank You" page
    window.location.href = form.action;
  }, 2000);
  e.preventDefault();
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

var videoGradient = document.querySelector(".video-gradient-vector");
var videoElement = document.querySelector(".main-video");
var videoWrapper = document.querySelector(".video-wrapper");

var totalHeight =
  videoGradient.getBBox().height + videoElement.offsetHeight - 124;

console.log("total height ", totalHeight);

videoWrapper.style.height = totalHeight + "px";
