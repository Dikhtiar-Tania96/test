// КОЛБЕК
// ф-ія яка передається іншій ф-ії як аргумент називається ф-ією обратного виклику(колбек)ж
// ф-ія яка приймає іншу ф-ію як параметр називається ф-ія високого порядку

// function foo(a,b){
//     console.log(a,b)
// };

// console.log(foo)побачимо тіло функції
// foo(6,9)

// const arr = [2, 5, 7, 9];
// function add(arr) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     total+=arr[i];
//   }
//   return total;
// }
// console.log(add(arr));

// function sum(arr) {
//     let total = arr[0];
//     for (let i = 1; i < arr.length; i += 1) {
//       total*=arr[i];
//     }
//     return total;
//   }
//   console.log(sum(arr));

//   function each(arr, callback){
//     let total = arr[0];
//     for(let i=1; i<arr.length; i+=1){
//         total = callback(total,arr[1])
//     }
//     return total;
//   }

//   console.log(each(arr,add))
//   console.log(each(arr,sum))
//   console.log(each(arr,division))

//     function add(first, second){
//         return first + second;
//     }
//     function sum(first, second){
//         return first * second;
//     }
//     function division( first, second){
//         return first/second;
//     }

// function each(arr,callback){
//     let total = arr[0];
//     for(let i=1; i<arr.length; i+=1){
//         total = callback(total, arr[i])
//     }
//     return total;
// }
// console.log(each(arr,add));
// console.log(each(arr,sum));
// console.log(each(arr,division));

// function add(first, second){
//     return first + second;
// }
// function sum(first, second){
//     return first * second;
// }
// function division( first, second){
//     return first/second;
// }

// ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ

//ВИВЧИТИ
// 1.ЩО робить масив?
// 2.Що він приймає?
// 3.Що він повертає?

// FOR EACH
// const arr = [2, 5, 7, 9];
// arr.forEach(function( idx){
// console.log(idx)
// })
// console.log(arr);

//item-ітеруємий елемент(звертаємось до елементу у масиві)
//idx-індекс поточного елемента
//arr-сам масив який перебирраємо
// arr.forEach(function(item,i){
// console.log(`work with number ${item}`)
//    arr[idx]=item * 2;
// })
// console.log(arr)

// СТРІЛОЧНІ ФУНКЦІЇ
//DECLARATION
// foo(){
//     function(foo)
// };

// EXPRESSION
// const boo=function(){
// };
// boo()

//ARROW-стрілочні
// arguments-відсутній
// const foo = () => {};
// callback === ()=>{}

// const foo = (...rest) => {
//     console.log(rest)
// };
// foo(1,2,3,4,5,6);
// foo(1,33,67,900,3)

// Example 1
// function createProduct(obj,callback){
//     const product = {
//         id:Date.now(),
//         ...obj
//     }
//     callback(product)
//     console.log(product)
// }

// function logProduct(obj){
// console.log(`product ${obj.name}`)
// }

// function logTotalPrice({price, quantity}){
//     console.log(`totalPrice ${price * quantity}`)
// }
// createProduct({name:'apple', price:30,quantity:3}, logProduct);
// createProduct({name:'lemon', price:20,quantity:5}, logTotalPrice);

// Example2-калбек фуннкції

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,

//     withdraw(amount, onSuccess, onError){
//         if(amount > TRANSACTION_LIMIT){
//             onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`)
//             return;
//         } else if (this.balance < amount){
//             onError (`Недостатньо коштів на рахунку`);
//             return;
//         }
//         this.balance -= amount;
//         onSuccess(`Вітаємо! Успішно знято кошти! ${amount}, balance ${this.balance}`)
//     },

//     deposit(amount, onSuccess, onError){
//         if(amount>TRANSACTION_LIMIT){
//             onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`)
//         return;
//         } else if(amount<=0){
//             onError(`Nice try bro😊`);
//             return;
//         }
//         this.balance += amount;
//         onSuccess(`Додано ${amount}`)
//     }
// };

// function handleSuccess(message){
//     console.log(`Success! ${message}`);
// }

// function handleError(message){
//     console.log(`Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example3
// function each(array,callback){

// }
// console.log(
//     each([64,49,36,25,16],function(value){
//         return value * 2;
//     }),
// );

// console.log(
//     each([64,49,36,25,16],function(value){
//         return value - 10;
//     }),
// )

// Example4
// СТРІЛОЧНІ ФУНКЦІЇ(arroow function)
// const createProduct = (partialProduct, callback) => {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//     callback(product);
// }

// const createProduct = (partialProduct, callback) => {
//     callback ({
//         id: Date.now(),
//         ...partialProduct
//     });
// }
// function logProduct(product){
//     console.log(product)
// };
// const logProduct = product => console.log(product.name);

// const logTotalPrice = ({price, quantity}) => console.log(price*quantity);

// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity:8,
// }, logProduct);
// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity:5,
// }, logTotalPrice);

// EXAMPLE5
// вкионайте рефакторинг колбеків за допомогою стрілочних функцій
// const TRANSACTION_LIMIT = 1000;

// const account ={
//     username : 'Jacob',
//     balance: 400,
//     withdraw (amount, onSuccess, onError){
//         if(amount > TRANSACTION_LIMIT){
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if(amount > this.balance){
//             onError(`Amount can't exceed account balance of ${this.balance} credits`)
//         } else {
//             this.balance -= amount;
//             onSuccess(`Account balance: ${this.balance}`)
//         };
//     },

//     deposit (amount, onSuccess, onError){
//         if(amount > TRANSACTION_LIMIT){
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if(amount <= 0){
//             onError(`Amount must be more than 0 credits`)
//         } else {
//             this.balance += amount;
//             onSuccess(`Account balance: ${this.balance}`)
//         };
//     }
// };

// const handleSuccess = message =>console.log(`✔Success! ${message}`);

// const handleError = message => console.log(`❌Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// EXAMPLE7
// МЕТОД forEach
// виконайте рефакторинг коду за допомогою методу foreach та стрілочні ф-ії
// function logItems(items){
//     console.log(items);
//     for(let i = 0; i < items.length; i+=1){
//         console.log(`${i+1} - ${items[i]}`);
//     }
// }
// const logItems = arr => arr.forEach((item, idx) => console.log(`${idx+1} - ${item}`));
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍣', '🍗', '🥗', '🍿']);

// EXAMPLE8
// FOREACH
// виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції
// function calculateAverage(...args){
//     let total=0;
//     for(let i = 0; i < args.length; i+=1){
//         total +=args[i];
//     }
//     return total/args.length;
// };

// const calculateAverage = (...arr) => {
// let total = 0;
// arr.forEach(value => total+=value);
// // console.log(total)
// return total / arr.length
// }
// console.log(calculateAverage(1,2,3,4));
// console.log(calculateAverage(14,8,5));
// console.log(calculateAverage(27,56,2,6));

// ПЕРЕБИРАЮЧІ  МЕТОДИ
// MAP
// const arr = [1,2,3,4,5,6,7];
// const result = arr.map((item,idx,arr)=>item*2);
// console.log(result);

// const result = arr.map((item) => {
//     інверсія if(!(item%2)){
//         return item * 2
//     }
//     return item;
// })
// console.log(result)

///////////////////////////////
// const arr = [{
//     name:'User1',
//     skills:['HTML', 'CSS']
//     }, { name:'User2',
//     skills:['JS', 'CSS']
//     }, { name:'User3',
//     skills:['HTML', 'react']
//     }];

// const result = arr.map(item => item.skills.map(skill=>skill));
// console.log(result)
// const result = arr.flatMap(item => item.skills);
// console.log(result)

//////////////////////////////
// find - повертає один елемент який задовільнив умову;
// const arr = [1,2,3,4,5,6,7];
// const result = arr.find(item => item > 5);
// console.log(result)
// працює до першого true, якщо буде все false то буде undefined

// хто знає js?
//  const arr = [{
//     name:'User1',
//     skills:['HTML', 'CSS']
//     }, { name:'User2',
//     skills:['JS', 'CSS']
//     }, { name:'User3',
//     skills:['HTML', 'react']
//     }];

//     const result = arr.find(item => item.skills.includes('JS'));
//     console.log(result)

//////////////////////////////////////////////////////////
// який індекс має юзер,який вивчив react?
// const arr = [{
//         name:'User1',
//         skills:['HTML', 'CSS']
//         }, { name:'User2',
//         skills:['JS', 'CSS']
//         }, { name:'User3',
//         skills:['HTML', 'react']
//         }];

// const result = arr.findIndex(item => item.skills.includes('react'))
// console.log(result);

///////////////////////////////////////////////////////////
// filter - повертає усі елементи,які задовільняють умову;відібрати усі елементи по певній умові
// const arr = [1,2,3,4,5,6,7];
// const result = arr.filter(item => !(item%2)).map(item=>item*2);
// console.log(result)

/////////////////////////////////////////////////
// every - повертає значення true якщо кожен елемент масиву задовільняє умову;
// якщо зустрічає перший false він його зразу повертає;
// every
// const numbers = [1,2,3,4,5,6,7];
// const result = numbers.every(item =>!(item%2));
// console.log(result)

// const user=[{
//     name:'User1',
//     age:18
// },{
//     name:'User2',
//     age:15
// }, {
//     name:'User',
//     age:25
// }]

// const result = user.every(user=>user.age>=18);
// console.log(result)

//////////////////////////////////////////////////////////
// Some
//   some -   якщо хоча б один елемент задовільняє умову

// const numbers = [22,1,2,3,4,5,6,7,8];
// const numbers2 = [1,23,43,7,9];

// const result = numbers2.some(item=> {
//     console.log(item);
//     return !(item%2)});
// console.log(result);

/////////////////////////////////////////////////////////////
// sort - сортує елементи у порядку спадання чи зростання
// мутує початковий масив
// const numbers = [11,4,7,2,9,15];
// const result = numbers.sort((a,b) => b - a);
// console.log('result', result);
// console.log('numbers', numbers)

// const result = [...numbers].sort((a,b) => b - a); мотуючий масив\сортування за спаданням\зростанням
// const result = numbers.sort();сортуємо по юнікоду
// numbers.sort()//сортування по юнікоду
// numbers.sort().reverse()//сортування по юнікоду з більшого до меншого
// console.log('result', result);
// console.log('numbers', numbers)

// СОРТУВАННЯ РЯДКІВ
// const str = ['b', 'R', 'a', 'A', 'i','q'];
// // const result = str.sort();//сортування по юнікоду
// const result = str.sort((a,b) => a.localeCompare(b))//сорутвання в алфавітному порядку
// console.log(result)

// СОРТУВАННЯ ПО КІЛЬКОСТІ ЛІТЕР У СЛОВІ
// const test =['apple', 'car', 'white', 'js'];
// test.sort((a,b)=>a.length - b.length);
// console.log(test)
////////////////////////////////////////////////////////////

// REDUCE
//єдиний метод масиву,який приймає не один колбек.
//у будь якому випадку ми маємо повернути акумулятор
// const numbers = [5,2,7,12,9,1];
// const result = numbers.reduce((acc, item, idx, arr) => {
//     acc += item;
//     return acc
// }, 0);
// console.log(result)

// const numbers = [5, 2, 7, 12, 9, 1];
// const result = numbers.reduce((acc, item) => {
//   const test = acc.push(item * 2);
//   console.log(test);
//   return acc;
// }, []);
// console.log(result);
//НЕЯВНЕ ПОВЕРНЕННЯ.......
// const numbers2 = [5, 2, 7, 12, 9, 1];
// const result2 = numbers.reduce((acc, item) => {
//   acc.push(item * 2);
//   return acc;
// }, []);
// console.log(result2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXAMPLE 1
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//EXAMPLE 1 - МЕТОД MAP
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
// [ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getModels = cars => {
//     const models = cars.map(car => car.model);
//     return models;
//  };
// СПРОЩЕННЯ КОДУ НИЖЧЕ
// const getModels = cars => cars.map(car => car.model);
//  console.log(getModels(cars));

// EXAMPLE 2
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки
// [ {
//         make: 'Ford',
//         model: 'Explorer',
//         type: 'suv',
//         amount: 6,
//         price: 31660,
//         onSale: false
//     }]
// const makeCarWithDiscount = (cars, discount) => {
//     const result = cars.map (car => {
//         return {
//             ...car,
//             price: car.price * 0.8
//         };
//     });
// return result;
// }
// console.table(makeCarWithDiscount(cars,0.2));
// console.table(makeCarWithDiscount(cars, 0.4))

// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.
// [ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const filterByPrice = (cars, threshold) => {
//     const result = cars.filter(({price})=> price < threshold);
//     return result;
// };
//оптимізований код нижче
// const filterByPrice = (cars, threshold) => cars.filter(({price})=> price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
// [ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale);
// console.table(getCarsWithDiscount(cars));

// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.
// [
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];
// const getCarsWithType = (cars, type) => cars.filter
// (({type : carType}) => type === carType)
// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));


// Example 6 - Метод find
// [ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getCarByModel = (cars, model) => cars.find(({model : carModel}) => model === carModel)

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));


// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.
// console.log(cars)
// const sortByAscendingAmount = cars => {
//     return cars.sort((a,b) => a.amount - b.amount);
// }
// console.table(sortByAscendingAmount(cars));


// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a,b) => b.price - a.price);
// console.log(cars)
// console.table(sortByDescendingPrice(cars));

// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.
// [ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const sortByModel = (cars, order) => {
//     if(order === 'asc'){
//         return [...cars].sort((a,b) => a.model.localeCompare(b.model))
//     } else {
//         return [...cars].sort((a,b) => b.model.localeCompare(a.model))
//     }
// }
// ТЕРНАРНИЙ ОПЕРАТОР
// const sortByModel = (cars, order) => 
// [...cars].sort((a,b)=> order === 'asc ' ? a.model.localeCompare(b.model) : b.model.localeCompare(a.model));

//АБО
// const sortByModel = (cars, order) => [...cars].sort(({model: a}, {model:b}) =>
// order === 'asc' ? a.localeCompare(b) : b.localeCompare(a))

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));



// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getTotalAmount = cars => cars.reduce((acc, {amount})=> acc + amount,0)

// console.log(getTotalAmount(cars));


// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getModelsOnSale = cars => cars.filter(({onSale}) => onSale)
// .map(({model}, _, arr)=>{
// console.log('cars',cars);
// console.log('filter', arr);
// return model;
// } );
//ОПТИМІЗАЦІЯ КОДУ
// const getModelsOnSale = cars => cars.filter(({onSale}) => onSale).map(({model})=>model)

// console.log(getModelsOnSale(cars));


// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getSortedCarsOnSale = cars => 
// cars.filter(({onSale})=>onSale).sort((a,b) => a.price - b.price);
// console.log(cars)
// console.table(getSortedCarsOnSale(cars));



// const str = 'sdkghsuiokdhvikoahfozh';
// {
//   s: 2,
//   k: 3,
//   d: 2

// const foo = str => str.split('').reduce((acc,item)=>{
//   if(acc.hasOwnProperty(item)){
//     acc[item] += 1
//   }else{
//     acc[item] = 1
//   }
//   return acc
// },{});

//ПЕРЕРОБИМО НА ТЕРНАРНИЙ ОПЕРАТОР
// acc.hasOwnProperty(item) ? acc[item] +=1 : acc[item] = 1
// return acc
// }, {});
// console.log(foo(str))
///ЗВЕРХУ РІВЕНЬ СПІВБЕЕСІДИ

// const cars2 = ["Ford", "Honda", "Mazda", "Toyota"]
// const cars3 = []
// Кількість авто 4:
// 1 Ford
// 2 Honda
// 3 Mazda
// 4 Toyota

// Нажаль авто відсутні

// const boo = arr => arr.reduce((acc,car,idx)=>{
//   acc += `${idx + 1} - ${car}\n`;
//   return acc}, 
//   arr.length ? `Кількість авто ${arr.length}:\n` : {
//   errorMessage: `Нажаль авто відсутні 😮`
// });

// console.log(boo(cars2));
// console.log(boo(cars3));




// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter(item => item !== 3)
// console.log(result);
