// Задание 1
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
console.log("Задание 1");
var a = 0;
while(a <= 100){
	var is_prime = true;
	for (var i = 2; i < a; i++) {
		if (a % i == 0) {
			is_prime = false;
			break;
		}
	}
	if (a > 1 && is_prime) {
		console.log(a);
	}
	a++;
}

// Задание 2
// С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

// Задание 3
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
console.log("Задание 3a");

var item1 = {
	name: "Item1",
	price: 10
};

var item2 = {
	name: "Item2",
	price: 20
};

var basket = [];
basket.push(item1);
basket.push(item2);
console.log("Содержимое корзины:")
console.log(basket);

console.log("Задание 3b");
function countBasketPrice(basket) {
	var fullprice = 0;
	for (var elem of basket) {
		if (elem.hasOwnProperty('price')) {
			fullprice += elem.price;
		}
	}
	// basket.forEach(function(elem) {
	// 	fullprice += elem['price'];
	// });
	return fullprice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " р.");

// Задание 4*
// Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}
console.log("Задание 4");
for (var i = 0; i < 10; console.log(i++)) {}

// Задание 5
// *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
console.log("Задание 5");
for (var i = 1; i <= 20; i++) {
	var s = "x";
	for (var k = 0; k < i-1; k++) {
		s += "x";
	}
	console.log(s);
}