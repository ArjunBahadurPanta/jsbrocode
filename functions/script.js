// function = a section of reuseable code.
// declare code once, use it whenever you want. Caoll then function to execute the code


// function happyBirthday() {
//   console.log("Happy Birthday to you!");
//   console.log("Happy Birthday to you!");
//   console.log("Happy Birthday to you!");
//   console.log("Happy Birthday to you!");
// }

// happyBirthday();

// function happyBirthday(username, age) {
//   console.log("Happy Birthday to you!");
//   console.log(`Happy Birthday ${username}`);
//   console.log("Happy Birthday to you!");
//   console.log("Happy Birthday to you!");
//   console.log(`You are ${age} years old.`)
// }

// happyBirthday("Arjun", 28);


// function add(x, y) {
//   let result = x + y;
//   return result;
//   // or just return x + y;
// }

// let answer = add(2, 3)
// console.log(answer)

// function subtract(x, y) {
//   return x - y;
// }
// console.log(subtract(7, 3));

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(isEven(10));



//-------Variable scope--------------

//where a variable is recognized and accessible (local vs global)

// Global variable: available anywhere in this file
// let globalCount = 0;

// function incrementGlobal() {
//   globalCount = globalCount + 1;
//   console.log("globalCount inside function:", globalCount);
// }

// incrementGlobal();
// console.log("globalCount outside function:", globalCount);

// function localScopeExample() {
//   // Local variable: only available inside this function
//   let localCount = 5;
//   console.log("localCount inside function:", localCount);
// }

// localScopeExample();
// console.log(localCount); // Uncaught ReferenceError: localCount is not defined


