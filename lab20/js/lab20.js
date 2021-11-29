/*
 * Author Carlos Salazar <carsalazar@csumb.edu>
 * Created november 28
 * License: Public
 */

//url for the api
 URL = "https://randomfox.ca/floof/?ref=apilist.fun"

 //click to button
 $('#activate').click(getimg);

 function getimg() {
   $.ajax({
     //ENDPOINT
     url: URL,
     //type
     type: "GET",
   })
   //if succeeds
   .done(function(data) {
     console.log(data);
     var imageUrl = data.image;
     var imageHtml = "<img src='" + imageUrl + "'>";
     console.log(imageUrl);
     $("#output").html(imageHtml);
   })
 }

 getimg()
