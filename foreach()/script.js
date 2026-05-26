/* 

foreach = method used to iterate over the elements of an array and apply a specified function (callback) to each element

array.foreach(callback)
element,index array are provided

*/

/*
//forEach() is an array method that runs a function once for every element in the array.

//Basic example:

let numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
});
Output:

1
2
3
//It's essentially a cleaner way to loop through an array instead of a traditional for loop:


// These do the same thing:

// Old way
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// forEach way
numbers.forEach(function (number) {
  console.log(number);
});

//You can also use an arrow function (more common in modern JS):

numbers.forEach((number) => {
  console.log(number);
});
//One important thing — forEach always returns undefined, so you can't use it to build a new array. If you need to transform an array into a new one, you'd use map() instead.

*/



// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(display);

// function display(element) {
//   console.log(element);

// }


// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function display(element) {
//   console.log(element);
// }


let fruits = ["Apple", "Orange", "Banana", "Coconut"];

fruits.forEach(lowerCase);
fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function display(element) {
  console.log(element);
}