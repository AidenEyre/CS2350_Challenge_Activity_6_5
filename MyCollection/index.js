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

function hikeTable() {
    let headText = ["Hike", "Location", "Completed?"];

    let table = document.createElement('table');

    let tr = document.createElement('tr');
    
    for (let i = 0; i < headText.length; i++) {
        let th = document.createElement('th');
        let text = document.createTextNode(headText[i]);

        th.appendChild(text);
        tr.appendChild(th);
    }
    
    table.appendChild(tr);
    
    for (let i = 1; i < hikes.length; i++){
        let tr = document.createElement('tr');   

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        let text1 = document.createTextNode(hikes[i].Hike);
        let text2 = document.createTextNode(hikes[i].Location);
        let text3 = document.createTextNode(hikes[i].alreadyHiked);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    document.body.appendChild(table);

}