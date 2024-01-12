const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  // determine new numbers
  const numberOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;
  let numberOfWords = countWords(textareaEl.value);

  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  if (textareaEl.value.includes("<script>")) {
    alert("You cannot include <script> in your text");
    textareaEl.value = textareaEl.value.replace("<script>", "");
    numberOfWords = countWords(textareaEl.value);
  }
  // set new numbers
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
  wordsNumberEl.textContent = numberOfWords;
};

function countWords(str) {
  // Using \p{L} to match any kind of letter and \d for digits
  const words = str.match(/(\p{L}+|\d+)/gu);
  return words ? words.length : 0;
}

textareaEl.addEventListener("input", inputHandler)
