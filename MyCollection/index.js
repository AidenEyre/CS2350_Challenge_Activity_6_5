"use strict";

/*
   6-5: Challenge: Manipulating the DOM

   Author: Aiden Eyre
   Date:   12 November 2020

   Filename: styles.js
   
   Write functions here *****
   
*/

window.addEventListener("load", hikeTable);

// Initialize an array of objects to work with.
let hikes = [
    {Hike: 'Gunsight Peak',
     Location: 'Clarkston, UT',
     alreadyHiked: true
    },
    {Hike: 'Deseret Peak',
     Location: 'Grantsville, UT',
     alreadyHiked: false
    },
    {Hike: 'Ben Lomond Peak',
     Location: 'North Ogden, UT',
     alreadyHiked: true
    },
    {Hike: 'Frary Peak',
     Location: 'Syracuse, UT',
     alreadyHiked: true
    },
    {Hike: 'Mount Timpanogos',
     Location: 'Pleasant Grove, UT',
     alreadyHiked: true
    }];

