let wordInput = document.querySelector("#word");
let guessWord;
let guessContainer = document.querySelector(".guessContainer");
let guessInput = document.querySelector("#guessInput");
let images = document.querySelectorAll("img");
let hangmanImg = document.getElementById("hangmanImg");
let userGuess = document.querySelector(".userGuess");
let wrongContainer = document.querySelector(".wrongContainer");
let hangImg = document.querySelector(".hangman");
let el;
let inputVal;
let rope = "./ropeIcon.png";
let text;
let letter;
let guessLetter;
let correctLetter;
let wrongLetter;
let counter = 0;
let maxGuess = 0;
let img0 = "images/hang0.png";
let img1 = "images/hang1.png";
let img2 = "images/hang2.png";
let img3 = "images/hang3.png";
let img4 = "images/hang4.png";
let img5 = "images/hang5.png";
let img6 = "images/hang6.png";

wordInput.addEventListener("keyup", getWord);

function getWord(event) {
  event.preventDefault();

  if (event.which === 13) {
    userGuess.style = "inline";
    guessWord = wordInput.value.toUpperCase();
    console.log(guessWord);
    guessInput.focus();
    wrongLetter = new Array();
    correctLetter = new Array(guessWord.length);
    correctLetter.fill("");

    text = "<ul>";
    for (let i = 0; i < correctLetter.length; i++) {
      text +=
        "<li class = 'liBackground' id =" +
        i +
        ">" +
        correctLetter[i] +
        "</li>";
    }
    text += "<ul>";

    guessContainer.innerHTML = text;
    wordInput.value = "";
    hangmanImg.src = img0;
  }
}

guessInput.addEventListener("keyup", checkGuess);

function checkGuess(event) {
  event.preventDefault();
  if (event.which === 13) {
    console.log(guessInput.value.toUpperCase());
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
        el = querySelector(i);
        console.log(el);
        el.style.background = "none";
      }
    }
  }
}

function replace(x) {
  x.parentNode.replaceChild(newEl, x);
}
