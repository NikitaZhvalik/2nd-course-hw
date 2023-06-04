// //! gameSeason
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

// //! gameWords
// function gameWords() {
//     let randomFructs = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// randomFructs = randomFructs.sort(() => Math.random() - 0.5);
// let filter1 = randomFructs[0];
// let filter2 = randomFructs[randomFructs.length - 1];

// alert(randomFructs);
// let userAnswer1 = prompt(`Чему равнялся первый элемент массива?`);
// let userAnswer2 = prompt(`Чему равнялся последний элемент массива?`);

// for (let i = randomFructs.length - 1; i < randomFructs.length; i++) {
//     if (userAnswer1.toLowerCase() === filter1.toLowerCase() && userAnswer2.toLowerCase()  === filter2.toLowerCase()) {
//         alert(`Вы угадали оба элемента`);
//     } else if (userAnswer1.toLowerCase() === filter1.toLowerCase() || userAnswer2.toLowerCase() === filter2.toLowerCase()) {
//         alert(`Вы были близки к победе!`);
//     }
//     else {
//         alert(`Вы не угадали ни один из элементов :(`);
//     }
// };
// }

// Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
 
//  console.log(people.sort((a, b) => a.age - b.age));

// Задание 2
// function isPositive(number) {
//     return number;
//   }

//   function isMale(people) {
//     return people;
//   }
  
//   function filter(arr, ruleFunction) {
//     const result = [];
  
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 1) {
//             result.push(ruleFunction(arr[i]));
//         };
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].gender == 'male') {
//             result.push(ruleFunction(arr[i]));
//         };
//     }
  
//     return result;
//   }

//     let people = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
//  ];
 
//   console.log(filter(people, isMale));
//   console.log(filter([3, -4, 1, 9], isPositive));

// Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
// Должен выводить [3, 1, 9]

// Задание 3
// const timer = (deadline) => {
// 	let time = deadline;
// 	console.log(new Date());
// 	const interval = setInterval(() => {
// 		time += 3;
// 		console.log(new Date());
// 	}, 3000);


// 	setTimeout(() => {
//     clearInterval(interval);
//     console.log('Время истекло!')
//   }, deadline * 1000)
// };

// timer(30);


// Задание 4
// function delayForSecond(callback) {
//     setTimeout(() => callback(), 2000);
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })

// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// // setTimeout(sayHi, 1000 * 2);
// delayForSecond((setTimeout(sayHi, 1000 * 2)))