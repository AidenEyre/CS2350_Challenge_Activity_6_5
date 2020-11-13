"use strict";

/*
   6-5: Challenge: Manipulating the DOM

   Author: Aiden Eyre
   Date:   12 November 2020

   Filename: styles.js
   
   hikeTable() - Dynamically loads an html table with the information from
                 the headText and hikes array.

      styles() - Loads css styles through JavaScript.
      
  switchPage() - Loads an html input button to switch between My Collection
                 and About Me Page. 
   
*/

// Call functions on load
window.addEventListener("load", hikeTable);
window.addEventListener("load", styles);
window.addEventListener("load", switchPage);

// Initialize an array of headings for our hikes table.
let headText = ["Hike", "Location", "Completed?"];
// Initialize an array of objects to work with.
let hikes = [
  { Hike: "Gunsight Peak", Location: "Clarkston, UT", alreadyHiked: true },
  { Hike: "Deseret Peak", Location: "Grantsville, UT", alreadyHiked: false },
  { Hike: "Ben Lomond Peak", Location: "North Ogden, UT", alreadyHiked: true },
  { Hike: "Frary Peak", Location: "Syracuse, UT", alreadyHiked: true },
  {
    Hike: "Mount Timpanogos",
    Location: "Pleasant Grove, UT",
    alreadyHiked: true,
  },
];

// Dynamically creates a table based off of the headText array and hikes array
function hikeTable() {
  // Create a table variable
  let table = document.createElement("table");

  // Create a table row variable
  let tr = document.createElement("tr");

  // For loop to fill up the first header row
  for (let i = 0; i < headText.length; i++) {
    let th = document.createElement("th");
    let text = document.createTextNode(headText[i]);

    th.appendChild(text);
    tr.appendChild(th);
  }

  // Add the row of headers to the table
  table.appendChild(tr);

  // Loop through the length of our hikes array
  for (let i = 1; i < hikes.length; i++) {
    // Initialize a new table row
    let tr = document.createElement("tr");

    // Initialize a table cell for each variable in our hikes array
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    // Set up text for each of the table cells
    let text1 = document.createTextNode(hikes[i].Hike);
    let text2 = document.createTextNode(hikes[i].Location);
    let text3 = document.createTextNode(hikes[i].alreadyHiked);

    // Add the text to each cell and the cells to the table row
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // Add the table row to our table variable
    table.appendChild(tr);
  }

  // Finally add the table to the body of our web page
  document.body.appendChild(table);
}

// Loads up css styles when called
function styles() {
    // Create a style variable to hold css styles
    let style = document.createElement("style");

    // Add the style node to the document head
    document.head.appendChild(style);

    // Insert css rules into it
    style.sheet.insertRule(
    "h1 {  \
        text-align: center; \
        font-size: 2.6em; \
        }", 0);

    style.sheet.insertRule(
    "table {  \
            border-collapse: collapse; \
            padding: 5px; \
            text-align: center; \
            margin: 0 auto; \
            width: 60%; \
        }", 1);

    style.sheet.insertRule(
    "table td, table th {  \
                border: 1px solid black; \
                padding: 5px; \
            }", 2);

    style.sheet.insertRule(
    "table th {  \
                background-color: rgb(151, 151, 151); \
        }", 3);
}

// Adds a button to switch pages
function switchPage() {
    // Create an input node
    let pageLink = document.createElement("input");
    pageLink.setAttribute("type", "button");
    pageLink.setAttribute("onclick", "location.href='../AboutMePage/index.html';");
    pageLink.setAttribute("value", "My Books!");

    // Add the button to the html document
    document.body.appendChild(pageLink);
}
