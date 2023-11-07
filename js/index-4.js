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
const numbers = [11,4,7,2,9,15];

const result = numbers.sort((a,b)=Ю)