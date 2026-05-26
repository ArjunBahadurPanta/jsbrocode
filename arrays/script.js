// Arrays = a variable like structure that can hold more than 1 value

// let fruits = ["apple", "orange", "banana"];

// console.log(fruits);

// console.log(fruits[0])
// console.log(fruits[2])


// the easiest way to add a new element to an array is the push() method

// fruits.push("coconut");

// console.log(fruits);


// to remove the last element from a array use pop()

// fruits.pop()
// console.log(fruits)

// shift() method removes the first array elements

// unshift() method adds a new elemnt to an array at the begining

// to get a length of an array use .length property

// the indexOf() method searches an array for an element value and returns its position
// console.log(fruits.indexOf("banana"))

// .sort() to sort element in alphabetical order

//.sort().reverse() to sort them in descending order




//---------spread operator-------------
//  ...
//allows an iterable such as an array or string to be expanded into seperate elements (unpack the elements)

// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers)

// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(maximum);
// console.log(minimum);

// let username = "Arjun Panta";

// let letters = [...username];
// console.log(letters);

// letters = [...username].join("-");
// console.log(letters);

// let fruits = ["apple", "mango", "banana",];
// let vegetables = ["carrots", "potatoes"]

// let foods = [...fruits, ...vegetables, "eggs", "milk"]

// console.log(foods)


//--------rest parameters-----------
// (...rest) allow a function work with a variable of arguments by bundling them into an array
// spread=expands an array into seperate elements
// rest = bundles seperate el;emrnts into an array

// function openFridge(...foods) {
//   console.log(foods);
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5)

