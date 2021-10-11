/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created October 11
 * License: Public
 */

//create a button element
$(document).ready(function() {
  $("#my-button").click(function(){
    alert("have fun with the button");

  });
});
//change design from the jquery
$("#my-button").css("background", "red")
