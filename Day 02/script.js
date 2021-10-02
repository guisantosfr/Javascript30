const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const timeDisplay = document.querySelector('.time');

// Degrees each hand moves in a second (1000ms)
const SEC_DEG_IN_SEC = 360 / 60;
const MIN_DEG_IN_SEC = SEC_DEG_IN_SEC / 60;
const HR_DEG_IN_SEC = MIN_DEG_IN_SEC / 12;

// Get starting states
let now = new Date();
timeDisplay.textContent = now.toLocaleString(undefined, {
hour: '2-digit',
minute: '2-digit',
second: '2-digit'
});
let secondsDegrees = (now.getSeconds() / 60) * 360 + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
let minutesDegrees = (now.getMinutes() / 60) * 360 + 90;
minHand.style.transform = `rotate(${minutesDegrees}deg)`;
let hoursDegrees = (now.getHours() / 12) * 360 + 90 + (now.getMinutes() / 2);
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

function setDate(){
now = new Date();
// undefined = uses default locale
timeDisplay.textContent = now.toLocaleString(undefined, {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

// const seconds = now.getSeconds();
// const secondsDegrees = (seconds / 60) * 360 + 90;
secondsDegrees += SEC_DEG_IN_SEC;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
// console.log('seconds', seconds);

// const mins = now.getMinutes();
// const minutesDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
minutesDegrees += MIN_DEG_IN_SEC;
minHand.style.transform = `rotate(${minutesDegrees}deg)`;
// console.log('mins', mins);

// const hour = now.getHours();
// const hoursDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
hoursDegrees += HR_DEG_IN_SEC;
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
// console.log('hour', hour);
}

// Update the time and hand degrees
// (Keep adding the degrees so it doesn't jump from 360 to 90 degrees at
// 0 sec and cause an awkward animation)
setInterval(setDate, 1000);