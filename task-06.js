"use strict";
let input;
let total = 0;
input = prompt('Введите число')
while (input !== null) {
  if (Number(input)) {
    total += Number(input);
  } else {
    alert('Введено не число!!!');
  }
  input = prompt('Введите число')
}
alert('Общая сумма чисел равна '+total);