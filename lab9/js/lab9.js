/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created October 2
 * License: Public
 */

 //assigning the variable outputEl
 var outputEl = document.getElementById("output");

 //Adding a new element
 var oneEl = document.createElement("p");

 //changing the HTML
 oneEl.innerHTML = "WOW ITS DIFFERENT";

 //create a new element and add to new Variable
 var twoEl = document.createElement("p");

 //change the html inside new2El
 twoEl.innerHTML = "Something DIFFERENT";

 //append both element at once
 outputEl.appendChild(oneEl);
 outputEl.appendChild(twoEl);
