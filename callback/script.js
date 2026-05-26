// Callback = a function that is passed as an argument to another function.

// used to handle asynchronous operations:
// 1. reading a file
// 2. network requests
// 3. Interacting with databases
//"hey, when you're done, call this next."

// hello(goodbye);


// function hello(callback) {
//   console.log("Hello");
//   callback();
// }

// function goodbye() {
//   console.log("goodbye");
// }

// function leave() {
//   console.log("leave🤬");
// }

// // sum(displayResult, 2, 3)
// sum(displayPage, 2, 3)

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayResult(result) {
//   console.log(result);
// }

// function displayPage(result) {
//   document.getElementById("myH1").textContent = result;
// }


