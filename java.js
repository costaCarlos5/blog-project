// This is an example of a simple JavaScript function to toggle the visibility of a menu
/* 
function toggleMenu() {
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("show");
  }
  
  document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
  
 */

  // Exemplo de código JavaScript
var welcomeMessage = "Bem-vindo ao meu blog! ";

function displayWelcomeMessage() {
  var heading = document.querySelector("h2");
  heading.textContent = welcomeMessage;
}

displayWelcomeMessage();

// Adiciona evento ao botão de saudação
var btnGreet = document.getElementById("btn-greet");
btnGreet.addEventListener("click", greetUser);

// Função de saudação do usuário
function greetUser() {
  var inputName = document.getElementById("name").value;
  var greeting = "Olá, " + inputName + "! Bem-vindo ao meu blog!";
  var heading = document.querySelector("h2");
  heading.textContent = greeting;
}

