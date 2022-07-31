// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define arrays for letters, numbers and special characters
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","R","S","T","U","V","W","X","Y","Z"];
var nums = [0,1,2,3,4,5,6,7,8,9];
var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","\"","^","_","`","{","|","}","~"];

function generatePassword() {
  var passLengthInput = window.prompt("How many characters do you want your password? (Must be between 8-128): ");
// Check for correct password length
  if (passLengthInput < 8 || passLengthInput > 128) {
    return "\nPassword length invalid.\n\nPlease make sure length is between 8 and 128";
  }

  var undercaseInput = window.confirm("Would you like your password to include undercase letters?");
  var uppercaseInput = window.confirm("Would you like your password to include uppercase letters?");
  var numbersInput = window.confirm("Would you like your password to include numbers?");
  var specialInput = window.confirm("Would you like your password to include special characters?");
  var passwordArray = [];

// Checks if undercase was selected and adds to array if true
  if (undercaseInput) {
    for (i=0; i<letters.length; i++) {
      passwordArray[i] = letters[i].toLowerCase();
    };
  }
// Checks if uppercase was selected and adds to array if true. Also checks to see if array has already been added to yet.
  if (uppercaseInput && passwordArray.length > 0) {
    passwordArray = passwordArray.concat(letters);
  } else if (uppercaseInput) {
    passwordArray = letters;
  }
// Checks if numbers were selected and adds to the array if true. Also checks to see if array has already been added to yet.
  if (numbersInput && passwordArray.length > 0) {
    passwordArray = passwordArray.concat(nums);
  } else if (numbersInput) {
    passwordArray = nums;
  }
// Checks if special characters were selected and adds to the array if true. Also checks to see if array has already been added to yet.
  if (specialInput && passwordArray.length > 0) {
    passwordArray = passwordArray.concat(specialChars);
  } else if (specialInput) {
    passwordArray = specialChars;
  }
// Check for at least one entry data entry into the password field
  if (passwordArray === []) {
    return "\nNo valid criteria selected.\n\nPlease select at least one criteria to generate password.";
  }
  var userPassword = [];
  for (i=0; i<passLengthInput; i++) {
    userPassword[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }

  return userPassword.toString().replace(/,/g,'');
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
