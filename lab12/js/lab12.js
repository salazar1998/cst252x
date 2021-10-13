/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created October 11
 * License: Public
 */

//create a button element
$("#challenge-button").click(function(){
//action goes here
$("#textbox1").css("background", "lightblue")
$("#textbox1").removeClass("background", "lightblue");
$("#textbox1").toggleClass("background", "lightblue");
});

$("#Problems-button").click(function(){
//action goes here
$("#textbox2").removeClass("green-text");
$("#textbox2").toggleClass("red-text");
});

$("#Results-button").click(function(){
//action goes here
$("#textbox3").removeClass("green-text");
$("#textbox3").toggleClass("red-text");
});
