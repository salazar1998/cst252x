/**
 * Author: Carlos Salazar <carsalazar@csumb.edu>
 * Created: September 13, 2021
 * License: Public Domain
 */
 // Define Variables
 myTransport = ["Legs", "car", "bike", "uber"];

 myMainRide = {
   make: "Honda",
   model: "civic",
   color: "grey",
   year: 2008,
 }

 // output
 document.writeln("Kinds of transportation i use: " + myTransport + "<br>");
 document.writeln("My day to day ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
