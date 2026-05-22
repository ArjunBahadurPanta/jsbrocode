// .checked = property that determines the checked stste of an HTML checkbox or radio button element

/*
const myCheckBox = document.getElementById("myCheckBox");

const visaBtn = document.getElementById("visaBtn");

const masterCardBtn = document.getElementById("masterCardBtn");

const pappalBtn = document.getElementById("pappalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");

const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed.`;
  }
  else {
    subResult.textContent = `You are not subscribed.`
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with visa.`
  }
  else if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with mastercard.`
  }
  else if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with paypal.`
  }
  else {
    paymentResult.textContent = `You need to choose a payment option.`
  }
}
*/

// ternary operator = a shortcut to if{} and else{} ststements, helps to assign a variable based on a condition
//condition? codeiftrue:codeiffalse;

// let age = 31;

// let message = age >= 18 ? `You are an adult` : `You are a minor`;
// console.log(message)

// let time = 21;

// let greeting = time < 12 ? `Good Morning!` : time > 20 ? `Good Night!` : `Good Afternoon`;
// console.log(greeting)



//switches = can be an efficient replacement to many else if statements

let day = 67;

switch (day) {
  case 1:
    console.log("It is Monday.");
    break;
  case 2:
    console.log("It is Tuesday.");
    break;
  case 3:
    console.log("It is Wednesday.");
    break;
  case 4:
    console.log("It is Thursday.");
    break;
  case 5:
    console.log("It is Friday.");
    break;
  case 6:
    console.log("It is Saturday.");
    break;
  case 7:
    console.log("It is Sunday.");
    break;
  default:
    console.log(`${day} is not a valid day.`);
}