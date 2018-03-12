// JS Events

var elFeedback = document.querySelector("#feedback");

var submit = document.querySelector(".submit");

function checkEmpty(event) {

  const searchField = document.querySelector(".search-field");
  const query = searchField.value;

  if ((query === "") || (query === null)) {
    elFeedback.innerHTML = "left blank";
    event.preventDefault();
  }
  else {
    //loadAPI(event);
    elFeedback.innerHTML = "something went wrong";
  }
}

function loadAPI() {
    document.getElementById("demo").innerHTML = Date();
}

submit.addEventListener('click', checkEmpty, false);
