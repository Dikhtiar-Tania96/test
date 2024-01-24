// //this
// //є тільки у функціях
// //ОБЄКТИ НЕ МОЖУТЬ МІСТИТИ THIS
// // Вони поділяються на два типи.
// //перший тип(дві функції)
// //1)declaration
// //function foo(){ }
// //2)expression
// //const foo = function(){}

// //другий тип
// //aroww
// //function=()=>{}

// //declaration!!!!!!!!!!все так само у expression
// //!!!якщо функцію ніхто не викликає,або викликає сама себе
// //якщо немає строгого режиму, то ми посилаємось на обєкт Window;
// //якщо є строгий режим "use strict" посилаємось на undefined
// // function foo(){
// //     console.log(this)
// // }
// // foo()

// //aroww
// //визначається фактичним місцем написання
// //у будь якому режимі буде посилатися на обєкт Window
// // const foo = () =>{
// //      console.log(this)
// // }
// // foo()
// //присутній type="module,тільки тоді arow буде посилатись на this як undefined"

// // const obA = {
// //     name: 'A',
// //     sayHello(){
// //         console.log(this)
// //     }
// // }
// // obA.sayHello()

// // const obA = {
// //     name: 'A',
// //     skills: {
// //         skil: 'html',
// //         sayHello(){
// //             console.log(this)
// //         }
// //     }
// // }
// // obA.skills.sayHello()

// //aroww
// // const objB= {
// //     name: 'B',
// //     skills: {
// //         skill:'css',
// //         sayHello:() =>{
// //             console.log(this)
// //         }
// //     }

// // }
// // objB.skills.sayHello()

// // const objB= {
// //         name: 'B',
// //         foo(){
// //             const sayHello=()=>{
// //                 console.log(this);
// //             }
// //             sayHello()
// //         }
// //     }
// //     objB.foo()

// //ПРАКТИЧНЕ НА ОСНОВІ СХЕМИ
// //  declaration
// //  const objA = {
// //     name: 'A',
// //     foo(){
// //         console.log(this)
// //     }
// //  }
// //  objA.foo() //objA===this

// //  function boo(){
// //     console.log(this)
// //  }
// //  boo()

// //arrow
// //  const objB = {
// //     name: 'B',
// //     foo: () => {
// //         console.log(this)
// //     }
// //  }
// //  objB.foo()

// // const objB = {
// //   name: "B",
// //   boo() {
// //     const foo () = > {
// //       console.log(this);
// //     };
// //     foo();
// //   },
// // }
// // objB.boo();

// //методи фунцій
// //call
// //aply
// //bind
// // function foo(a,b,c){
// //     console.log(this, a, b, c)
// // }
// // // //call
// // const objA = {
// //     name: 'A'
// // }
// // const objB = {
// //     name: 'B'
// // }
// // foo.call(objA, 22, 33,88)
// // foo.call(objB)

// //aply
// // const objA = {
// //         name: 'A'
// //     }
// //     const objB = {
// //         name: 'B'
// //     }
// //     const args = [22,33,88]
// //     foo.apply(objA, args)
// //     foo.call(objA, args)

// //bind потрібно створити зміну і викликати її
// // const objA = {
// //     name: 'A'
// // }
// // const objB = {
// //     name: 'B'
// // }

// // const copy = foo.bind(objA);
// // copy(11, 22, 33);
// // copy(45, 76, 99)

// //ПРАКТИЧНЕ
// // Example 1 - Майстерня коштовностей
// // Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// // const chopShop = {
// //     stones: [{
// //             name: 'Emerald',
// //             price: 1300,
// //             quantity: 4
// //         },
// //         {
// //             name: 'Diamond',
// //             price: 2700,
// //             quantity: 3
// //         },
// //         {
// //             name: 'Sapphire',
// //             price: 1400,
// //             quantity: 7
// //         },
// //         {
// //             name: 'Ruby',
// //             price: 800,
// //             quantity: 2
// //         },
// //     ],
// //     calcTotalPrice(stoneName){
// //         const {price, quantity} = this.stones.find(({name}) => name === stoneName)
// //         return price * quantity
// //     },
// // };
// // console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// // console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// // console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// // console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// // Example 2 - Телефонна книга
// // Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// // const phonebook = {
// //   contacts: [],
// //   add(contact) {
// //     const newContact = {
// //       list: 'default',
// //       ...contact,
// //       id: this.generateId(),
// //       createdAt: this.getDate(),
// //     };
// //     this.contacts.push(newContact);
// //     return this.contacts;
// //   },
// //   generateId() {
// //     return '_' + Math.random().toString(36).substr(2, 9);
// //   },
// //   getDate() {
// //     return Date.now();
// //   },
// // };

// // console.log(
// //   phonebook.add({
// //     name: 'Mango',
// //     email: 'mango@mail.com',
// //     list: 'friends',
// //   }),
// // );
// // console.log(
// //   phonebook.add({
// //     name: 'Poly',
// //     email: 'poly@hotmail.com',
// //   }),
// // );

// // Example 3 - Калькулятор
// // Створіть об'єкт calculator з трьома методами:

// // read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// // add() - повертає суму збережених значень.
// // mult() - перемножує збережені значення та повертає результат.
// // const calculator = {
// //     read(a, b){
// //         this.a = a;
// //         this.b = b;
// //     },
// //     add(){
// //         return this.a+this.b
// //     },
// //     mult(){
// //         return this.a * this.b;
// //     }
// // };

// // calculator.read(11, 2);
// // console.log(calculator.add())
// // console.log(calculator)
// // console.log(calculator.mult())

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // const objA ={
// //     name: 'object A',
// //     sayHello(){
// //         console.log(this.name)
// //     }
// // }
// // const objB = Object.create(objA);
// // console.log(objB)

// // objB.sayHello()

// // class User {
// //   static counter = 0;
// //   static addUser() {
// //     // User.counter += 1;
// //     this.counter += 1;
// //   }
// //   static getCounter() {
// //     console.log(this.counter);
// //   }

// //   #password;
// //   constructor(userName, age, email = "None", password) {
// //     this.name = userName;
// //     this.age = age;
// //     this.email = email;
// //     this.#password = password;
// //     User.addUser();
// //   }
// //   changeName(newName) {
// //     return this.name;
// //   }

// //   ///приватні методи(всередині обєкта,не потрібно оголошувати)
// //   #getPasswordLength() {
// //     console.log("in private method");
// //     return this.#password.length;
// //   }

// //   get userAge() {
// //     console.log(this.age);
// //   }
// //   set userAge(newAge) {
// //     console.log("in seter age");
// //     this.age = newAge;
// //   }

// //   get password() {
// //     console.log("get", this.#password);
// //   }
// //   set password(newPassword) {
// //     if (this.#getPasswordLength() > 7) {
// //       this.#password = newPassword;
// //     } else {
// //       console.log("Введіть більше 7 символів");
// //     }
// //   }
// // }
// // const instance = new User('User A', 18, 'test@gmail.com','qwerty');
// // const instance2 = new User('User B', 20);
// // const instance3 = new User('User C', 24);
// // const instance4 = new User('User D', 30);
// // User.getCounter();

// // instance.password;
// // instance.password = '123sssssssssssss'
// // instance.userAge;
// // instance.userAge = 20;
// //
// //!!!!!!!!!!!!!!!!!!!!!!!///////////////////////////////
// // СТАТИЧНИЙ І ПРИВАТНИЙ МЕТОД
// // СТАТИЧНИЙ ДЛЯ РОБОТИ З КЛАСОМ,З ЮЗЕРОМ
// // ПРИВАТНИЙ ПРАЦЮЄ З ЕКЗЕМПЛЯРОМ КЛАСУ І ТІЛЬКИ ВСЕРЕДИНІ КЛАСУ З ІНСТАНСОМ ПРАЦЮ

// // class Human extends User {
// //   constructor({damage, ...args}) {
// //     super(args);
// //     this.damage = damage;
// //   }
// //   attack() {
// //     console.log(`attack with damage ${this.damage}`);
// //   }
// // }

// // class Orck extends User {
// //   constructor({mana, ...args}) {
// //     super(args);
// //     this.mana = mana;
// //   }
// //   spell() {
// //     console.log(`Spel AVADAKEDAVRA ${this.mana}`);
// //   }
// // }

// // // const instance = new Human({
// // //   name: "User A",
// // //   age: 18,
// // //   email: "test@gmail.com",
// // //   password: "qwerty",
// // //   damage: 700,
// // // });
// // const instance2 = new Orck({
// //   name: "User B",
// //   age: 25,
// //   email: "test@gmail.com",
// //   password: "qwerty",
// //   mana: 400,
// // });

// // class Warrior extends Human{
// //     constructor({hp,...args}){
// //         super(args)
// //         this.hp = hp;
// //     }
// // }

// // const instance = new Warrior({
// //     name: "User A",
// //     age: 18,
// //     email: "test@gmail.com",
// //     password: "qwerty",
// //     damage: 700,
// //     hp: 1200
// //   });
// // console.log(instance);
// // // console.log(instance2);

// // instance.attack();
// // instance2.spell();

// ////////////////////////////////////////////////////////////////////////////////////////////////
// //1
// // Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// // email - пошта, рядок
// // age - вік, число
// // numberOfPosts - кількість постів, число
// // topics - масив тем на яких спеціалізується блогер
// // Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// // Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// // Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
// // class Blogger{
// //     constructor({email, age, numberOfPosts, topics}){
// //         this.email = email;
// //         this.age = age;
// //         this.numberOfPosts = numberOfPosts;
// //         this.topics = topics;
// //     }
// //     getInfo(){
// //         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`
// //     }
// //     updatePostCount(value){
// //         this.numberOfPosts += value;
// //     }
// // }

// // const mango = new Blogger({
// //     email: 'mango@mail.com',
// //     age: 24,
// //     numberOfPosts: 20,
// //     topics: ['tech', 'cooking'],
// // });
// // console.log(mango);
// // console.log(mango.getInfo()); //User mango@mail.com is 24 years old and has 20 posts
// // mango.updatePostCount(5);
// // console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// // const poly = new Blogger({
// //     email: 'poly@mail.com',
// //     age: 19,
// //     numberOfPosts: 17,
// //     topics: ['sports', 'gaming', 'health'],
// // });
// // console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// // poly.updatePostCount(4);
// // console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// ///2
// // Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// // Додай методи класу:
// // getItems() - повертає масив товарів.
// // addItem(item) - отримує новий товар і додає його до поточних.
// // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// // class Storage{
// //     constructor(items){
// //         this.items = items;
// //     }

// //     getItems(){
// //         return this.items;
// //     }
// //     addItem(item){
// //         if(!this.items.includes(item)){
// //             this.items.push(item)
// //         }
// //     }
// //     removeItem(item){
// //         // const idx = this.items.indexOf(item);
// //         // if(!!~idx){
// //         //     this.items.splice(idx,1);
// //         // }

// //         this.items = this.items.filter(value => value !== item)
// //     }
// // }
// // const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// // const items = storage.getItems();
// // console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// // storage.addItem('🍌');
// // console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// // storage.removeItem('🍋');
// // console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// // Example 3 - User
// // Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// // class User{
// //     #login;
// //     #email;
// //     constructor({login, email}){
// //         this.#email = email;
// //         this.#login = login;
// //     }

// //     get email(){
// //         return this.#email
// //     }

// //     set email(newEmail){
// //         this.#email = newEmail;
// //     }

// //     get login(){
// //         return this.#login;
// //     }

// //     set login(newLogin){
// //         this.#login = newLogin;
// //     }
// // }

// // const mango = new User({
// //   login: "Mango",
// //   email: "mango@dog.woof",
// // });

// // console.log(mango.login); // Mango
// // mango.login = "Mangodoge";
// // console.log(mango.login); // Mangodoge

// // const poly = new User({
// //   login: "Poly",
// //   email: "poly@mail.com",
// // });

// // console.log(poly.login); // Poly
// // poly.login = "Polycutie";
// // console.log(poly.login); // Polycutie


// // Example 4 - Нотатки
// // Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// // {
// //   LOW: 'low',
// //   NORMAL: 'normal',
// //   HIGH: 'high'
// // }
// // Додай методи addNote(note), removeNote(text) та 
// //updatePriority(text, newPriority).

// class Notes{
//     static Prioruty={
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     }
//     constructor(item){
//         this.items = item;
//     }

//     addNote(item){
//         const inArray = this.items.some(({text}) => text === item.text)
//         if(!inArray){
//             this.items.push(item)
//         }
//     }
//     removeNote(tepx){
// this.items = this.items.filter(({text: noteText}) => noteText !== text)
// }
// }
// const myNotes = new Notes([]);

// console.log(myNotes.items);

// myNotes.addNote({
//     text: 'Моя перша замітка',
//     priority: Notes.Priority.LOW
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes);