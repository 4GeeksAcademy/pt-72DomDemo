/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let btn = document.querySelector(".btn");
window.onload = function() {
  btn.addEventListener("click", function() {
    generateColors();
  });
};

const generateColors = () => {
  let first = document.querySelector("#first");
  let second = document.querySelector("#second");
  let third = document.querySelector("#third");
  let fourth = document.querySelector("#fourth");

  let blues = ["#9DC3C2", "#77A6B6", "#4D7298"];
  let pinks = ["#5E4955", "#C99DA3", "#996888"];
  let greens = ["#40531B", "#618B4A", "#AFBC88v"];

  let blue = blues[Math.floor(Math.random() * blues.length)];
  let pink = pinks[Math.floor(Math.random() * pinks.length)];
  let green = greens[Math.floor(Math.random() * greens.length)];

  if (blue === "#9DC3C2" && pink === "#C99DA3") {
    btn.style.background = green;
  } else if (blue === "#77A6B6" && green === "#AFBC88") {
    btn.style.background = pink;
  } else if (blue === "#4D7298" && green === "#40531B") {
    btn.style.background = blue;
  }

  first.style.background = blue;
  second.style.background = pink;
  third.style.background = green;
  fourth.style.background = blue;
};
