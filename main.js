// Задание 1
// Почему код даёт именно такие результаты?

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2	1) a += 1;		2) c = a;		3) c;
// d = b++; alert(d);           // 1	1) d = b;		2) b += 1;		3) d;
// c = (2+ ++a); alert(c);      // 5	1) a += 1;		2) c = 2 + a;	3) c;
// d = (2+ b++); alert(d);      // 4	1) d = 2 + b;	2) b +=1;		3) d;
// alert(a);                    // 3	1) a;
// alert(b);                    // 3	1) b;

// Задание 2
// Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);		// 5

// Задание 3

var a = +prompt("Введите число a: ");
var b = +prompt("Введите число b: ");

if (a >= 0 && b >= 0) {
	alert(a - b);
} else if (a < 0 && b < 0) {
	alert(a * b);
} else {
	alert(a + b);
}

// Задание 4
var a = Math.floor(Math.random() * 16);
switch(a){
	case 0: console.log(0);
	case 1: console.log(1);
	case 2: console.log(2);
	case 3: console.log(3);
	case 4: console.log(4);
	case 5: console.log(5);
	case 6: console.log(6);
	case 7: console.log(7);
	case 8: console.log(8);
	case 9: console.log(9);
	case 10: console.log(10);
	case 11: console.log(11);
	case 12: console.log(12);
	case 13: console.log(13);
	case 14: console.log(14);
	case 15: console.log(15);
}

// Задание 5
function sum(arg1, arg2) {
	return arg1 + arg2
}

function sub(arg1, arg2) {
	return arg1 - arg2
}

function mul(arg1, arg2) {
	return arg1 * arg2
}

function div(arg1, arg2) {
	return arg1 / arg2
}

// Задание 6
function mathOperation(arg1, arg2, operation) {
	// return operation(arg1, arg2)
	switch(operation) {
		case 'sum': return sum(arg1, arg2); break;
		case 'sub': return sub(arg1, arg2); break;
		case 'mul': return mul(arg1, arg2); break;
		case 'div': return div(arg1, arg2); break;
		default: return "Недопустимое имя функции";
	}
}

alert(mathOperation(2, 3, 'sum'));
alert(mathOperation(2, 3, 'sub'));
alert(mathOperation(2, 3, 'mul'));
alert(mathOperation(2, 3, 'div'));
alert(mathOperation(2, 3, 'pow'));

// Задание 7
console.log("Результат сравнения null == 0: " + (null == 0));	// false - т.к. null - это отдельный тип данных

// Задание 8
function power(val, pow) {
	if (pow < 0) {
		return "Недопустимое значение степени"
	}
	if (pow === 0) {
		return 1
	}
	if (pow-- >= 1) {
		return val * power(val, pow)
	}
}

console.log(power(2, -1));
console.log(power(2, 0));
console.log(power(2, 1));
console.log(power(2, 3));