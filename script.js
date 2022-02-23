"use strict";

const starImg1 = document.querySelector("#star1");
const starImg2 = document.querySelector("#star2");
const starImg3 = document.querySelector("#star3");

let starTop, starLeft;

starImg1.style.top = "-20%";
starImg1.style.left = "-10%";
starImg2.style.top = "-20%";
starImg2.style.left = "-10%";
starImg3.style.top = "-20%";
starImg3.style.left = "-10%";

const changePosition1 = function () {
  starLeft = Math.floor(Math.random() * 150) - 20;
  starTop = Math.floor(Math.random() * 150) - 20;

  while (starTop > -10 && starTop < 110 && starLeft > -10 && starLeft < 110) {
    starLeft = Math.floor(Math.random() * 150) - 20;
    starTop = Math.floor(Math.random() * 150) - 20;
  }

  starImg1.style.top = starTop + "%";
  starImg1.style.left = starLeft + "%";
};

const changePosition2 = function () {
  starLeft = Math.floor(Math.random() * 150) - 20;
  starTop = Math.floor(Math.random() * 150) - 20;

  while (starTop > -10 && starTop < 110 && starLeft > -10 && starLeft < 110) {
    starLeft = Math.floor(Math.random() * 150) - 20;
    starTop = Math.floor(Math.random() * 150) - 20;
  }

  starImg2.style.top = starTop + "%";
  starImg2.style.left = starLeft + "%";
};

const changePosition3 = function () {
  starLeft = Math.floor(Math.random() * 130) - 10;
  starTop = Math.floor(Math.random() * 140) - 20;

  while (starTop > -10 && starTop < 110 && starLeft > -10 && starLeft < 110) {
    starLeft = Math.floor(Math.random() * 130) - 20;
    starTop = Math.floor(Math.random() * 140) - 20;
  }

  starImg3.style.top = starTop + "%";
  starImg3.style.left = starLeft + "%";
};

setInterval(changePosition1, 1400);
setInterval(changePosition2, 1400);
setInterval(changePosition3, 1400);
