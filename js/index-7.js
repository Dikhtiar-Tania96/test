// const container = document.querySelector('.js-container');

// типу неправильно записано[...container.children].forEach(item => item.addEventListener('click', onClick));
// container.addEventListener('click', onClick)
// function onClick(evt){
//     // console.log(evt.currentTarget);
//     // console.log(evt.target)
//     // console.log(evt.currentTarget.dataset.color)

//     if(evt.target.classList.contains('js-box')){
//         // console.log(evt.target);
//         console.log(evt.target.dataset.color)

//     }
// }

// const cars = [
//   {
//     id: 1,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 3,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 5,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// // {
// //     id: 5,
// //     car: "Volvo",
// //     type: "XC60",
// //     price: 7000,
// //     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
// //   },

// const list = document.querySelector(".js-list");
// (function () {
//   const markup = cars.map(
//     ({ img, car, id }) =>
//       ` <li data-car-id="${id}" class ='js-card'>
//         <img src="${img}" alt="${car}" width = '300'class="js-target">
//         <h2>${car}</h2>
//         </li>`
//   );
//   list.insertAdjacentHTML("beforeend", markup.join(""));
// })();

// list.addEventListener("click", onClick);
// function onClick(evt) {
//   if (!evt.target.classList.contains("js-target")) {
//     return;
//   }

//   const currentCar = evt.target.closest(".js-card");
//   const carId = Number(currentCar.dataset.carId);
//   console.log(carId);
//   const data = cars.find(({ id }) => id === carId);
//   console.log(data);

//   const instance = basicLightbox.create(`
//     <div class = 'bg'>
//       <img src="${data.img}" alt="${data.car}">
//       <h2>${data.car}</h2>
//       <h3>${data.type}</h3>
//       <p>${data.price}</p>
//     </div>
// `);
//   instance.show();
// }

// const content = document.querySelector('.js-content');

// const wins = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
//   ];

// let player = 'X';

// const historyX = [];
// const historyY = [];

// function createMarkup(){
//   let markup = '';

//   for(let i = 1; i <= 9; i +=1){
//     markup += `<div class='item js-target' data-id = "${i}"></div>`
//   }

//   content.innerHTML = markup;
// }
// createMarkup()

// content.addEventListener('click', onClick);

// function onClick(evt){
//   const {target} = evt;
//   if(!target.classList.contains('js-target') || target.textContent){
//     return;
//   }

//   const {id} = target.dataset;

//   if(player === "X"){
//     historyX.push(Number(id))
//     console.log(inWinner(historyX));
//     console.log('historyX', historyX)
//   }else{
//     historyY.push(Number(id))
//     console.log('historyY', historyY)
//   }
//   // console.log(id)
//   target.textContent = player;
//   player = player === 'X' ? "O" : "X";
//   // console.log(evt.target)
// }

// // some  every  includes
// function inWinner(arr){
//   return wins.some(item => item.every(num => arr.includes(num)))
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////

// const input = document.querySelector(".js-input");
// input.addEventListener("input", _.debounce(onSearch, 800,
//   {trailing :true,//true
//   leading:false}))//false;

// input.addEventListener("input", _.throttle(onSearch, 10000,{
//   trailing :true,//true
//   leading: true//true
// }));

// const data = [
//   { name: "Samsung", price: 7200 },
//   { name: "Iphone", price: 50000 },
//   { name: "Xiaomi", price: 2000 },
//   { name: "Samsung", price: 10000 },
//   { name: "Iphone", price: 60000 },
//   { name: "Xiaomi", price: 8000 },
//   { name: "Samsung", price: 45000 },
//   { name: "Iphone", price: 85000 },
//   { name: "Xiaomi", price: 12000 },
// ];

// function onSearch(evt) {
//   const { value } = evt.target;
//   const result = data.filter((item) =>
//     item.name.toLowerCase().includes(value.toLowerCase())
//   );
//   console.log(result);
// }
// console.log();

////////
const cats = [
  "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
  "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
  "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
  "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
  "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
  "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
  "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
  "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
  "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
  "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
  "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
  "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
];

const list = document.querySelector(".js-list");

const markup = cats.map(
  (
    link
  ) => `<li><img loading="lazy" src="${link}" alt="cat" width = "400" <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laudantium magni, nostrum esse voluptatum quaerat blanditiis libero quis id rerum. Quaerat suscipit voluptatibus recusandae expedita ipsa reiciendis ipsum perferendis ea.
    </p>></li>`
);
list.insertAdjacentHTML("beforeend", markup.join(""));
