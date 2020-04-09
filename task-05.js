"use strict";
let country = prompt('Введите страну для доставки');
let price;

function showDeliveryPrice(destination, price) {
  destination = destination.charAt(0).toUpperCase() + destination.slice(1);
  return 'Доставка в ' + destination + ' будет стоить ' + price + ' кредитов'
}
country = country.toLowerCase();
switch (country) {
  case 'китай':
    price = 100;
    alert(showDeliveryPrice(country, price));
    break;
  case 'чили':
    price = 250;
    alert(showDeliveryPrice(country, price));
    break;
  case 'австралия':
    price = 170;
    alert(showDeliveryPrice(country, price));
    break;
  case 'индия':
    price = 80;
    alert(showDeliveryPrice(country, price));
    break;
  case 'ямайка':
    price = 120;
    alert(showDeliveryPrice(country, price));
    break;

  default:
    alert('В вашей стране доставка недоступна')
    break;
}