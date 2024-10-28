var modal = document.getElementById("newsletterForm");
var btn = document.getElementById("subscribeBtn");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

var element = document.getElementById("newsletterForm");
var t=setTimeout(openPopUp,5000);
function openPopUp() {
  element = document.getElementById("newsletterForm");
  element.style.display = "block";
  element.style.opacity = "1";
}

function closeWindow() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}