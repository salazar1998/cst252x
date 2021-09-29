/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created Sep 28
 * License: Public
 */

 function sub10(x) {
     var results = x - 10
		 return results;
 }

 // test function
 console.log("If we subtract 10 out of 100, it equals", sub10(100));
 console.log("If we subtract 10 out of 150, it equals", sub10(150));

 array = [30, 72, 80, 10, 120, 800, 2]
 console.log("My array", array);
 var result = array.map(sub10);
 console.log("Subtract 10 from the array:", result);

 // Now we use the anonymous function with the map to do some new concepts
 var result = array.map(function(x){
    return x * 10;
 })
//task x
//function to add text to given element
function main() {
		// get element by id
		outputElement = document.getElementById("js-output");
		// change contents of element
		outputElement.innerHTML = "Y000000 We in task X now son!!";
}
