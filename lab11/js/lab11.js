/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created October 11
 * License: Public
 */

//create a button element


$("#output").append("<button id='my-button'>press me!")
$("#output").css("background", "red")

$(document).ready(function() {
  $("#output").click(function(){
    $("#output").css("background-color", "#34eba8")
    alert("have fun with the button");

  });
});

$("#output").css("background", "red")
