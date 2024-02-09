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
