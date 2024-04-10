// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });


// const date = new Date();
// console.log(date);
// console.log(new Date(1500))
// console.log(date.getTime())

// const date = new Date(2030, 3, 16, 14, 25, 0, 0);
// console.log(date);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (guestName === "" || guestName === undefined) {
//     return onError("Guest name must not be empty");
//   }
//   onSuccess(`Welcome ${guestName}`);
// };

// makeGreeting(
//   "Tania",
//   greeting => console.log(greeting),
//   error => console.error(error)
// );

// const id = setTimeout((a,b,c)=>{
//   console.log(a,b,c);
// }, 2000,5,10,15);


// const id2 = setInterval((a,b,c)=>{
//   console.log(a,b,c);
//   clearInterval(id2)
// }, 2000,7,9,11);

// console.log('setTimeout', id);
// console.log('setInterval', id2)

//reklama
// const box = document.querySelector('.js-box');
// const timer = document.querySelector('.js-timer');

// setTimeout(()=>{
//   box.style.display='block';

//   let counter=10;
  
//   const id = setInterval(()=>{
//     counter-=1;
//     timer.textContent=counter;
//     if(!counter){
//       clearInterval(id)
//       timer.textContent = 'x';
//       timer.addEventListener('click', ()=>{
//         timer.style.cursor='pointer';
//         box.style.display = 'none';
//       })
//     }
//   },1000);
// }, 5000);



// const currentTime = new Date();
// const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

// const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];

// console.log(currentTime)
// console.log(namesOfMonth[currentTime.getMonth()]);
// console.log(arrDay[currentTime.getDay()]);
// console.log(currentTime.getFullYear())//який зараз рік


// console.log(currentTime.setFullYear(2025)-Date.now());
// console.log(currentTime)


//................................................/
// const year = document.querySelector('.date-year');
// const month = document.querySelector('.date-month');
// const day = document.querySelector('.date-day');
// const date = document.querySelector('.date');
// const hoursArrow = document.querySelector('.clock-hours__arrow');
// const minutesArrow = document.querySelector('.clock-minutes__arrow');
// const secondsArrow = document.querySelector('.clock-seconds__arrow');
// const digitalClock = document.querySelector('.digital-clock')

// const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
// const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
 



// setInterval(() => {
//   const currentTime = new Date();
//   const currentYear = currentTime.getFullYear();
//   const currentMonth = (namesOfMonth[currentTime.getMonth()]);
//   const currentDay = (arrDay[currentTime.getDay()]);
//   const currentDate = currentTime.getDate();
//   const hours = currentTime.getHours();
//   const minutes = currentTime.getMinutes();
//   const seconds = currentTime.getSeconds();

//   const secondDeg = 360 / 60;
//   const minuteDeg = 360 / 60;
//   const hoursDeg = 360 / 12;

//   const formatTime = `Поточний час: 
//   ${hours.toString().padStart(2,'0')}: 
//   ${minutes.toString().padStart(2,'0')}: 
//   ${seconds.toString().padStart(2,'0')}`

  // secondsArrow.style.transform = `rotate(${seconds * secondDeg}deg)`
//   minutesArrow.style.transform = `rotate(${minutes * minuteDeg}deg)`
//   hoursArrow.style.transform = `rotate(${hours * hoursDeg + hoursDeg / 60 * minutes}deg)`

  
//   year.textContent = currentYear;
//   month.textContent = currentMonth;
//   day.textContent = currentDay;
//   date.textContent = currentDate;
//   digitalClock.textContent = formatTime;
// }, 1000);


// // console.log(currentDate)
////////////////////////////////////////////////////////
