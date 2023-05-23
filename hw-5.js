// Задание 1
// const min = (a, b) => {
//     if (a > b && a !== null && b !== null) {
//         return b;
//     }
//     else if (a < b && a !== null && b !== null) {
//         return a;
//     }
//     else if (a === b a !== null && b !== null) {
//         return a;
//     }
//     else {
//         return ('Вы ввели что-то не то');
//     }
// }

// console.log(min(41, 741));

// Задание 2
// let evenOdd = (a) => {
//     if (a % 2 === 0) {
//         alert ('Это число четное');
//     }
//     else if (a % 2 === 1 || a % 2 === -1) {
//         alert ('Это число нечетное');
//     }
//     else {
//         alert ('Вы ввели что-то не то');
//     }
// }

// console.log(evenOdd(11));

// Задание 3
// function square1(a) {
//     console.log(a**2);
// };

// let square2 = (b) => b**2;

// console.log(square1(2));
// console.log(square2(10));

// Задание 4
// let userAge = () => {
//     let age = Number(prompt(`Сколько вам лет?`));
//     if (age >= 0 && age <= 12 && age) {
//         alert(`Привет, друг!`); 
//     } else if (age > 12) {
//         alert(`Добро пожаловать!`);  
//     } else if (age < 0) {
//         alert(`Вы ввели неправильное значение`);
//     } else {
//         alert ('Вы ввели что-то не то');
//     }
// }

// console.log(userAge());

// Задание 5
// const exam = () => {
//     let a = Number(prompt('Введите число'));
//     let b = Number(prompt('Введите число'));
//     if (isNaN(`${a}`) || isNaN(`${b}`)) {
//         alert('Одно или оба значения не являются числом')
//     } else {
//         alert(`${a}` * (`${b}`));
//     }
// }

// console.log(exam());

// Задание 6
// const exam = () => {
//     let a = Number(prompt('Введите число'));
//     let result = `${a}`*`${a}`;
//     if (isNaN(`${a}`)) {
//         alert('Переданный параметр не является числом');
//     } else {
//         alert(`${a} в кубе равняется ${result}`);
//     }
// }

// console.log(exam());

// // Задание 7
// function area() {
//     return 3.14 * this.radius *  this.radius;
// }

// function perimeter() {
//     return this.radius * 2 * 3.14;
// }

// let circle1 = {
//     radius: 14,

//     getArea: area,
//     getPerimeter: perimeter
// };

// let circle2 = {
//     radius: 7,

//     getArea: area,
//     getPerimeter: perimeter
// };

// console.log(`Площадь 1-го круга равна ${circle1.getArea()}`);
// console.log(`Периметр 1-го круга равен ${circle1.getPerimeter()}`);

// console.log(`Площадь 2-го круга равна ${circle2.getArea()}`);
// console.log(`Периметр 2-го круга равен ${circle2.getPerimeter()}`);




// Задание 8 --- gameSeason
function gameSeason() {
    let month = Number(prompt('Введите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится'));
    switch (month) {
        case 12:
        case 1:
        case 2:
            alert('зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('осень');
            break;

        default:
            alert('Такого месяца не существует');
            break;
    }
}
