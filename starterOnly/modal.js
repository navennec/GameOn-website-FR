function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// #1  add const closeModalBtn
// const closeModalBtn = document.querySelectorAll("#close");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
// closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// #1 TODO : close modal : add close modal form
function closeModal() {
  modalbg.style.display = "none";
}

