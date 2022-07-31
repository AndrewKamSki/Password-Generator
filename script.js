// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","R","S","T","U","V","W","X","Y","Z"];
var nums = [0,1,2,3,4,5,6,7,8,9];
var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","\"","^","_","`","{","|","}","~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
