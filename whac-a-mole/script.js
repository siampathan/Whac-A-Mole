const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time");
const score = document.querySelector("#score");
let result = 0;
let hitPosition;
let currentTime = 10;
let timeId = null;

function randomSqure() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function randomMole() {
  timeId = setInterval(randomSqure, 500);
}

randomMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTime);
    clearInterval(timeId);
    alert("Game over! your final Score is " + result);
  }
}

let countDownTime = setInterval(countDown, 1000);
