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


const list = document.querySelector('.js-list');
// console.dir(list.childNodes[0].textContent = 'lalala')
// console.dir(list.children);
// console.log([...list.children]);
// [...list.children].forEach(item => console.log(item))
// Array.from(list.children);

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

//createElement
// const li = document.createElement('li');
// const li2 = document.createElement('li')
// li.textContent = list.children.length + 1; 
// li.classList.add('item') //додали клас до елемента
// li2.textContent = list.children.length + 2;
// li2.classList.add('item')

//якщо ми додаємо html елемент ми можемо використовувати 3 можливості:
//append можемо додати багато елементів
//appendChild можемо додати лише один елемент
//prepend (поміщає елемент на початок списку)
// list.append(li, li2)
// console.log(li)


//приклад шаблонних рядків
const markup = `<li class = 'item'>${list.children.length + 1}</li>
<li class = 'item'>${list.children.length + 2}</li>`

//якщо потрібно перемістити у файл HTML розмітку використовуємо insertAdjacentHTML
list.insertAdjacentHTML('beforeend', markup)



