"use strict";
const total = 100;
const ordered = 80;
// (ordered > total) ? console.log('На складе недостаточно товаров!') : console.log('Заказ оформлен, с вами свяжется менеджер');
if (ordered > total) {
  console.log('На складе недостаточно товаров!')
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер')
}