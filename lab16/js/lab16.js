/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created October 27
 * License: Public
 */

 // Define function and making objects
 function Vehicle(make, model, year, color, extras) {
   this.myMake = make;
   this.myModel = model;
   this.myYear = year;
   this.myColor = color;
   this.myExtras = extras;
   this.info = function() {
     return (this.myMake +
     " addition " + this.myModel +
     " (" + this.myYear + ")" +
     " is " + this.myColor +
     " and " + this.myExtras);
   };
 }


 // Linking Javascipt to output in HTML
 var outputDiv = document.getElementById("output");


 // A loop to do Tasks
 vehicles = [];
 var honda = new Vehicle("honda", "civic", "2005 car", "grey colored", "the first car I drove.");
 vehicles.push(honda);
 var acura = new Vehicle("acura", "tl", "2006 car", "white colored", "is the first car I owned.");
 vehicles.push(acura);
 var kia = new Vehicle("kia", "k5", "2021 car", "maroon colored", "is the car that I want to own.")
 vehicles.push(Ford);

 for (i=0; i<vehicles.length;i++) {
   outputDiv.innerText += vehicles[i].info() + "\n"
 }
