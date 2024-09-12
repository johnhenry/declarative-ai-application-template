let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

function updateDisplay() {
  timerDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        clearInterval(timer);
        isRunning = false;
        alert("Timer finished!");
      }
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    hours = parseInt(hoursInput.value) || 0;
    minutes = parseInt(minutesInput.value) || 0;
    seconds = parseInt(secondsInput.value) || 0;
    updateDisplay();
    startTimer();
  }
});

pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
