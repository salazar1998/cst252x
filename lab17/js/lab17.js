/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created november 3
 * License: Public
 */


 // Define class and making objects
 class Vehicle{
   constructor(make, model, year, color, extras) {
     this.make = make;
     this.model = model;
     this.year = year;
     this.color = color;
     this.extras = extras;
   }


   // return value in HTML
   info() {
     return(this.make + " " +
       this.model + " " +
       this.year + " is " +
       this.color  + " and " +
       this.extras
       );
   }
 }


 // inheriting methods from class if I use class Driving
 class Driving extends Vehicle {
   constructor(make, model, year, color, extras,) {
   }
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


 // Creates unlimited lines in case I wanted to add more and /n breaks it into a new line in HTML
 for (i=0; i<vehicles.length;i++) {
   outputDiv.innerText += vehicles[i].info() + "\n"
 }
