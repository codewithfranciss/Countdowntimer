// Image slider begin ---------------------------------------------------------

// Selecting elements
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let imageBox = document.querySelector(".img-box img");

// Array of image paths
let images = [
  "./assets/images/alienware-1.png",
  "./assets/images/alienware-2.png",
];

// Counter for current image
let count = 0;

// Event listener for previous button
prevBtn.addEventListener("click", function () {
  if (count <= 0) {
    count = 0;
  } else {
    count--;
  }
  imageBox.src = images[count];
});

// Event listener for next button
nextBtn.addEventListener("click", function () {
  if (count >= images.length - 1) {
    count = images.length - 1;
  } else {
    count++;
  }
  imageBox.src = images[count];
});

// Image slider end -----------------------------------------------------------

let time = {
  days: document.querySelector(".day .number"),
  hours: document.querySelector(".hours .number"),
  mins: document.querySelector(".mins .number"),
  secs: document.querySelector(".secs .number"),
};

// Countdown setup
let endSeconds;
let endMinutes;
let endHours;
let endDays;

// Check if end time is stored in localStorage, otherwise set default values
if (localStorage.getItem("endSeconds")) {
  endSeconds = parseInt(localStorage.getItem("endSeconds"));
  endMinutes = parseInt(localStorage.getItem("endMinutes"));
  endHours = parseInt(localStorage.getItem("endHours"));
  endDays = parseInt(localStorage.getItem("endDays"));
} else {
  endSeconds = 59;
  endMinutes = 59;
  endHours = 33;
  endDays = 36;
}

// Function to update countdown
let timeCapture = function () {
  setTimeout(function () {
    let date = new Date();
    time.secs.innerText = endSeconds - date.getSeconds();
    time.mins.innerText = endMinutes - date.getMinutes();
    time.hours.innerText = endHours - date.getHours();
    time.days.innerText = endDays - date.getDate();
    timeCapture();
  }, 1000);
};

// Save end time values to localStorage
window.addEventListener("beforeunload", function () {
  localStorage.setItem("endSeconds", endSeconds.toString());
  localStorage.setItem("endMinutes", endMinutes.toString());
  localStorage.setItem("endHours", endHours.toString());
  localStorage.setItem("endDays", endDays.toString());
});

timeCapture();
