/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created October 5
 * License: Public
 */

 var button = document.getElementById("my-button");
 console.log("The button", button);

 function sortUserName(name) {

 var nameArray = name.split("");
 console.log("nameArray =", nameArray);

 var nameArraySort = nameArray.sort();
 console.log ("nameArraySort =", nameArraySort);

 var nameSorted = nameArraySort.join("");
 console.log("nameSorted =", nameSorted);

 return nameSorted;
 }

 button.addEventListener("click", function(){

 var name = document.getElementById("name-field").value;
 console.log("Name here", name);

 var nameSorted = sortUserName(name);

 var intro = document.getElementById("user-name");
 console.log("name", intro);
 intro.innerHTML = "Your alien name is, " + nameSorted;

 })
