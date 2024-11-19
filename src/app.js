/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const inputWidth = document.getElementById("inputWidth");
const inputHeight = document.getElementById("inputHeight");
const button = document.getElementById("button");

function newWidth(size) {
  carta.style.width = `${size}px`;
}
function newHeight(size) {
  carta.style.height = `${size}px`;
}
button.addEventListener("click", e => {
  carta.style.width = "270px";
  carta.style.height = "400px";
});
inputWidth.addEventListener("blur", e => {
  if (e.target.value) {
    newWidth(e.target.value);
    e.target.value = "";
  }
});
inputHeight.addEventListener("blur", e => {
  if (e.target.value) {
    newHeight(e.target.value);
    e.target.value = "";
  }
});
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

let carta = document.getElementById("carta");
carta.addEventListener("click", function() {
  randomizarNumeros();
  let simboloRandom = randomizarSimbolos();
  let colorRandom = colorSimbolos(simboloRandom);
  let simboloArriba = document.getElementById("simboloArriba");
  let simboloAbajo = document.getElementById("simboloAbajo");
  simboloArriba.innerHTML = simboloRandom;
  simboloArriba.style.color = colorRandom;
  simboloAbajo.innerHTML = simboloRandom;
  simboloAbajo.style.color = colorRandom;
});

function actualizarCarta() {
  randomizarNumeros();
  let simboloRandom = randomizarSimbolos();
  let colorRandom = colorSimbolos(simboloRandom);
  let simboloArriba = document.getElementById("simboloArriba");
  let simboloAbajo = document.getElementById("simboloAbajo");
  simboloArriba.innerHTML = simboloRandom;
  simboloArriba.style.color = colorRandom;
  simboloAbajo.innerHTML = simboloRandom;
  simboloAbajo.style.color = colorRandom;
}

setInterval(actualizarCarta, 10000);

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
