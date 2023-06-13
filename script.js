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

// Checks to confirm length of password is within the parameters
while (passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be between 8 and 128 characters!");
  passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
}

// Asks user which character types to include
includeLowercase = confirm("Do you want to include lowercase letters?");
includeUppercase = confirm("Do you want to include uppercase letters?");
includeNumeric = confirm("Do you want to include numbers?")
includeSpecial = confirm("Do you want to include special characters?")


// Confirms that at least one character type is selected
while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert("At least one character type must be selected!!");
  includeLowercase = confirm("Do you want to include lowercase letters?");
  includeUppercase = confirm("Do you want to include uppercase letters?");
  includeNumeric = confirm("Do you want to include numbers?")
  includeSpecial = confirm("Do you want to include special characters?")
}

// Define variables based on criteria
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

