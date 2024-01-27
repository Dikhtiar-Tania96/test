// const title = document.querySelector('h1')//тег//id - #
// const title = document.querySelector('.js-title')//class - .
// console.dir(title)

//є 2 види html тегів(текстові та комунікаційні)
//у текстових тегах головне textContent
//у комунікаційних value
const title = document.querySelector('.js-title')
// const input = document.querySelector('.js-input')
title.textContent = 'I love js';
// title.classList.add('title');
// title.classList.remove('title')
title.classList.toggle('title')  


console.dir(title)
// input.value = 'lalala'
// console.dir(input);






