// Задание 1
// let password = prompt('Введите пароль');
// if (password==='qwerty') {
//     console.log('Пароль введен верно');
// } else {
//     console.log('Пароль введен неправильно');
// }

// Задание 2
// let c = Number(prompt('Введите любое число'));
// if (c>0&&c<10) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// Задание 3
// let d = Number(prompt('напиши любое число'));
// let e = Number(prompt('напиши любое число'));
// if ((d||e)>100) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// Задание 4
// let a = '2';
// let b = '3';
// console.log(Number(a) + Number(b));

// Задание 5
// let month = Number(prompt('Введите месяц (числом)'));

// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('зима');
//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log('весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('осень');
//         break;

//     default:
//         console.log('Такого месяца не существует');
//         break;
// }

// Задание 7
// let f = Number(prompt('Пожалуйста, введите любое число'));

// if (isNaN(f)) {
//     alert('Нужно вписать число');
// } else if (f % 2 === 0) {
//     alert('Число четное');
// } else alert('Число нечетное');


// Задание 8
// let clientOS = Number(prompt('введите 0 или 1, где 0 — iOS, 1 — Android'));
// if (clientOS===0) {
//     alert('Установите версию приложения для iOS по ссылке');
// } else if (clientOS===1) {
//     alert('Установите версию приложения для Android по ссылке');
// }
//   else {confirm('Вы ввели что-то не то, давайте попробуем еще разок');}

// Задание 9 (1й вариант)
// let clientOS = Number(prompt('введите 0 или 1, где 0 — iOS, 1 — Android'));
// let clientDeviceYear = Number(prompt('Какого года выпуска ваш телефон?'));


// if (clientOS===0&&clientDeviceYear<2015) {
//     alert('Установите облегченную версию приложения для iOS по ссылке');
// }   else if (clientOS===0&&(clientDeviceYear>=2015)) {
//     alert('Установите версию приложения для iOS по ссылке');
// }   else if (clientOS===1&&clientDeviceYear<2015) {
//     alert('Установите облегченную версию приложения для Android по ссылке');
// }   else if (clientOS===1&&clientDeviceYear>=2015) {
//     alert('Установите версию приложения для Android по ссылке');
// }   else {confirm('Вы ввели что-то не то, давайте попробуем еще разок');}

// Задание 9 (2й вариант)
// let clientOS = Number(prompt('введите 0 или 1, где 0 — iOS, 1 — Android'));
// let clientDeviceYear = 2015;
// let checkClientDeviceYear = Number(prompt('Какого года выпуска ваш телефон?'));

// if (clientOS===0&&clientDeviceYear>checkClientDeviceYear) {
//     alert('Установите облегченную версию приложения для iOS по ссылке');
// }   else if (clientOS===0&&(clientDeviceYear<=checkClientDeviceYear)) {
//     alert('Установите версию приложения для iOS по ссылке');
// }   else if (clientOS===1&&clientDeviceYear>checkClientDeviceYear) {
//     alert('Установите облегченную версию приложения для Android по ссылке');
// }   else if (clientOS===1&&clientDeviceYear<=checkClientDeviceYear) {
//     alert('Установите версию приложения для Android по ссылке');
// }   else {confirm('Вы ввели что-то не то, давайте попробуем еще разок');};









