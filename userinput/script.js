// How to accept user input

// 1. Easy way= window prompt
// 2. professional way = HTML textbox

// let username;
// username = window.prompt("What's your username?")
// console.log(username)

// let username;

// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`
// }



//Type Conversion


//Change the data type of  a value to another (strings,numbers,booleans)

// let age = window.prompt("How old are yoy?");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);


// let x = "pizza"
// let y = "pizza"
// let z = "pizza"

// x = Number(x);
// y = String(y);
// z = Boolean(z)

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// Constants

// const PI = 3.14159;
// let radius;
// let circumference;

// // radius = window.prompt("Enter the radius of the circle:");
// // radius = Number(radius);
// // console.log(circumference)

// document.getElementById("mySubmit2").onclick = function () {
//   radius = document.getElementById("myText2").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;

//   document.getElementById("myH3").textContent = `The circumference is ${circumference}`

//   // document.querySelector("h3").textContent = `The circumference is ${circumference}`
// }