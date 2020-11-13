"use strict";

/*
   6-5: Challenge: Manipulating the DOM

   Author: Aiden Eyre
   Date:   12 November 2020

   Filename: styles.js
   
   Write functions here *****
   
*/

window.addEventListener("load", setup);

// Create an image node as a global variable
let firstImage = document.createElement("img")
firstImage.setAttribute("src", "../images/imageOne.jpg");

// Global variable to keep track of current image
let currentImage = 1;


function setup() {
    // Change the font family for the body
    document.body.style.fontFamily = "Arial, sans-serif";


    // Update the information in each of the spans
    document.getElementById("nickname").innerHTML = "Aiden";
    document.getElementById("favorites").innerHTML = "skiing, hiking";
    document.getElementById("hometown").innerHTML = "Brigham City";


    // Create a variable to hold each list element
    let listLength = document.querySelectorAll("li");

    // Loop through the list changing the class of each element to "listitem"
    for (let i = 0; i < listLength.length; i++) {
        listLength[i].setAttribute("class", "listitem");    // Set the class
        listLength[i].style.color = "red";                  // Set the text color to red
    }

    // Insert the node between the h1 and list
    document.body.insertBefore(firstImage, document.body.querySelector("ul"));
}

function ChangePic() {
    if (currentImage === 1) {
        firstImage.setAttribute("src", "../images/imageTwo.jpeg");
        currentImage = 2;
    } else {
        firstImage.setAttribute("src", "../images/imageOne.jpg");
        currentImage = 1;
    }
}