//Display image
//--------------------

"use strict";

// Variables
const imgDisplay = document.querySelector(`.img-display`);
const imgInput = document.getElementById(`chooseImage`);

// Functions
const displayImage = function (e) {
    imgDisplay.src = URL.createObjectURL(e.target.files[0]);
    imgDisplay.style.height = `130px`;
}

// Functionality
imgInput.addEventListener(`change`, displayImage);
//----------------------------------------------------------------------