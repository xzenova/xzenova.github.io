let coins = 1000;
let selectedColor = null;
let roundTime = 30;
let timeLeft = roundTime;
let timer;

const timeEl = document.getElementById("time");
const coinsEl = document.getElementById("coins");
const statusEl = document.getElementById("status");

function setRound(seconds) {
  clearInterval(timer);
  roundTime = seconds;
  resetRound();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

function selectColor(color) {
  selectedColor = color;
  statusEl.textContent = "Selected: " + color.toUpperCase();
}

function showResult() {
  const colors = ["red", "green", "blue"];
  const result = colors[Math.floor(Math.random() * colors.length)];

  if (selectedColor === result) {
    coins += 100;
    statusEl.textContent = `Result: ${result.toUpperCase()} — WIN +100`;
  } else {
    coins -= 50;
    statusEl.textContent = `Result: ${result.toUpperCase()} — LOSE -50`;
  }

  coinsEl.textContent = coins;

  setTimeout(resetRound, 3000);
}

function resetRound() {
  selectedColor = null;
  timeLeft = roundTime;
  timeEl.textContent = timeLeft;
  statusEl.textContent = "Choose a colour";
  startTimer();
}

startTimer();
