/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/pica.jpg";
import "./assets/img/corazon.jpg";
import "./assets/img/trebol.jpg";
import "./assets/img/diamante.jpg";
let servicio = function() {

  let seleccion = document.querySelector(".form-select");
  if (seleccion == "vacio") {
    p.innerHTML = "<br><input type='text' id='seleccionvacio' required>--<input type='text' id='PRECIO' required>";
  } else if (num == 1) {
    p.innerHTML = "<br><input type='text' id='seleccionvacio' value='1' required>--<input type='text' id='PRECIO' value='500€' required>";
  } else if (num == 2) {
    p.innerHTML = "<br><input type='text' id='seleccionvacio' value='2' required>--<input type='text' id='PRECIO' value='800€' required>";
  } 
  //img aleatorias
  let num2 = Math.floor(Math.random() * 4 + 1);
  let tdimg = document.querySelectorAll(".tdpinta");
  if (num2 == 1) {
    tdimg[0].innerHTML = "<img src='./pica.jpg' />";
    tdimg[1].innerHTML = "<img src='./pica.jpg' />";
  }
  if (num2 == 2) {
    tdimg[0].innerHTML = "<img src='./corazon.jpg' />";
    tdimg[1].innerHTML = "<img src='./corazon.jpg' />";
  }
  if (num2 == 3) {
    tdimg[0].innerHTML = "<img src='./trebol.jpg' />";
    tdimg[1].innerHTML = "<img src='./trebol.jpg' />";
  }
  if (num2 == 4) {
    tdimg[0].innerHTML = "<img src='./diamante.jpg' />";
    tdimg[1].innerHTML = "<img src='./diamante.jpg' />";
  }
};
window.onload = function() {
  aleatoria();
};
let button = document.querySelector("#generate");
button.addEventListener("click", function() {
  aleatoria();
});
setTimeout(aleatoria, 10000);
//cambiar atributos de la carta
let height = document.querySelector("#height");
let width = document.querySelector("#width");
aplicar.addEventListener("click", function() {
  height.style.height = height.value;
  width.style.width = width.value;
  alert("Tamaño Modificado" + height.value + "x" + width.value);
});
© 2021 GitHub, Inc.