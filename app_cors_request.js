/* INSTALL CORS BECAUSE CROSS ORIGIN REQUESTS WERE BEING BLOCKED. INSTALLED EXPRESS BECAUSE I THOUGHT I NEEDED TOO. GET ERROR 'REQUIRE' IS NOT DEFINED*/

//var express = require('express');
//var cors = require('cors');

/* TRYING TO USE JQUERY AJAX CALL TO 'GET' HTML FROM CRAIGSLIST SEARCH*/
$(document).ready(function() {
     /* CREDIT WWW.HTML5ROCKS.COM/EN/TUTORIALS/CORS/*/

     function createCORSRequest(method, url) {
          var xhr = new XMLHttpRequest();
          if ("withCredentials" in xhr) {
               xhr.open(method, url, true);
          } else if (typeof XDomainRequest != "undefined") {
               xhr = new XDomainRequest();
               xhr.open(method, url);
          } else {
               xhr = null;
          }
          return xhr;
     }

     function makeCorsRequest() {
          var url = 'https://atlanta.craigslist.org/bik';
          var xhr = createCORSRequest('GET', url);
          if (!xhr) {
               console.log('CORS not supported')
               return;
          }
          xhr.onload = function() {
               var text = xhr.responseText;
               var title = getTitle(text);
               console.log('Response from CORS Reuest to ' + url + ': ' + title);
          };
          xhr.onerror = function() {
               console.log('There was an error making the request.');
          };
          xhr.send();
     }

     $('.button').click(function() {
          console.log("You clicked!");
          makeCorsRequest();
     });
});
