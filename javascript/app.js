let wordInput = document.querySelector("#word");
let guessWord;
let guessContainer = document.querySelector(".guessContainer");
let guessInput = document.querySelector("#guessInput");
let images = document.querySelectorAll("img");
let userGuess = document.querySelector(".userGuess");
let newEl = document.createElement("span");
let el;
let inputVal;
let rope = "./ropeIcon.png";
let span;
let letter;

wordInput.addEventListener("keyup", getWord);
guessInput.addEventListener("keyup", checkGuess);

function getWord(event) {
  event.preventDefault();
  if (event.which === 13) {
    userGuess.style = "inline";
    guessWord = wordInput.value;
    console.log(guessWord);

    span = "<ul>";
    for (let i = 0; i < guessWord.length; i++) {
      span += "<li >" + "<img id = " + i + " src = 'ropeIcon.png'>" + "</li>";
    }
    span += "<ul>";

    guessContainer.innerHTML = span;
  }
}

guessInput.addEventListener("keyup", checkLetter);

function checkLetter(event) {
  if (event.which === 13) {
    console.log("you are checking the letter");
  }
}

function checkGuess(event) {
  event.preventDefault();

  console.log(guessInput.value);
  console.log(guessWord);
  inputVal = guessInput.value;
  //   if (guessWord.includes(inputVal)) {
  //     let place = guessWord.indexOf(inputVal);
  //     console.log(place);
  //     if (guessWord.indexOf(inputVal) !== -1) {
  //       console.log(guessWord.indexOf(inputVal, place + 1));
  //     }
  //   } else {
  //     console.log("no match found");
  //   }
  for (let i = 0; i < guessWord.length; i++) {
    if (inputVal === guessWord[i]) {
      document
        .getElementById(i)
        .parentNode.replaceChild(newEl, document.getElementById(i));

      //   el.parentNode.replaceChild(newEl, el);
    }
  }
}
