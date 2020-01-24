// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Creates a confirm box which takes in true or false.
  var confirmLength = prompt("How many characters would you like your password to be?");
  if (confirmLength >= 8 && confirmLength <= 128) {
    alert("Your password is " + confirmLength + " digits long.");
  } else {
    alert("Your password must be between 8 and 128 characters long");
  }
  var passChar = [];
  var spChar = ["!", "@", "#", "$", "&"];
  var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "w", "x", "y", "z"
  ];
  var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
  ];
  // Creates a prompt box which takes in text input.
  var wantspChar = confirm("Verify that you want special characters.");
  var wantnumChar = confirm("Verify that you want numeric characters.");
  var wantlowChar = confirm("Verify that you want lowercase letters.");
  var wantupChar = confirm("Verify that you want uppercase letters.");
  if (wantspChar === true) {
    passChar = passChar.concat(spChar);
  }
  if (wantnumChar === true) {
    passChar = passChar.concat(numChar);
  }
  if (wantlowChar === true) {
    passChar = passChar.concat(lowChar);
  }
  if (wantupChar === true) {
    passChar = passChar.concat(upChar);
  }
  console.log(passChar);

  var pswd = "";
  passNum=parseInt(confirmLength);
  for (var i = 0; i <= passNum - 1; i++) {
    pswd += passChar[(Math.floor(Math.random() * passChar.length))];
    // console.log(pswd);
  }
  console.log(pswd)
  return pswd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
