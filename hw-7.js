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

//! gameWords


// Задание 1
// let js = 'js';
// js = js.toUpperCase();
// console.log(js);

//? Задание 2
// function searchStart(array, filter) {
//     array.forEach(element => {
//         if (element.toLowerCase().includes(filter.toLowerCase())) {
//             console.log(element);
//         }
//     });
// }

// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

// Задание 3
// let number = 32.58884;
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));

// Задание 4
// let numbers = [52, 53, 49, 77, 21, 32];

// let max = Math.max(...numbers);
// let min = Math.min(...numbers);

// console.log(max);
// console.log(min);

// Задание 5
// function randomNumber(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue) + minValue);
// }
// console.log(randomNumber(1, 10));

//? Задание 6
// Напишите функцию, которая будет принимать на вход целое число, а 
// возвращать массив случайных целых чисел от 0 до переданного числа. 
// Длина массива должна быть в 2 раза меньше переданного числа.

// function getRandomArrNumbers(number) {
//     if (number % 1 === 0 && number >= 0) {
//         return Math.round(Math.random() * number);
//         const result = [number];
//     }
//     else {console.log('Вы ввели что-то не то или дробное число!');}
// }




// console.log(getRandomArrNumbers(7));; // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
// getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6

// Задание 7
// function randomNumber(minValue, maxValue) {
//     if (minValue % 1 === 0 && maxValue % 1 === 0) {
//         return Math.round(Math.random() * (maxValue - minValue) + minValue);
//     }
//     else {console.log('Вы ввели что-то не то или дробное число!');}
// }
// console.log(randomNumber(1, 10));

// Задание 8
// let myDate = new Date(1674220924819);
// console.log(myDate); 

// Задание 9
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();
// myDate.setDate(73);
// let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
// " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

// console.log(fullDate);

//? Задание 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();
// let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
// " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

// console.log(new Date());

//? Задание 11
// let Randomfructs = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// Randomfructs = Randomfructs.sort(() => Math.random() - 0.5);


// console.log(Randomfructs);