let wordInput = document.querySelector("#word");
let guessWord;
let guessContainer = document.querySelector(".guessContainer");
let guessInput = document.querySelector("#guessInput");
let images = document.querySelectorAll("img");
let hangmanImg = document.getElementById("hangmanImg");
let userGuess = document.querySelector(".userGuess");
let wrongContainer = document.querySelector(".wrongContainer");
let hangImg = document.querySelector(".hangman");
let letterUpdate = document.getElementsByClassName("liBackground");
let displayWrong = document.getElementById("displayWrong");
let inputVal;
let lose = document.querySelector(".lose");
let win = document.querySelector(".win");
let text;
let letter;
let guessLetter;
let correctLetter;
let wrongLetter;
let wrongText;
let counter = 0;
let maxGuess;
let img0 = "images/hang0.png";
let img1 = "images/hang1.png";
let img2 = "images/hang2.png";
let img3 = "images/hang3.png";
let img4 = "images/hang4.png";
let img5 = "images/hang5.png";
let img6 = "images/hang6.png";
let img7 = "images/hang7.png";
let rope = "./ropeIcon.png";

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
    maxGuess = guessWord.length * 2;
    counter = 0;
    correctLetter.fill("");
    console.log(maxGuess);
    lose.style.display = "none";
    win.style.display = "none";
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
    if (guessWord) {
      guessLetter = guessInput.value.toUpperCase();
      if (counter <= maxGuess) {
        if (!guessWord.includes(guessLetter)) {
          counter++;
          wrongLetter.push(guessLetter);
          hangman(counter);

          wrongText = "<div class = 'wrongWrap'><span>Guesses: </span>";
          for (let i = 0; i < wrongLetter.length; i++) {
            wrongText +=
              "<span class = 'wrongSpan'>" + wrongLetter[i] + " " + "</span>";
          }
          wrongText += "</div>";
          displayWrong.innerHTML = wrongText;

          wrongContainer.style.display = "inline";

          console.log(wrongLetter);
        } else {
          for (let i = 0; i < guessWord.length; i++) {
            if (guessLetter === guessWord[i]) {
              correctLetter[i] = guessLetter;
              letterUpdate[i].textContent = guessLetter;
              letterUpdate[i].style.background = "none";
              letterUpdate[i].style.borderStyle = "solid";
              letterUpdate[i].style.borderColor = "black";
              letterUpdate[i].style.borderWidth = "2px";
              letterUpdate[i].style.borderRadius = "15px";
            }
          }
          if (!correctLetter.includes("")) {
            counter = 0;
            hangmanImg.src = img7;
            userGuess.style.display = "none";
            win.style.display = "inline";
            wordInput.focus();
          }
        }
        guessInput.value = "";
      }
    }
  }
}
function hangman(nums) {
  if (nums === 1 && nums <= maxGuess * 0.2) {
    hangmanImg.src = img1;
  }
  if (nums > maxGuess * 0.2 && nums <= maxGuess * 0.4) {
    hangmanImg.src = img2;
  }
  if (nums > maxGuess * 0.4 && nums <= maxGuess * 0.5) {
    hangmanImg.src = img3;
  }
  if (nums > maxGuess * 0.5 && nums <= maxGuess * 0.6) {
    hangmanImg.src = img4;
  }
  if (nums > maxGuess * 0.6 && nums <= maxGuess * 0.8) {
    hangmanImg.src = img5;
  }
  if (nums === maxGuess) {
    hangmanImg.src = img6;
    userGuess.style.display = "none";
    lose.style.display = "block";
    lose.style.color = "red";
    wordInput.focus();
  }
}
