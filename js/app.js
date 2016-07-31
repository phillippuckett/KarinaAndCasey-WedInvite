
// DROPDOWN MENU //
var dropDown = function () {
  document.getElementById("myDropdown").classList.toggle("show");
};

window.onclick = function (event) {
  if (!event.target.matches('.fa-bars')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
// DROPDOWN MENU //

// META VIEWPORT SCALABILITY //
function updateWidth() {
  viewport = document.querySelector("meta[name=viewport]");
  if (window.orientation == 90 || window.orientation == -90) {
    viewport.setAttribute('content', 'width=1401, initial-scale=0.34, maximum-scale=1.0, user-scalable=1');
  }
  else {
    viewport.setAttribute('content', 'width=640, initial-scale=0.47, maximum-scale=1.0, user-scalable=1');
  }
}
// META VIEWPORT SCALABILITY //