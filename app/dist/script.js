"use strict";
const radioButtons = document.querySelectorAll(".toggle__wrapper input");
for (let i = 0; i < radioButtons.length; i++) {
    // add event listener to all of the radio buttons in the toggle
    radioButtons[i].addEventListener("click", (event) => {
        const body = document.querySelector("body");
        const darkButton = document.getElementById("dark");
        if (darkButton.checked) {
            // check if dark or light is selected
            body.classList.add("dark");
            body.classList.remove("light");
        }
        else {
            body.classList.add("light");
            body.classList.remove("dark");
        }
    });
}
