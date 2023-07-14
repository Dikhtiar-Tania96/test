// ВКЛАДЕНІСТЬ
// ОБЛАСТЬ ВИДИМОСТІ

// Існує 3 області видимості:
// 1 Глобальна
// 2 Блочна\Локальна
// 3 Функціональна


// Хойстинг-дозволяє змінній вспливати догори.

// const та let(ES6) мають лише Глобальну та Блочну\Локальну
// все що знаходиться у фігурних дужках по факту являється Блочна\Локальна;
// var має Глобальну та Функціональну




// канкатинація-зшивання всього до рядка
// рядок головніший

// 6 значень які завжди повернуть false:
// 1 0
// 2 NaN
// 3 ''
// 4 undefined
// 5 null
// 6 false

// // УРОК 1
// // Піднесення до степеня
// let base = prompt('Введіть число');
// base = Number(base);
// console.log(base);

// let power = prompt('Давай степінь');
// power = Number(power);
// console.log(power)

// let result = base ** power;
// console.log(result)

// const salary = 100;
// if(salary > 500){
//     console.log('Урааа')
// }if (console.log('Uuups'));


// // switch
// const option = 13;
// let message = '';

// switch(option){
//     case 1:
//     message = 'Ви можете забрати товар завтра з 12:00 у нашому магазині'
//     break;

//     case 2:
//     message = 'Курєр доставить ваш товар';
//     break;

//     case 3:
//     message = 'Посилка буде відправлення сьогодні';
//     break;

//     default:
//         message = 'Ми вам зателефонуємо';
// }
// console.log(message)

// цикл for
// for (let i = 10; i => 6; i -= 1){
// console.log(i)

// }
// console.log('sssss')

// Задача 1
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for(let i = 1; i <= employees; i += 1){
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary
//     );
//     console.log(`ЗП робітника номер ${i} - ${salary}`);
//     totalSalary += salary; 
// };

// console.log(`totalSalary: `, totalSalary);

// задача 
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1){
//     console.log(i);

//     if(i % 2 === 0){
//         console.log('парне:' , i);
//     }

//     if(i % 2 !== 0){
//         console.log(`не парне:`, i);
//     }
// }

// console.log(8 === '8'); 
// // false прирівнює типи даних
// console.log(4 == '4'); 
// // true прирівнює числа до одного типу (першого числа)


// пошук елемента за індексом
// const string = 'Hello world';
// console.log(string[4])

// довжина елементів рядка
// const text = 'I am a Tania';
// console.log(text.length)

// пошук останнього елемента рядка
// const prakrice = 'I like IT';
// console.log(prakrice[prakrice.length-1])

// розгалудження

// if(умова) {
// певна дія
// }
// умова = true
// if(5 > 6){
//     console.log('Pravda')
// } else {
//     console.log('Noo')
// }

// const value = 0;
// if(value > 12){
// console.log('Більше 12')
// }else if(value > 11){
//     console.log('Більше 11')
// }else if(value > 9){
//     console.log('Більше 9')
// }else{
//     console.log('Менше 9')
// }
//  БУФЕР ОБМІНУ WIN+V


// Тернарний вираз
// Парне число чи ні?
// const value = 10;
// console.log(value % 2 === 0 ? 'Парне' : "Непарне")

// if(value % 2 === 0){
//     console.log("Парне")
// }else  {
//     console.log("Непарне")
// }
// const result = value % 2 ? 'Не парне' : 'Парне';
// console.log(result)

//  Svitch keys

//  const value = 10;
//  switch(value){
//     case 5:
//         console.log(5);
//         break;
//     case 10:
//         console.log(10);
//         break;
//     case 15:
//         console.log(15);
//         break;
//         default:
//         console.log('default'); 
//  }
 

// console.log(value);
// var value = 10;


// ЦИКЛИ
// for(let i = 1; i < 10; i += 1 )
//      лічильник\умова\на який крок збільшуємо значення лічильника,перевизначення змінної

// for (let i = 1; i < 10; i += 1){
//     console.log(i);
// }


// while(блок умови, можливе зависання вкладки\спочатку перевірить.потім робить)
// let i = 1;
// while(i < 10){
//     console.log(i);
//     i += 1
// }


// do while(спочатку робить а потім перевіряє )
// let i = 10;
// do{
//     console.log(i);
//     i += 1;
// }while(i < 10)


// EXAMPLE 1
// const response = prompt('Яка назва JS?');
// const result = 'ECMAScript';
// if(response === result){
// alert('Правильно')
// }else {
//     alert('Не правильно')
// }
// alert(response === result) ? 'Правильно' : 'Не правильно';

// EXAMPLE 2(відображення часу)
// const hours = 14;
// const minutes = 0;
// let timestring;

// if(minutes){
//     timestring = `${hours}г. ${minutes}хв`
// }else{
//     timestring = `${hours}г.`
// }
// console.log(timestring)

// EXAMLPE 3
// const userInput = Number(prompt('Введіть число'));
// if(!userInput){
//     console.log('Це нуль')
// }else if(userInput > 0){
//     console.log('Це позитивне число')
// }else{
//     console.log('Це негативне число')
// }

// let login = prompt('Enter your login')
// // console.log(login)
// if(login){
//     login = login.toLowerCase();
//     if(login === 'admin'){
//         const password = prompt('Enter your password');
//         if(password === 'Я адмін'){
//             console.log('Hello');
//         }else{
//             console.log('Noo paswword');
//         }
//     }else{
//         console.log('I dont you know');
//     }
// }else{
//     console.log('I dont you know(')
// }


// УРОК 2