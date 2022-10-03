// Assignment Code
var lengthInput = [];
var upperBlank = [];
var create;
var chooseNumbers;
var chooseSpecials;
var chooseUpper;
var chooseLower;
var input;

characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


var convertUpper = function (x) {
  return x.toUpperCase();
};

Uppers = characters.map(convertUpper);


var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  text = generatePassword();
  document.getElementById("password").placeholder = text;
});


function generatePassword (){
  create= parseInt(prompt("What is the length of your password? (Between 8 and 128)"))

  if(!create){
  alert ("Password will not be generated")
  }
  else if(create < 8 || create > 128){
    create=parseInt(prompt("Enter a number between 8 and 128"))
  }
  else{
    chooseNumbers = confirm("Do you want numbers?")
    chooseSpecials = confirm("Do you want special characters?")
    chooseUpper = confirm("Do you want uppercase characters?")
    chooseLower = confirm("Do you want lowercase characters?")
  }

  if (!chooseSpecials && !chooseNumbers && !chooseUpper && !chooseLower) {
  input = alert("Cannot generate password without a criteria");
}
else if (chooseSpecials && chooseNumbers && chooseUpper && chooseLower) {
  input = specials.concat(numbers, characters, Uppers);
}
else if (chooseSpecials && chooseNumbers && chooseUpper) {
  input = specials.concat(numbers, Uppers);
}
else if (chooseSpecials && chooseNumbers && chooseLower) {
  input = specials.concat(numbers, characters);
}
else if (chooseSpecials && chooseLower && chooseUpper) {
  input = specials.concat(characters, Uppers);
}
else if (chooseNumbers && chooseLower && chooseUpper) {
  input = numbers.concat(characters, Uppers);
}
else if (chooseSpecials && chooseNumbers) {
  input = specials.concat(numbers);
} 
else if (chooseSpecials && chooseLower) {
  input = specials.concat(characters);
} 
else if (chooseLower && chooseUpper) {
  input = specials.concat(Uppers);
}
else if (chooseLower && chooseNumbers) {
  input = characters.concat(numbers);
} 
else if (chooseLower && chooseUpper) {
  input = characters.concat(Uppers);
} 
else if (chooseNumbers && chooseUpper) {
  input = numbers.concat(Uppers);
}
else if (chooseSpecials) {
  input = specials;
}
else if (chooseNumbers) {
  input = numbers;
}
else if (chooseLower) {
  input = characters;
}
else if (chooseUpper) {
  input = upperBlank.concat(Uppers);
};

var lengthInput = [];

for (var i = 0; i < create; i++) {
  var pswd = input[Math.floor(Math.random() * input.length)];
  lengthInput.push(pswd);
}
var text = lengthInput.join("");
UserInput(text);
return text;
}
    
    function UserInput(text) {
      document.getElementById("password").textContent = text;
    }

