// IF Statements
// If a condition is true, execute some code and if not, do something else



// let age = 13;

// if (age >= 18) {
//   console.log("You'r old enough to enter this site.")
// }

// else {
//   console.log("You'r not old enough to enter this site.")
// }



// let time = 14;

// if (time < 12) {
//   console.log("Good Morning!");
// }
// else {
//   console.log("Good Afternon!")
// }


// let isStudent = false;

// if (isStudent) {
//   console.log("You're a student.")
// }
// else {
//   console.log("You're not a student");
// }



// let age = 25;
// let hasLicense = true;

// if (age >= 16) {
//   console.log("You're old enough to drive.")
//   if (hasLicense) {
//     console.log("You have your license to drive.")
//   }
//   else {
//     console.log("You do not have your license to drive.")
//   }
// }
// else {
//   console.log("You must be 16+ to have a license.")
// }



// let age = 28;

// if (age >= 100) {
//   console.log("You are too old to enter this site.")
// } else if (age >= 18) {
//   console.log("You are old enough to enter this site.")
// }
// else if (age <= 0) {
//   console.log("Your age cant be zero.")
// }

// else {
//   console.log("You must be 18+ to enter this site.")
// }


//for html main code

const myText = document.getElementById("myText");

const mySubmit = document.getElementById("mySubmit");

const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function () {
  age = Number(myText.value);
  let message;

  if (age >= 100) {
    message = `You are too old to enter this site.`
  }
  else if (age >= 18) {
    message = `You are old enough to enter this site.`
  }
  else if (age == 0) {
    message = `Your age cant be zero.`
  }
  else if (age < 0) {
    message = `Your age can't be negative.`
  }

  else {
    message = `You must be 18+ to enter this site.`
  }

  resultElement.textContent = message;
}