let countdown;

const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

const buttons = document.querySelectorAll("[data-time]");
var audio = new Audio("alert.mp3");

function timer(seconds) {
  //clear any other existing timers.
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    //check if we should stop it!
    if (secondsLeft === 0) {
      audio.play();
    }
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);

  const hour = end.getHours();
  const minutes = end.getMinutes();

  endTime.textContent = `Be Back At ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  //use `hour > 12 ? hour - 12 : hour`
  //to get 3:00 instead of 15:00, for example
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
