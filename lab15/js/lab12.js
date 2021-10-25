/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created October 11
 * License: Public
 */

//create a button element
$("#challenge-button").click(function(){
//action goes here
$("#textbox1").removeClass("green-text");
$("#textbox1").toggleClass("red-text");
});

$("#Problems-button").click(function(){
//action goes here
$("#textbox2").removeClass("green-text");
$("#textbox2").toggleClass("red-text");
});

$("#Results-button").click(function(){
//action goes here
$("#textbox3").toggleClass("green-text");
$("#textbox3").removeClass("red-text");
});
