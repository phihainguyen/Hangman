let wordInput = document.querySelector("#word");
let guessWord;
let guessContainer = document.querySelector(".guessContainer");
let span;

wordInput.addEventListener("keyup", getWord);
function getWord(event) {
  if (event.which === 13) {
    guessWord = wordInput.value;
    console.log(guessWord);

    span = "<ul>";
    for (let i = 0; i < guessWord.length; i++) {
      span += "<li>" + guessWord[i] + "</li>";
    }
    span += "<ul>";

    guessContainer.innerHTML = span;
  }
}
