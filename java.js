// This is an example of a simple JavaScript function to toggle the visibility of a menu

function toggleMenu() {
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("show");
  }
  
  document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
  