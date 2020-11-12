"use strict";

/*
   6-5: Challenge: Manipulating the DOM

   Author: Aiden Eyre
   Date:   12 November 2020

   Filename: styles.js
   
   Write functions here *****
   
*/

window.addEventListener("load", setup);

function setup() {
    // Change the font family for the body
    document.body.style.fontFamily = "Arial, sans-serif";

    // Update the information in each of the spans
    document.getElementById("nickname").innerHTML = "Aiden";
    document.getElementById("favorites").innerHTML = "skiing, hiking";
    document.getElementById("hometown").innerHTML = "Brigham City";

    
}