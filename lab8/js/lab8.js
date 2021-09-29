/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created Sep 27
 * License: Public
 */

// sortUserName - a function that takes user input and sorts the letter of their name
function sortUserName() {
	var userName = window.prompt("Hello do you want to see your name mixed up enter here ");
	console.log("userName =", userName);

// split string to array
var nameArray = userName.split("");
console.log("nameArray =", nameArray);

// sort array
var nameArraySort = nameArray.sort();
console.log ("nameArraySort =", nameArraySort);

// join array back to a string
var nameSorted = nameArraySort.join("");
console.log("nameSorted =", nameSorted);

// sort
return nameSorted;
}

// output in HTML
document.writeln("Here you go, your new name... ",
	sortUserName(), "</br>");
