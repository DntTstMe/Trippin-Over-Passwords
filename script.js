// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates password based on user criteria
function generatePassword() {
  // Prompts user for the password's criteria
  var passwordLength = prompt ("Choose a password length of at least 8 characters and no more than 128 characters.");
}

// Checks to confirm legnth of password is within the parameters
while (passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be between 8 and 128 characters!");
  passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
}