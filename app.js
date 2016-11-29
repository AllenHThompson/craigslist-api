/* INSTALL CORS BECAUSE CROSS ORIGIN REQUESTS WERE BEING BLOCKED. INSTALLED EXPRESS BECAUSE I THOUGHT I NEEDED TOO. GET ERROR 'REQUIRE' IS NOT DEFINED*/

//var express = require('express');
//var cors = require('cors');

/* TRYING TO USE JQUERY AJAX CALL TO 'GET' HTML FROM CRAIGSLIST SEARCH*/
$(document).ready(function() {

     function getData() {
          $.ajax({
               url: 'https://atlanta.craigslist.org/search/bik',
               method: 'GET',
               /* KEEP GETTING ERROR - "No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access."*/
          },
          function(data) {
               console.log(data);
               var myData = data;
               console.log(myData);
          });
     }

     $('.button').click(function() {
          console.log("You clicked!");
          getData();
     });
});
