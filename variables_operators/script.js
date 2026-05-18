// console.log("Hello")
// console.log("I love pizza")

// window.alert("This is a alert")
// window.alert("I love Pizza")

// //This is a comment


// document.getElementById('myH1').textContent = 'Hello';

// document.getElementById('myP').textContent = 'I like Pizza';



// // Variables = A container that stores a value (behaves as if it were the value it contains)

// //1. Declaration  let  ;
// //2. Assignment   x = 100;

// let x;
// x = 123;
// console.log(x)

// //declaration and assignment can be done in the same line

// x = 123;
// console.log(x)

// let age = 28;
// let price = 10.99;
// let gpa = 3.1;

// console.log(typeof age)

// console.log(`You are ${age} years old.`)
// console.log(`The price is ${price}.`)
// console.log(`Your gpa is ${gpa}`)

// let firstName = "Arjun";
// let favoriteFood = "pizza";

// console.log(typeof firstName);
// console.log(`My name is ${firstName}.`)
// console.log(`My favorite food is ${favoriteFood}.`)

// let online = true;
// console.log(typeof online);
// console.log(`Bro is online: ${online}`)

// let forSale = true;
// console.log(`Is this car for sale? ${forSale}`)

// let Student = true;
// console.log(`Enrolled: ${Student}`)

// let fullName = "Arjun Panta"
// let myAge = 28;
// let isStudent = true;

// document.getElementById("p1").textContent = `My name is ${fullName}`;
// document.getElementById("p2").textContent = `Im ${age} years old.`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;


//Arithmetic operators = operands (value, variables, etc)
//                       operators (+ - * /)
//                       eg, 11 = x + 5;

// let students = 30;

// students = students + 1;
// same as 
//student += 1 ; 


// students = students - 1;

// console.log(students)

//precedence

// Operator precedence examples
// 1. parenthesis
// 2. exponents
// 3. multiplication, division & modulo
//4. addition and substraction


let result;

// Multiplication before addition
result = 2 + 3 * 4;
// 2 + (3*4) = 14
console.log("2 + 3 * 4 =", result);

// Parentheses change precedence
result = (2 + 3) * 4;
// (2+3) * 4 = 20
console.log("(2 + 3) * 4 =", result);

// Mixed operators: division and multiplication before addition/subtraction
result = 10 - 6 / 2 + 3 * 2;
// 10 - (6/2) + (3*2) 
// = 10 - 3 + 6 
// = 13
console.log("10 - 6 / 2 + 3 * 2 =", result);

// Exponentiation has higher precedence (ES2016+)
result = 2 + 3 ** 2; // 2 + (3**2) = 11
console.log("2 + 3 ** 2 =", result);

// Example with assignment and precedence
let a = 1;
let b = 2;
let c = 3;

result = a + b * c; // 1 + (2*3) = 7
console.log(`${a} + ${b} * ${c} =`, result);

// Use parentheses to make intent explicit
result = (a + b) * c; // (1+2) * 3 = 9
console.log(`(${a} + ${b}) * ${c} =`, result);