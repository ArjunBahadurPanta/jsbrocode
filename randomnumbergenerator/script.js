// Random number generator

// let num = Math.random();
// // Returns a value like 0.458231...


// let max = 10;
// let randomInt = Math.floor(Math.random() * max);
// // Possible outcomes: 0, 1, 2, ..., 9


// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // Example: getRandomInt(1, 6) for a dice roll


// const myButton = document.getElementById("myButton");

// const myLabel = document.getElementById("myLabel");

// const min = 1;
// const max = 6;
// let randomNum;

// myButton.onclick = function () {
//   randomNum = Math.floor(Math.random() * max) + min;
//   myLabel.textContent = randomNum;
// }

document.getElementById("myButton").onclick = function () {
  document.getElementById("myLabel").textContent =
    Math.floor(Math.random() * 6) + 1;
}