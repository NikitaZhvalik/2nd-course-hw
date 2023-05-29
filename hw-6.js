//! gameSeason
// function gameSeason() {
//     let month = Number(prompt('Введите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится'));
//     switch (month) {
//         case 12:
//         case 1:
//         case 2:
//             alert('зима');
//             break;
//         case 3:
//         case 4:
//         case 5:
//             alert('весна');
//             break;
//         case 6:
//         case 7:
//         case 8:
//             alert('лето');
//             break;
//         case 9:
//         case 10:
//         case 11:
//             alert('осень');
//             break;

//         default:
//             alert('Такого месяца не существует');
//             break;
//     }
// }

// Задание 1
// const num = [1, 5, 4, 10, 0, 3];
// for (i = 0; i < num.length; i++) {
//   if (num[i] === 10) break;
//     console.log('we find 10');
// }

// Задание 2
// const num = [1, 5, 4, 10, 0, 3, 4 , 1 , 4];
// for (i = 0, index = 0; i < num.length, index < num.length; i++, index++) {
//   if (num[i] === 4) {
//     console.log(`${num[i]} - index ${index}`);
//   }
// }

// Задание 3
// const num = [1, 3, 5, 10, 20];
// const result = num.join(' ');
// console.log(result);

// Задание 4
// const result = [];
// for (let i = 0; i < 3; i++) {
// 	result[i] = [];
// 	for (let n = 0; n < 3; n++) {
// 		result[i][n] = 1;
// 	}
// }
// console.log(result);

// Задание 5
// const num = [1, 1, 1];
// num.push(2,2,2);
// console.log(num);

// Задание 6

// 1 вариант
// const num = [9, 8, 7, 'a', 6, 5];
// num.sort();
// num.pop();
// console.log(num);

// 2 вариант
// const num = [9, 8, 7, 'a', 6, 5];
// num.sort();
// num.splice(5);
// console.log(num);

//? Задание 7
// const num = [9, 8, 7, 6, 5];
// let userNumber = Number(prompt('введите число от 1 до 10'));

// for (let i = 0; i < num.length; i++) {
// 	if (userNumber >= 1 && userNumber <= 10 && num[i] === userNumber) {
// 		alert(`у нас в массиве есть число ${num[i]}`);
// 		break;
// 	} else {
// 		alert('вы ввели что-то не то');
// 		continue;
// 	}
// }

// Задание 8
// let word = 'abcdef';
// word = word.split('');
// word = word.reverse();
// const newWord = word.join('');
// console.log(newWord);

// Задание 9
// const num = [[1, 2, 3,],[4, 5, 6]];
// const result= num.reduce(function(a, b) {
// 	return a.concat(b);
// });
// console.log(result);

// Задание 10
// const num = [5, 3, 8, -7, 11];
// let result = 0;

// for (let i = 0; i < num.length; i++) {
// 	result += num[i];
// 	console.log(result);
// }

// Задание 11
// function Numbers(num) {
// 	let result = num.map(item => `${item ** 2}`);
// 	console.log(result);
// }

// Numbers([-1, 0, 5, -10, 18]);

// Задание 12
// function getLengthWords(array) {
// 	const result = array.map((str) => str.length);
// 	console.log(result);
// }

// getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);

//Задание 13
// function filterPositive(array) {
//   const result = array.filter(item => item >= 0);
//   console.log(result);
// }

// filterPositive([-1, 0, 5, -10, 56]);
// filterPositive([-25, 25, 0, -1000, -2]);
