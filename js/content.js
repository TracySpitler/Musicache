// JS Content

//var key = "99774229f0f8cf05d6ec0176a0109170";
//create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Listen for a form submission
submit.addEventListener('submit', function(e){
  // prevent default
  e.preventDefault();

  var albumResult = document.getElementById("card");
  albumResult.getElementsByTagName("p")[0].innerHTML = "hello";
  // capture value from input field
  const query = searchField.value;

  // set any additional values for our query
  const limit = "3";
  const type = "album";

  // build query string with a temperate literal
  //const api = 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=' + query + '&api_key='+ key + '&format=json';

  albumResult.getElementsByTagName("h4")[0].innerHTML = responseObject.album.name;
  albumLoad();

});

function albumLoad() {
  //when response has loaded
  xhr.onload = function() {
    //create variable to store JSON data
    var responseObject = JSON.parse(xhr.responseText);

    var albumResult = document.getElementById("card");
    albumResult.getElementsByTagName("p")[0].innerHTML = "hello";

    // Cache the required nodes
    const submit = document.querySelector(".submit");
    const searchField = document.querySelector(".searchField");

    xhr.open('GET', "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + query + "&api_key=99774229f0f8cf05d6ec0176a0109170&format=json", true);
    xhr.send(null);

  };
}
