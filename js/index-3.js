// МОДУЛЬ 3
// об'єкти
// const music = {
//     avtor: 'Alex',
//     raitang: 10,
//     about: ['love', 'fantactik', 'comedy']
// };
// console.log(music.avtor)
// console.log(music.raitang);
// console.log(music['avtor'])достукатись до елементу




// МЕТОД ОБЄКТІВ
// const playlist = {
//     name : 'My playlist',
//     rating : 5,
//     tracks : ['Track 1', 'Track 2', 'Track 3'],
//     trackCount : 4,

//     newName(namePlaylist){
//         this.name = namePlaylist;
//     },

//     addTrack(track){
//         this.tracks.push(track);
//         this.trackCount = this.tracks.length;
//     },

//     newRating(ratingPlaylist){
//         this.rating = ratingPlaylist;
//     },
// }
// playlist.newRating(8);
// playlist.addTrack('track 4');
// playlist.addTrack('track 5');
// playlist.addTrack('track 6');

// playlist.newName('Ohoho');

// console.log(playlist)



//  ІТЕРАЦІЯ(перебирання)
// const feedback = {
//     good : 5,
//     neutral : 10,
//     bad : 3,
// }
// let totalFeedback = 0;
// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys){
//     console.log(key);
//     console.log(feedback[key])

//     totalFeedback += feedback[key];
// }
// console.log('total :' , totalFeedback)

// ІНШИЙ МЕТОД ПЕРЕБОРУ(повертає масив значень)
// const values = Object.values(feedback);
// console.log(values)

// for(const value of values){
//     console.log(value);

//     totalFeedback += value;
// }
// console.log('total:', totalFeedback)


// РОБОТА З КОЛЕКЦІЄЮ 
// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Alex', online: true},
//     {name: 'Poly', online: false},
//     {name: 'Kiwi', online: false},
// ];
// for(const friend of friends){
//     console.log(friend.online);

//     // friends[1].newprop = 5;додаємо корему властивість на елемент
// };

// console.table(friends)


// // ПОШУК ДРУГА ЗА ІМЕНЕМ
// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Alex', online: true},
//     {name: 'Poly', online: false},
//     {name: 'Kiwi', online: false},
// ];

// console.table(friends)

// const findFriendName =  function(allFriends, friendName){
//     for(const friend of allFriends){
//         console.log(friend.name );

//         if(friend.name === friendName){
//             return 'Нашли';
//         } 
//     }
//     return "Noooo";
// }
// console.log(findFriendName(friends, 'Poly'));
// console.log(findFriendName(friends, 'Chery'));

///З МАСИВУ ВИВЕСТИ УСІ ІМЕНА ДРУЗІВ
// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Alex', online: true},
//     {name: 'Poly', online: false},
//     {name: 'Kiwi', online: false},
// ];
// console.table(friends)

// const getAllName = function(allFriends){
//     const names = [];
//     for (const friend of friends){
//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     return names;
// }
// console.log(getAllName(friends));


// ВИТЯГНУТИ УСІХ ДРУЗІВ ЯКІ ОНЛАЙН
// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Alex', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Kiwi', online: false},
// ];
// console.table(friends)

// const friendOnline = function(allFriends){
//     const getOnline = [];
//     for(const friend of friends){
//         console.log(friend);
//         console.log(friend.online);

//         if(friend.online){
//             getOnline.push(friend);
//         }
//     }
//     return getOnline;
// }
// console.log(friendOnline(friends))

// ПОВЕРНЕННЯ МАСИВУ
// РОЗПОДІЛ ПО КАТЕГОРІЯМ ДРУЗІВ ОНЛАЙН
// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Alex', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Kiwi', online: false},
// ];

// const getFriendByOnlineStatus = function(allFriends){
//     const friendsByStatus = {
//         online: [],
//         ofline: []
//     };

//     for(const friend of friends){
//         if(friend.online){
//             friendsByStatus.online.push(friend)
//             continue;
//         } 
//             friendsByStatus.ofline.push(friend);
//     }
//     return friendsByStatus;
// }
// console.log(getFriendByOnlineStatus(friends))




// ЯК ДІЗНАТИСЯ КІЛЬКІСТЬ ВЛАСТИВОСТЕЙ ОБ'ЄКТУ
// const x = {
//     a: 5,
//     b: 20,
//     c: 50,
//     d: 100
// };
// console.log(Object.keys(x));




// // concat
// const number = [1,2,3].concat([4,5,6],[7,8,9]);
// console.log(number) об'єднує масив

// const numbers = [...[1,2,3],4,5]; розпилення
// console.log(numbers)

// ЗНАЙТИ НАЙМЕНШУ І НАЙБІЛЬШУ ТЕМПЕРАТУРУ
// const temp = [18,9,17,20,45];
// console.log(Math.max(...temp));
// console.log(Math.min(...temp));

// !!!! операція спред(розпилення)не деструктивна. З цим масимов нічого не відбувається.
//  якщо елементи цього масиву примітиву роблять копію,якщо елементи обєкти ставиться посилання
// const a = [1,2,3];
// const b = [...a];
// console.log(a);
// console.log(b)
// ВГОРІ КОПІЯ

// const a = [{a:1}, {b:2}, {c:3}];
// const b = [...a];
// console.log(a)
// ПОСИЛАННЯ


// ЗЖИМАЄМО ДЕКІЛЬКА МАСИВІВ В ОДИН
// const lastWeekTemp = [1,2,3];
// const currentTemp = [4,5,6];
// const nextWeekTemp = [7,8,9];

// const xx = lastWeekTemp.concat(currentTemp, nextWeekTemp);
// console.log(xx); ЧЕРЕЗ concat
// const allTemp = [...lastWeekTemp,...currentTemp, ...nextWeekTemp];
// console.log(allTemp);!!!!  ЧЕРЕЗ spread

// РОЗПИЛЕННЯ ОБЄКТІВ
// const a = {x:1, y:2};
// const b = {x:0, z:3};
// const c = Object.assign({}, a, b);
// console.log(c)

//  const c = {
//    ...a,
//    x:10,
//    ...b,
//    y:20
//  };
//  console.log(c)

// ДЕСТРУКТУРИЗАЦІЯ
// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     trackCount : 3,
//     tracks : ['Track-1','Track-2','Track-3']
// };
// !!!ЯКЩО ЗЛІВА ВІД = БУДЕ { } ЦЕ Є ДЕСТРУКТУРИЗАЦІЄЮ
// const {rating, tracks} = playlist;
// console.log(rating);
// console.log(tracks); 



//    const user = {
//     name: 'Tania',
//     age: 27,
//     skills:['html', 'js', 'css'],
//     language: {
//         html: false,
//         css: true,
//         js: false
//     },
//    };

// user.age = {
//     years: 27,
//     month: 1
// }; оновити

// user.car = 'Lexus' додати ключ
// delete user.language.html // видалення ключа
// delete user['name']

// Object.freeze(user) // заморозити зміни (лише весь обєкт)
// user.name = 'lala'
// console.log(user)

// const user = {
//     name: 'Tania',
//     age: 27,
//     skills: ['html', 'js', 'css'],
//     language: {
//         html: false,
//         css: true,
//         js: false  
//     },
//     sayHello(){
//         console.log(this);
//         console.log(`Hello my name ${this.name}, my skills: `);
//     },
//     mySkills(){
//         this.sayHello()
//         for(const skill of this.skills){
//             console.log(skill)
//         }
//     }
//    };
// user.sayHello()
// user.mySkills()


// ПЕРЕБИРАННЯ ОБЄКТА
// for in перебирання ключів обєкта
// const user = {
//     name: 'Tania',
//     age: 27,
//     skills:['html', 'js', 'css'],
//     language: {
//         html: false,
//         css: true,
//         js: false
//     },
//    };


//    бенефіт(Успадкування обєкта від обєкта)   
// const user1 = Object.create(user);
// user1.name = 'Olga';
// user1.age = 48;
// console.log(user1.name);
// console.log(user1);


// for(const key in user){
//     if(typeof user[key] === 'function'){
//         continue;
//     }
//     console.log(user[key]);
// }

// успадковані обєкти
// for(const key in user1){
//     if (user1.hasOwnProperty(key)){
//         console.log(key)
//     }
// }

// МАСИВИ КЛЮЧІВ
// const keys = Object.keys(user);
// console.log(keys)

// for (const key of keys){
//     if(typeof user [key] === 'function'){
//         continue
//     }
//     console.log(user[key]);
// }
// const user1 = Object.create(user);
// user1.name = 'Olga';
// user1.age = 48;

// const keys1 = Object.keys(user1);
// console.log(keys1)



// const values = Object.values(user);
// console.log(values)

// for(const value of values){
//     if(typeof value === 'function'){
//         continue
//     }; 
//     console.log(value)
// }

 

// ЗАВДАННЯ 1
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.mood = 'skydiving';
// user['premium'] = false;

// const keys = Object.keys(user);
// for(const key of keys){
//     console.log(`${key}: ${user[PublicKeyCredential]}`)
// }
// console.log(keys);


// ЗАВДАННЯ 2(метод object.value)
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;
// for(const key in salaries){ 
//     sum += salaries[key];
//     // console.log(salaries[key]);
// }
// console.log('Загальна сума:' , sum) 


// const keys = Object.keys(salaries)
// for(const key of keys){
//     console.log(key);
//     sum += salaries[key];
// }
// console.log(sum)

// const values = Object.values(salaries);
// for(const value of values){
//     sum += value
// }
// console.log(sum)

// ЗАВДАННЯ 3
//     // коментар /** */
// /**
//  * Find stone in array and calc total price
//  * price * quantity
//  * @param {Array} stones 
//  * @param {String} stoneName 
//  * @returns {Number || String} price || error message
//  */
// function calcTotalPrice(stones, stoneName){
//     for(const stone of stones){
//         if(stone.name === stoneName){
//             return stone.price * stone.quantity
//         };
//     };
//     return 'Немає даних'
// }

// const stones = [
//     {name: 'Діамант', price: 1300, quantity: 4},
//     {name: 'Щебінь', price: 90, quantity: 6},
//     {name: 'Сапфір', price: 130, quantity: 2},
// ];
// console.log(calcTotalPrice(stones, 'Діамант'));

// ЗАВДАННЯ 4
// УПРАВЛІННЯ ОСОБИСТИМ КАБІНЕТОМ ІНТЕРНЕТ БАНКУ

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// заблокувати зміни
// Object.freeze(Transaction)



// SPREAD RECT ДУСТРУКТУРИЗАЦІЯ МАСИВУ
// Д_ІЯ масиву
// ОГОЛОШЕННЯ ЧИСЛА
// const arr = [1,2,3];
// const arr1 = [9, 12,]
// const [second] = arr;
// const [, , third = 88] = arr1;
// console.log(second);
// console.log(third)



// Д-ІЯ ОБЄКТІВ
// const name = 'USER';

// const user = {
//     name: 'Test',
//     age: 12,
//     skills: {},
// }
// const {name, age} = user;
// console.log(name);
// console.log(age);


// ВКЛАДЕННІСТЬ ОБЄКТУ
// const user = {
//         name: 'Test',
//         age: 12,
//         skills: {
//             html: false,
//             css: true,
//             js: false,
//         },
//     }
// const{skills : {js,css}} = user;
// console.log(js);
// console.log(css);
 






// const user ={
//     name:'Test',
//     age: 12,
//     skills:{
//         html:false,
//         css:true,
//         js:true,
//     },
// };

// const user1 ={
//     name:'Test',
//     age: 12,
//     skills:{
//         html:false,
//         css:true,
//         react:true,
//     },
// }
// function foo({name,skills:{js}}){
//     console.log(name);
//     console.log(js)
// }
// foo();


// Д-ІЯ ПІД ЧАС ЦИКЛУ
// const user ={
//     name:'Test',
//     age: 12,
//     skills:{
//         html:false,
//         css:true,
//         js:true,
//     },
// };

// const user1 ={
//     name:'Test',
//     age: 22,
//     skills:{
//         html:false,
//         css:true,
//         js:false,
//     },
// }

// const user2 ={
//     name:'Test',
//     skills:{
//         html:false,
//         css:true,
//     },
// }
// const arr = [user, user1, user2];
// for(const {age : userAge = 0, skills:{js = false}} of arr){
// // console.log(userAge);
// console.log(js)
// }



// ОПЕРАТОРИ SPREAD REST
// const arr = [55,109,28,3];
// const min = Math.min(55, 109, 28, 3);
// const min = Math.min(...arr);
// console.log(min);розпилення

// const arr1 = [...arr];
// const arr1 = [55,109,28,3];
// console.log(arr === arr1) false

// const user ={
//     name:'Test',
//     age: 12,
//     skills:{
//         html:false,
//         css:true,
//         js:true,
//     },
// };
// const user1 = user; присвоєння за посиланням
// console.log(user === user1) true


// const arr = [1,2,3,4,5];
// const copy = [...arr]; spread розпилення
// console.log(copy)

// rest 
// const [first, second, ...args] = arr;
// console.log(args)




// const arr = [1,2,3,4,5];
// function foo(a,b,c,d,e){
// console.log(a,b,c,d,e)
// }
// foo(...arr) //аргументи це spread


// function foo(a,b,c, ...args){ //параменти це rest
// console.log(a,b,c);
// console.log(args)
// }
// foo(1,2,3,4,5); 
// foo(91,52,13,4,5,6,7)



// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
//   }
















