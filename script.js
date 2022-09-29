// Assignment Code
var uppercase = window.confirm("Uppercase?")

var lowercase = window.confirm("Lowercase?")

var specialCharacters = window.confirm("Special Characters?")

var length = window.prompt("Length?")
//these are undefined
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  prompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  prompts();
//use confirm function to prompt criteria

}

//use confirm function to prompt criteria

function prompts(){
  //uppercase, lowercase, special characters, length (length will be prompt)
  var uppercase = window.confirm("Uppercase?")

  var lowercase = window.confirm("Lowercase?")

  var specialCharacters = window.confirm("Special Characters?")

  var length = window.prompt("Length?")

  var lengthOkay = false

  while(lengthOkay === false){
    lengthOkay = true
    //length not okay
    length = window.prompt("Length?")
    if(typeof length !== "number"){
      lengthOkay= false
    }
  }
  //preferrably type numerical value
}

function generatePassword(uppercase, lowercase, specialCharacters, length){
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//when clicked, the button will run 'writePassword'


