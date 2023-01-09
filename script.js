// Create User input variables: 
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmUpperCase;
var confirmLowerCase;
var userChoices = [];

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
      console.log("user chose 4 options");
  }
  
      
  // If 3 positive options are selected by user
  else if (confirmCharacter && confirmNumber && confirmUpperCase) {
      userChoices = specialCharacters.concat(numericCharacters, upperCasedCharacters);
      console.log("user chose 3a options");
  }
  else if (confirmCharacter && confirmNumber && confirmLowerCase) {
      userChoices = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
      console.log("user chose 3b options");
  }
  else if (confirmCharacter && confirmLowerCase && confirmUpperCase) {
      userChoices = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
      console.log("user chose 3c options");
  }
  else if (confirmNumber && confirmLowerCase && confirmUpperCase) {
      userChoices = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
      console.log("user chose 3d options");
  }
  // If 2 positive options are selected by user
  else if (confirmCharacter && confirmNumber) {
      userChoices = specialCharacters.concat(numericCharacters);
      console.log("user chose 2a options");

  } else if (confirmCharacter && confirmLowerCase) {
      userChoices = specialCharacters.concat(lowerCasedCharacters);
      console.log("user chose 2b options");

  } else if (confirmCharacter && confirmUpperCase) {
      userChoices = specialCharacters.concat(upperCasedCharacters);
      console.log("user chose 2c options");
  }
    else if (confirmLowerCase && confirmNumber) {
      userChoices = lowerCasedCharacters.concat(numericCharacters);
      console.log("user chose 2d options");

  } else if (confirmLowerCase && confirmUpperCase) {
      userChoices = lowerCasedCharacters.concat(upperCasedCharacters);
      console.log("user chose 2e options");

  } else if (confirmNumber && confirmUpperCase) {
      userChoices = numericCharacters.concat(upperCasedCharacters);
      console.log("user chose 2f options");
  }
  
  // If 1 positive option is selected by user
  else if (confirmCharacter) {
      userChoices = specialCharacters;
      console.log("user chose 1a options");
  }
  else if (confirmNumber) {
      userChoices = numericCharacters;
      console.log("user chose 1b options");
  }
  else if (confirmLowerCase) {
      userChoices = lowerCasedCharacters;
      console.log("user chose 1c options");
  }
  else if (confirmUpperCase) {
      userChoices = upperCasedCharacters;
      console.log("user chose 1d options");
  }
  console.log("move to next stage of the code");

  var ps = getRandom(userChoices,confirmLength);
  console.log (ps);
  UserInput(ps);
  return ps;
};
// This puts the password value into the textbox

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

};

// Function for getting a random element from an array
function getRandom(userChoices,confirmLength) {
  
  // password variable is an array placeholder for user generated amount of length
var randomPassword = [];

for (var i = 0; i < confirmLength; i++) {
  var pickChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  randomPassword.push(pickChoices);
  // console.log(pickChoices); 
  console.log(randomPassword);
  
}
return (randomPassword.join(""));
};
 
// Function to generate password with user input
// function generatePassword() {
  
//   };

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  getPasswordOptions();
  // var passwordText = document.querySelector('#password');

  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);