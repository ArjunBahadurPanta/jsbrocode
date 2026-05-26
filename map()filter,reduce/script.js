/*
.map() = accepts a callback and applies that function to each element of an array, then return a new array

*/


/*

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

function square(element) {
  return Math.pow(element, 2);
}

console.log(squares);


const cubes = numbers.map(cube);

function cube(element) {
  return Math.pow(element, 3);
}

console.log(cubes);

*/

/*
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const studentsUpperCase = students.map(upperCase);
console.log(studentsUpperCase);

const studentsLowerCase = students.map(lowerCase);
console.log(studentsLowerCase);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}
*/

/*
const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];

// console.log(dates);


const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  // console.log(parts)
  return `${parts[1]}/${parts[2]}/${parts[0]}`
}

*/

//----------------------------------------------//


/* .filter() = creates a new array by filtering out elements
.filter() is an array method in JavaScript that creates a new array containing only the items that pass a condition.
*/

/*
let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}
*/

/*

const ages = [16, 17, 18, 18, 19, 20, 60];

const adults = ages.filter(isAdult);
console.log(adults)

function isAdult(element) {
  return element >= 18;
}

const children = ages.filter(isChild);
console.log(children)

function isChild(element) {
  return element < 18;
}
*/

/**
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);
console.log(shortWords);
function getShortWords(element) {
  return element.length <= 6;
}

const longWords = words.filter(getLongWords);
console.log(longWords);
function getLongWords(element) {
  return element.length > 6;
}
*/



//-------------------------------------------//

/*
.reduce() takes an array and reduces it down to a single value by running a function on each element.
*/

/*
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);
console.log(`$${total}`);

function sum(accumullator, element) {
  return accumullator + element;
}

*/

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(maxGrade);
console.log(maximum);

function maxGrade(accumulator, element) {
  return Math.max(accumulator, element);
  // return accumulator > element ? accumulator : element;
}

const minimum = grades.reduce(minGrade);
console.log(minimum);

function minGrade(accumulator, element) {
  return Math.min(accumulator, element);
  // return accumulator < element ? accumulator : element;
}
