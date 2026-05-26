//
function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbol) {

  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&";

  let allowedChars = ""
  let password = "";

  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbol ? symbolChars : "";

  if (passwordLength <= 0) {
    return `(Password length must be atleast 1)`
  }

  if (allowedChars.length === 0) {
    return `(At least 1 set of character needs to be selected.)`
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex]

  }

  return password;

}

const passwordLength = 15;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbol = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbol);

console.log(`generated password: ${password}`);