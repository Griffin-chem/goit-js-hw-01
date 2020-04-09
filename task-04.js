"use strict";
const pricePerDroid = 3000;
let credits = 23580;
let totalPrice;
const numberOfDroids = prompt('Сколько дроидов вы хотите купить?');
if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * numberOfDroids;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits = credits - totalPrice;
    console.log('Вы купили', numberOfDroids, 'дроидов, на счету осталось', credits, 'кредитов.');
  }
}