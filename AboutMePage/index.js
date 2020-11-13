"use strict";

/*
   6-5: Challenge: Manipulating the DOM

   Author: Aiden Eyre
   Date:   12 November 2020

   Filename: styles.js
   
   setup() - Function to set up all the page elements with JavaScript.
   changePic() - Function to handle changing the picture whenever it is called.
   
*/

// Create an image node as a global variable
let pageImage = document.createElement("img")
pageImage.setAttribute("src", "../images/imageOne.jpg");

// Event listeners for page load and image click.
window.addEventListener("load", setup);
pageImage.addEventListener("click", ChangePic);

// Global variable to keep track of current image
let currentImage = 1;

// Set up all the page elements with JavaScript
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
    document.body.insertBefore(pageImage, document.body.querySelector("ul"));

    // Create a button node
    let pageLink = document.createElement("button");
    pageLink.setAttribute("onclick", "");
    pageLink.innerHTML = "My Books!";

    // Add the button to the html document
    document.body.appendChild(pageLink);
}

// Function that swaps the pageImage src based off of the current image
function ChangePic() {
    if (currentImage === 1) {   // If current image is one change to imageTwo
        pageImage.setAttribute("src", "../images/imageTwo.jpeg");
        currentImage = 2;
    } else {    // If current image is two change to imageOne
        pageImage.setAttribute("src", "../images/imageOne.jpg");
        currentImage = 1;
    }
}