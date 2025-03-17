const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

function generate() {
  let passOne = "";
  let passTwo = "";
  console.log("Generate password");

  for (let i = 0; i < 15; i++) {
    passOne += characters[Math.floor(Math.random() * characters.length)];
    passTwo += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordOne.textContent = passOne;
  passwordTwo.textContent = passTwo;
}

function clearPass() {
  passwordOne.textContent = "";
  passwordTwo.textContent = "";
  console.log("Clear password");
}

function copyPass(event) {
  let passwordText = event.target.textContent;

  navigator.clipboard
    .writeText(passwordText)
    .then(() => {
      alert("Copied password");
      console.log("Copied:", passwordText);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
}
