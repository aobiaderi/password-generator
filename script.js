// Create User input variables: 
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmUpperCase;
var confirmLowerCase;
var userChoices;

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Requesting user input
  confirmLength = parseInt(prompt("How many characters do you want your password to have? Choose between 10 and 64"));

  // Checks user entry and throws an alert if input given is not numeric
  // while (!confirmLength) {
  //     alert("This needs a value");
  //     var confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
  // }   
  
  // Loop if answer is outside the parameters 
  while (confirmLength < 10 || confirmLength > 64 || !confirmLength) {
      alert("Password length must be between 10 and 64 characters. Try again");
      var confirmLength = parseInt(prompt("How many characters do you want your password to have? Choose between 10 and 64"));
    } 

  // Inform user how many characters the password will contain  
    alert(`Your password will have ${confirmLength} characters`);
  
  
  // Continues once user input is within the specified range
      confirmNumber = confirm("Will this include numbers?");
      confirmCharacter = confirm("Will this include special characters?");
      confirmUpperCase = confirm("Will this include Uppercase letters?");
      confirmLowerCase = confirm("Will this include Lowercase letters?");

  // Loop if user choice is outside the parameters 
        
    if (!confirmCharacter && !confirmNumber && !confirmUpperCase && !confirmLowerCase) {
      userChoices = alert("You must choose a criteria!");}

  // If 4 positive options are selected by user

    else if (confirmCharacter && confirmNumber && confirmUpperCase && confirmLowerCase) {

      userChoices = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  }
  // If 3 positive options are selected by user
  else if (confirmCharacter && confirmNumber && confirmUpperCase) {
      userChoices = specialCharacters.concat(numericCharacters, upperCasedCharacters);
  }
  else if (confirmCharacter && confirmNumber && confirmLowerCase) {
      userChoices = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
  }
  else if (confirmCharacter && confirmLowerCase && confirmUpperCase) {
      userChoices = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmNumber && confirmLowerCase && confirmUpperCase) {
      userChoices = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  // If 2 positive options are selected by user
  else if (confirmCharacter && confirmNumber) {
      userChoices = specialCharacters.concat(numericCharacters);

  } else if (confirmCharacter && confirmLowerCase) {
      userChoices = specialCharacters.concat(lowerCasedCharacters);

  } else if (confirmCharacter && confirmUpperCase) {
      userChoices = specialCharacters.concat(upperCasedCharacters);
  }
    else if (confirmLowerCase && confirmNumber) {
      userChoices = lowerCasedCharacters.concat(numericCharacters);

  } else if (confirmLowerCase && confirmUpperCase) {
      userChoices = lowerCasedCharacters.concat(upperCasedCharacters);

  } else if (confirmNumber && confirmUpperCase) {
      userChoices = numericCharacters.concat(upperCasedCharacters);
  }
  // If 1 positive option is selected by user
  else if (confirmCharacter) {
      userChoices = specialCharacters;
  }
  else if (confirmNumber) {
      userChoices = numericCharacters;
  }
  else if (confirmLowerCase) {
      userChoices = lowerCasedCharacters;
  }
  else if (confirmUpperCase) {
      userChoices = upperCasedCharacters;
  }

  };


getPasswordOptions();
// Function for getting a random element from an array
function getRandom(arr) {
  
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);