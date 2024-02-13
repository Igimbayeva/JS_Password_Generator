// Assignment Code

var generateBtn = document.querySelector("#generate");

// Variables sets

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "%", "+", "/", '"', "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// Function to prompt for password criteria and Validate the length

function PasswordCriteria() {
  var length = prompt("How many characters would you like your password to be (8-128 characters)?");
    if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return null;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return null;
  }

  // Return an object with the selected criteria
  return {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial,
  };
}

// Function to generate a random character from a given character set
function getRandomCharacter(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

// Function to generate password based on criteria
function generatePassword() {
  var passwordCriteria = PasswordCriteria();

  if (!passwordCriteria) {
    // User canceled or entered invalid criteria
    return "";
  }

  var password = "";
  var allCharacters = "";

  // Build the character set based on selected criteria
  if (passwordCriteria.includeLowercase) {
    allCharacters += lowercaseCharacters;
    password += getRandomCharacter(lowercaseCharacters);
  }
  if (passwordCriteria.includeUppercase) {
    allCharacters += uppercaseCharacters;
    password += getRandomCharacter(uppercaseCharacters);
  }
  if (passwordCriteria.includeNumeric) {
    allCharacters += numericCharacters;
    password += getRandomCharacter(numericCharacters);
  }
  if (passwordCriteria.includeSpecial) {
    allCharacters += specialCharacters;
    password += getRandomCharacter(specialCharacters);
  }

  // Complete the password using random characters from the selected character sets
  for (var i = password.length; i < passwordCriteria.length; i++) {
    password += getRandomCharacter(allCharacters);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
