const $stoneButtonP1 = document.querySelector(".button-stone-p1");
const $paperButtonP1 = document.querySelector(".button-paper-p1");
const $scissorsButtonP1 = document.querySelector(".button-scissors-p1");

const $stoneButtonP2 = document.querySelector(".button-stone-p2");
const $paperButtonP2 = document.querySelector(".button-paper-p2");
const $scissorsButtonP2 = document.querySelector(".button-scissors-p2");

const $fieldP1 = document.querySelector(".field-p1");
const $fieldP2 = document.querySelector(".field-p2");

const $winner = document.querySelector(".winner");

let moveP1 = "";
let moveP2 = "";
let gameResult = null;

function verifyWinner() {
  if (moveP1 == "stone" && moveP2 == "paper") {
    gameResult = 2;
  } else if (moveP1 == "stone" && moveP2 == "scissors") {
    gameResult = 1;
  } else if (moveP1 == "paper" && moveP2 == "stone") {
    gameResult = 1;
  } else if (moveP1 == "paper" && moveP2 == "scissors") {
    gameResult = 2;
  } else if (moveP1 == "scissors" && moveP2 == "stone") {
    gameResult = 2;
  } else if (moveP1 == "scissors" && moveP2 == "paper") {
    gameResult = 1;
  } else if (moveP1 == moveP2) {
    gameResult = 0;
  }
}

function printResult() {
  if (gameResult == 0) {
    $winner.innerHTML = "Empatou!";
  } else if (gameResult == 1) {
    $winner.innerHTML = "Jogadora 1 ganhou!";
  } else if (gameResult == 2) {
    $winner.innerHTML = "Jogadora 2 ganhou!";
  }
}

$stoneButtonP1.addEventListener("click", function () {
  $fieldP1.innerHTML = '<img class="move-img" src="stone.png">';
  moveP1 = "stone";
  verifyWinner();
  printResult();
});

$paperButtonP1.addEventListener("click", function () {
  $fieldP1.innerHTML = '<img class="move-img" src="paper.png">';
  moveP1 = "paper";
  verifyWinner();
  printResult();
});

$scissorsButtonP1.addEventListener("click", function () {
  $fieldP1.innerHTML = '<img class="move-img" src="scissors.png">';
  moveP1 = "scissors";
  verifyWinner();
  printResult();
});

$stoneButtonP2.addEventListener("click", function () {
  $fieldP2.innerHTML = '<img class="move-img" src="stone.png">';
  moveP2 = "stone";
  verifyWinner();
  printResult();
});

$paperButtonP2.addEventListener("click", function () {
  $fieldP2.innerHTML = '<img class="move-img" src="paper.png">';
  moveP2 = "paper";
  verifyWinner();
  printResult();
});

$scissorsButtonP2.addEventListener("click", function () {
  $fieldP2.innerHTML = '<img class="move-img" src="scissors.png">';
  moveP2 = "scissors";
  verifyWinner();
  printResult();
});
