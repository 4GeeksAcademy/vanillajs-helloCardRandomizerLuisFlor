/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const simbolos = ["♦", "♥", "♠", "♣"];
const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
function randomizarNumeros() {
  let randomNumber1 = Math.floor(Math.random() * numeros.length);
  let numero = document.getElementById("numero");
  numero.innerHTML = `${numeros[randomNumber1]}`;
}
function randomizarSimbolos() {
  let randomNumber2 = Math.floor(Math.random() * simbolos.length);
  return simbolos[randomNumber2];
}
function colorSimbolos(simbolo) {
  return simbolo === "♦" || simbolo === "♥" ? "red" : "black";
}

window.onload = function() {
  //write your code here
  randomizarNumeros();
  let simboloRandom = randomizarSimbolos();
  let colorRandom = colorSimbolos(simboloRandom);
  let simboloArriba = document.getElementById("simboloArriba");
  let simboloAbajo = document.getElementById("simboloAbajo");
  simboloArriba.innerHTML = simboloRandom;
  simboloArriba.style.color = colorRandom;
  simboloAbajo.innerHTML = simboloRandom;
  simboloAbajo.style.color = colorRandom;
};
