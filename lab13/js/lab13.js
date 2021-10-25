/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created October 18
 * License: Public
 */

 // takes a name, gets the length, and calculates
 // which house the name is in
 function sortingHat(str) {
 	var length = str.length;
   var remainder = length % 4;
   var house = "";
   if (remainder == 0) {
   	house = "Slytherin";
   } else if (remainder == 1) {
   	house = "Hufflepuff";
   } else if (remainder == 2) {
   	house = "Griffendor";
   } else {
   	house = "Ravenclaw";
   }
   return house;
 }

 document.getElementById("create").addEventListener("click", function(){
   // get name from input field
 	var name = document.getElementById("input").value;
   // run sortinghat function
   var house = sortingHat(name);
   console.log(name, house);
   // output results on page
   document.getElementById("output").innerText = "The Sorting Hat has sorted you into " + house;
 })
