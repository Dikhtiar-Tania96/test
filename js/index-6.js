// const title = document.querySelector('h1')//тег//id - #
// const title = document.querySelector('.js-title')//class - .
// console.dir(title)

//є 2 види html тегів(текстові та комунікаційні)
//у текстових тегах головне textContent
//у комунікаційних value
// const title = document.querySelector('.js-title')
// const input = document.querySelector('.js-input')
// title.textContent = 'I love js';
// title.classList.add('title');
// title.classList.remove('title')
// title.classList.toggle('title')  
// title.classList.toggle('title')  

// console.dir(title)
// input.value = 'lalala'
// console.dir(input);

//ІНЛАЙНОВІ СТИЛІ
// title.style.color='green';
// title.style.fontSize='50px';


// const list = document.querySelector('.js-list');
// console.dir(list.childNodes[0].textContent = 'lalala')
// console.dir(list.children);
// console.log([...list.children]);
// [...list.children].forEach(item => console.log(item))
// Array.from(list.children);

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

//createElement!!!!!!!!!!!!!!!!
// const li = document.createElement('li');
// li.textContent = list.children.length + 1; 
// li.classList.add('item') //додали клас до елемента
// const li2 = document.createElement('li')
// li2.textContent = list.children.length + 2;
// li2.classList.add('item')

//ПРИКЛАД З ДОДАВАННЯМ ПАРАГРАФА!!!!!!!!!!!!!!!
// const li = document.createElement('li');
// const p = document.createElement('p');
// li.append(p)
// p.textContent = list.children.length + 1; 
// p.classList.add('item') //додали клас до елемента

//якщо ми додаємо html елемент ми можемо використовувати 3 можливості:!!!!!!!!!!!!!!!!!
//append можемо додати багато елементів
//appendChild можемо додати лише один елемент
//prepend (поміщає елемент на початок списку)
// list.append(li)
// console.log(li)


//приклад шаблонних рядків!!!!!!!!!!
// якщо потрібно перемістити в файл HTML розмітку використовуємо insertAdjacentHTML
// const markup = `<li class = 'item'><p>${list.children.length + 1}</p></li>`;
// list.insertAdjacentHTML('beforeend', markup)


////////////////////////////////////////////////////////////////////////////////////////////
// const markup = `<li class = 'item'>
// <p>${list.children.length + 1}</p></li>`;

// const markup2 = `<li class = 'item'>
// <p>${list.children.length + 2}</p></li>`;
// list.insertAdjacentHTML('beforeend', markup + markup2)
////////////////////////////////////////////////////////////////////////////////////////////////////////



//СТАТИЧНІ І ДИНАМІЧНІ МАСИВИ, ЖИВІ І НЕЖИВІ МАСИВИ
// const list = document.querySelector('.js-list');
// const itemsStatic = document.querySelectorAll('.js-item');//неживий масив,не бачить змін
// const itemsDynamic = document.getElementsByClassName('js-item');//живий масив

// const markup = `<li class = 'js-item'>${list.children.length + 1}</li>`;
// const markup2 = `<li class = 'js-item'>${list.children.length + 2}</li>`;

// list.insertAdjacentHTML('beforeend', markup + markup2)
// console.log(itemsStatic);  
// console.log(itemsDynamic);


/////////////////////////////////////////////////////////////////////////////////////////

// const cars = [
//     {
//       id:1,
//       model: "Honda",
//       type: "Civic",
//       price: 12000,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//       id:2,
//       model: "Audi",
//       type: "Q7",
//       price: 40000,
//       img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//       id:3,
//       model: "BMW",
//       type: "5 siries",
//       price: 9000,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//       id:4,
//       model: "Honda",
//       type: "Accord",
//       price: 20000,
//       img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         id:5,
//         model: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//       },
//       {
//         model: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//       },
//       {
//         model: "BMW",
//         type: "5 siries",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//       }
// ];

// {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   }

// I ВАРІАНТ
// const container = document.querySelector('.js-cars');
// cars.forEach(({img, model, price,type}) => {
// const li = document.createElement('li');
// const image = document.createElement('img');
// const h2 = document.createElement('h2');
// const h3 = document.createElement('h3');
// const p = document.createElement('p');

// image.src = img;
// image.alt = model;
// image.style.width = '300px';
// h2.textContent = model;
// h3.textContent = type;
// p.textContent = price;

// li.append(image, h2, h3, p)
// container.append(li)
// })
//вгорі довгий код для браузера

//тепер легший
// const markup = cars.map(({img, model, price,type}) => {
// const li = document.createElement('li');
// const image = document.createElement('img');
// const h2 = document.createElement('h2');
// const h3 = document.createElement('h3');
// const p = document.createElement('p');

// image.src = img;
// image.alt = model;
// image.style.width = '300px';
// h2.textContent = model;
// h3.textContent = type;
// p.textContent = price;

// li.append(image, h2, h3, p);
// return li
// });

// container.append(...markup);
// console.log(markup)


// II ВАРІАНТ
// const markup = cars.map(({id,img, model, price, type})=> 
// `<li data-car-id=${id}><img src="${img}" alt="${model}" class='car-image'>
// <h2>${model}</h2>
// <h3>${type}</h3>
// <p>${price}</p>
// </li>`).join('');
// console.log(markup);
// container.insertAdjacentHTML("beforeend", markup);
// container.innerHTML = markup
// insertAdjacentHTML використовуємо при шаблонному рядку!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//ДЕЛЕГУВАННЯ ПОДІЙ
// container.addEventListener('click', onClick)
// function onClick(evt){
//   // console.log(evt.target);
//   const parent = evt.target.closest('li');
//   const {carId} = parent.dataset;
//   const currentCar = cars.find(({id}) => Number(carId) === id)
//   console.log(carId)//дай айді машини
//   console.dir(currentCar)
//   // const id = parent.getAttribute('data-car-id')
// }

//КОЛИ ВИКОРИСТОВУЄМО innerHTML, insertAdjacentHTML
// innerHTML коли старе замінити на нове
// коли нам потрібно очистити розмітку
// container.innerHTML = '';


// insertAdjacentHTML коли до старого потрібно додати нове


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ПОДІЇ
// const inputEl = document.querySelector('.js-input');
// inputEl.addEventListener('input', onInput)//показує кожне натискання
// // inputEl.addEventListener('change', onInput)//показує надпис коли інпут втрачає фокус
// inputEl.addEventListener('change', onChange)

// function onInput(evt){
//   // console.log(evt)
//   console.log(evt.currentTarget.value)//що саме друкує користувач
// }

// function onChange(evt){
//   alert('Напишіть ще щось')
// }


//ФОРМА
//SUBMIT
// const form = document.querySelector('.js-form');
// form.addEventListener('submit', onSubmit)

// function onSubmit(evt){
//   evt.preventDefault()
//   // !!!!!!!!!!!!preventDefault застосовується лише з івентом(evt)
//   const {userName, userEmail} = evt.currentTarget.elements;
//   console.log(userName.value);
//   console.log(userEmail.value);

//   //ЯК ВІДПРАВИТИ ДАНІ КОРИСТУВАЧА
//   const data = {
//     name : userName.value,
//     email : userEmail.value
//   }
//   console.log(data)
// }



//ЯК З ДОПОМОГОЮ CLICK МИ МОЖЕМО НА ЩОСЬ ВПЛИВАТИ
// const button = document.querySelector('.js-click');
// const box = document.querySelector('.js-box');
// let step = 0;

// button.addEventListener('click', onClick)

// function onClick(){
//   step += 50;
//   box.style.marginTop = step + 'px';
//   box.style.marginLeft = `${step}px`
//  }

///////////////////////////
//ФУНКЦІОНАЛ З ТЕКСТОМ(ВІДКРИТИ БІЛЬШЕ СЛІВ У РЕЧЕННІ)
// const titleAnimal = document.querySelector('.js-title-animal');
// const list = document.querySelector('.js-list');
// const maxLength = 7;
// const totalLength = maxLength + 3;
// const pointLength = 3;



// function formatString(title){
//         const result = title.textContent.slice(0, maxLength);
//         const data = title.textContent.slice(maxLength);
//         title.setAttribute('data-value', data);
//         title.textContent = result + '...'; 
//         title.addEventListener('click', onClick)
//     };

// [...list.children].forEach(formatString);


// function onClick(evt){
//     const element = evt.currentTarget;
// if(element.textContent.length <= totalLength){
//     const {value} = element.dataset;
//     element.textContent = element.textContent.slice(0, maxLength) + value;
// } else {
//     formatString(element)
// }};

/////////////////////////////////////////////////////////////////////////////////
//ПОДІЯ З КЛАВІАТУРОЮ.
// const box = document.querySelector('.js-box');
// const button = document.querySelector('.js-click');
// button.addEventListener('click', onclick);

// function onClick(){
//     box.classList.remove('box-hidden'); 
//     document.addEventListener('keydown', onKey);
// };

// function onKey(evt){
//     // console.log(evt.code);
//     if(evt.code === 'Escape'){
//         box.classList.add('box-hidden');
//         document.removeEventListener('keydown', onKey)
//     };
// }
///////КОД НЕ ПРАЦЮЄ!!!!!

//////////////////////////////////////////////////////////////////////////////////////

//при роботі з клавішами копіювання(копіпаст)заблокувати копіювання
// document.addEventListener('keydown', onKey);

// function onKey(evt){
//     // console.log(evt);
//     if(evt.ctrlKey && evt.code === 'KeyC'){
//         console.log('copy past');
//         evt.preventDefault()
//     }
// }

///////////////////////////////
//evt форми найскладніше

const cars = [
    {
      id:1,
      model: "Honda",
      type: "Civic",
      price: 12000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
      id:2,
      model: "Audi",
      type: "Q7",
      price: 40000,
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
      id:3,
      model: "BMW",
      type: "5 siries",
      price: 9000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
      id:4,
      model: "Honda",
      type: "Accord",
      price: 20000,
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        id:5,
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
      },
      {
        model: "Audi",
        type: "Q5",
        price: 70000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
      },
      {
        model: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
      }
];

// {
//     id:1,
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
const list = document.querySelector('.ul-list');
const form = document.querySelector('.js-search-form');
form.addEventListener('submit', onSearch);

function createMarkup(arr){
    const markup = arr.map(({id, model, type, price, img})=>
    `<li data-id="${id}">
    <img src="${img}" alt="${model}" width = '400' />
    <h2>${model}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
  </li>`).join('');
  return markup
}
list.insertAdjacentHTML('beforeend', createMarkup(cars))

function onSearch(evt){
    evt.preventDefault()//блокує відправку форми
    const { query, type } = evt.currentTarget.elements;

    const result = cars.filter(item => item[type.value] === item[query.value])

    // console.log(query);
    // console.log(type);
    console.log(result)
}

