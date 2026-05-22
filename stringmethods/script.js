// string methods = allow you to manipulate and work with text(strings)

//.charAt()
//.indexOf()
//.lastIndexOf()
//.length
//.trim()
//toUpperCase()
//toLowerCase()
//.repeat()
//.startswith()
//.endsWith()
//.includes()
//.replaceAll()
//.padStart()
//.padEnd()



// let userName = " Arjun  Panta ";

// console.log(userName.charAt(0))

// console.log(userName.lastIndexOf("r"))

// console.log(userName)
// console.log(userName.length)


// userName2 = userName.trim()
// console.log(userName2)
// console.log(userName2.length)


// console.log(userName.toUpperCase())

// console.log(userName.toLowerCase())

// console.log(userName.repeat(3))

// console.log(userName.startsWith("b"))

// console.log(userName.endsWith("b"))

// console.log(userName.includes("j"))

// let phoneNumber = "123-456-7890"

// phoneNumber = phoneNumber.replaceAll('-', '')
// console.log(phoneNumber)

// phoneNumber = phoneNumber.padStart(15, "0")//means pad the given string with 0 until its 15 character long
// console.log(phoneNumber)

// phoneNumber = phoneNumber.padEnd(15, "0")//means pad the end of  string with 0 until its 15 character long
// console.log(phoneNumber)




//string sclicing = creating a substring from a portion of another string
// string.slice(start,end)


// const fullName = "Arjun Panta";

// let firstName = fullName.slice(0, 5)
// console.log(firstName)

// let lastName = fullName.slice(6, 11)
// console.log(lastName)

// let firstChar = fullName.slice(0, 1)
// console.log(firstChar)

// let lastChar = fullName.slice(-1)
// console.log(lastChar)

// let firstName = fullName.slice(0, fullName.indexOf(" "))

// let lastName = fullName.slice(fullName.indexOf(" ") + 1)

// console.log(firstName)
// console.log(lastName)



// Method Chaining = calling one method after another in one continuous line of code


// let username = window.prompt("Enter your username:")

// -----No Method chaining------

// username = username.trim()
// let letter = username.charAt(0)
// letter = letter.toUpperCase();

// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase()
// username = letter + extrachars
// console.log(username)


// ------Method Chaining--------

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username)