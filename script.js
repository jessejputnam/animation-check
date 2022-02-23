"use strict";

const starImg = document.querySelector(".star__img");
const button = document.querySelector(".btn");

let starTop, starLeft;

starImg.style.top = "-10%";
starImg.style.left = "-10%";

button.addEventListener("click", () => {
  starLeft = Math.floor(Math.random() * 150) - 20;
  starTop = Math.floor(Math.random() * 150) - 20;

  while (starTop > 0 && starTop < 100 && starLeft > 0 && starLeft < 100) {
    starLeft = Math.floor(Math.random() * 150) - 20;
    starTop = Math.floor(Math.random() * 150) - 20;
  }

  starImg.style.top = starTop + "%";
  starImg.style.left = starLeft + "%";
});

const changePosition = function () {
  starLeft = Math.floor(Math.random() * 150) - 20;
  starTop = Math.floor(Math.random() * 150) - 20;

  while (starTop > 0 && starTop < 100 && starLeft > 0 && starLeft < 100) {
    starLeft = Math.floor(Math.random() * 150) - 20;
    starTop = Math.floor(Math.random() * 150) - 20;
  }

  starImg.style.top = starTop + "%";
  starImg.style.left = starLeft + "%";
};

setInterval(changePosition, 1700);
