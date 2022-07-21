/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const array1 = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const array2 = ["♦", "♥", "♠", "♣"];
var card = [];

function cardGen() {
  const objCarta = {};

  card[0] = Math.floor(Math.random() * array1.length);
  card[1] = Math.floor(Math.random() * array2.length);

  if (card[1] == 0 || card[1] == 1) {
    card[2] = "red";
  } else {
    card[2] = "black";
  }

  objCarta.color = card[2];
  objCarta.valor = array1[card[0]];
  objCarta.pinta = array2[card[1]];

  return objCarta;
}

window.onload = function() {
  let carta_generada = cardGen();
  let pintaUp = document.querySelector("#pintaUp");
  let pintaDown = document.querySelector("#pintaDown");
  let valor = document.querySelector("#valor");
  pintaUp.innerText = carta_generada.pinta;
  pintaDown.innerText = carta_generada.pinta;
  valor.innerText = carta_generada.valor;
  valor.style.color = carta_generada.color;
  pintaUp.style.color = carta_generada.color;
  pintaDown.style.color = carta_generada.color;
};
