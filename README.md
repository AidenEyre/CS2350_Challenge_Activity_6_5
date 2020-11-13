# CS2350_Challenge_Activity_6_5
 Challenge activity for my web development section 6-5.

**************************************************** About Me Page ****************************************************


Start with this HTML and save it as "aboutme.html":

_________________________________________________________________________
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>About Me</title>
</head>
<body>
  <h1>About Me</h1>
  
  <ul>
    <li>Nickname: <span id="nickname"></span></li>
    <li>Favorites:  <span id="favorites"></span></li>
    <li>Hometown: <span id="hometown"></span></li>
   </ul>
  
 </body>
</html>
_________________________________________________________________________

-Create a new Javascript file and link to it with a script tag at the bottom.

-(Using JS only) Change the body tag's style so it has a font-family of "Arial, sans-serif".

-(Using JS only) Replace each of the spans (nickname, favorites, hometown) with your own information.

-(Using JS only) Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

-(Using JS Only) Create a new img element and set its src attribute to a picture of you with the picture being named "me1.jpg". Append that       image under the <h1>.

-(Using JS Only) call a function ChangePic() function when the user clicks on your image, and change the src property of the image to display another random picture of you*.

To make this easier, the new picture image’s name should be “me” + picnum + “.jpg”, with picnum being the random number you just generated. For instance, if the random number was 3, the new image’s name will be me3.jpg.


**************************************************** My Collection ****************************************************

Keep track of which books you read (or movies you've seen, songs you like, or city/states you visited).  The collection itself doesn't matter as long as it contains multiple properties and values (and you have the ability to "Check or Uncheck" an item in your collection.  The example uses books.

-Create a basic webpage with nothing except a simple <head> section and empty <body> section containing only an <h1> of text for "My Collection".
-Create a new Javascript file and link to it with a script tag at the bottom of the html.
-Inside the JavaScript file, include this array of books (or a similar collection of items with multiple properties):

_________________________________________________________________________
var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];
_________________________________________________________________________

-Using JavaScript, iterate through the items in the array, and dynamically display the collection within a table under the <h1> section of your webpage.   The entire table (including replacing any true/false text with actual images like in the example) and content should be generated and outputted with JavaScript. 

-Within the table, create a <th> element for each of the properties in the array collection (for example title, author, alreadyRead) - column count and text should be dynamically generated based on JavaScript, and not "hardcoded".

-Create and append a <tr> for each value

-Use JavaScript to append and create the style rules for the table within the <head> section of the HTML document.
Link all both pages to one another (so I can go between pages with one click).