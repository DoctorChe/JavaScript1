// Урок 4. Объекты в JavaScript
// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
console.log("Задание 1");

function numToObj(num) {
	if (num > 999) {
		console.log("Число превышает 999.");
		return {};
	} else {
		return {
			единицы: num % 10,
			десятки: Math.floor(num % 100 / 10),
			сотни: Math.floor(num / 100),
		}
	}
}

console.log(numToObj(1000));
console.log(numToObj(345));
console.log(numToObj(45));
console.log(numToObj(5));
console.log(numToObj(0));

// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

console.log("Задание 2");

var basket = {
	items: [],
	countBasketPrice() {
		var fullprice = 0;
		this.items.forEach(function(elem) {
			if (elem.hasOwnProperty("price")) {
				fullprice += elem.price;
			}
		});
		return fullprice;
	},
	addItem(item) {
		this.items.push(item);
	}
}

var item1 = {
	name: "Item1",
	price: 10
};

var item2 = {
	name: "Item2",
	price: 20
};

basket.items.push(item1);
basket.items.push(item2);

console.log("Содержимое корзины:")
console.log(basket.items);
console.log("Стоимость корзины: " + basket.countBasketPrice() + " р.");

