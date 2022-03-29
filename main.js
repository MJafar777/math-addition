"use strict";

//sellecting element

let numOne = document.querySelector(".num1");
let numTwo = document.querySelector(".num2");
let answer = document.querySelector(".answer");
let button = document.querySelector(".btn");

numOne.textContent = Number(Math.floor(Math.random() * 50 + 1));
numTwo.textContent = Number(Math.floor(Math.random() * 50 + 1));

button.addEventListener("click", function (e) {
  e.preventDefault;
  let sum = +answer.value;
  let qush = Number(numOne.textContent) + Number(numTwo.textContent);
  console.log(qush);
  if (qush === sum) {
    alert(`siz kiritgan javob to'g'ri 🙂`);
  } else {
    alert(
      `Siz xato qildingiz! ushbu misol javobi ${
        Number(numOne.textContent) + Number(numTwo.textContent)
      } ga teng 🤦‍♂️`
    );
  }
});
