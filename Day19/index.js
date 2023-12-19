/** JavaScriptmas 2023 Day 19
 * Debug Challenge:
 * 1. There are loads of problems with the 
 *    code below. Find them and fix them!
 **/

const wordsArray = ['santa', 'snowman', 'reindeer', 'gifts', 'candies'];
let word = '';
let correctGuesses = [];

function chooseRandomWord() {
    word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    correctGuesses = Array(word.length).fill(false);
    console.log("The answer is: " + word)
}

function initializeGame() {
    chooseRandomWord();
    const wordArr = word.split('');
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.innerHTML = wordArr.map(() => '<span class="letter">-</span>').join('');
}

function renderGuess(arr) {
  const wordDisplay = document.getElementById('word-display');

  const wordHtml = arr.map((letter, index) => {
      const classes = correctGuesses[index] ? 'letter correct' : 'letter';
      return `<span class="${classes}">${letter}</span>`;
  });

  wordDisplay.innerHTML = wordHtml.join('');
}



function handleGuess(e) {
    e.preventDefault();

    const currentState = Array(word.length).fill(' ');
    const input = document.getElementById('user-input');
    const guess = input.value.toLowerCase();
    const guessArr = guess.split('');
    console.log("The users guess: " + guess)

    word.split('').forEach((letter, index) => {
        if (guessArr.includes(letter)) {
            currentState[index] = letter;
            correctGuesses[index] = true;
        }
    });

    renderGuess(currentState);
    checkWin(guess);
    input.value = '';
}

function checkWin(guess) {
    if (word === guess) {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['🎅', '🎄', '🤶', '❄️', '🎁'],
            emojiSize: 50,
            confettiNumber: 75,
            confettiRadius: 6,
        });
        jsConfetti.addConfetti();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    document.addEventListener('submit', handleGuess);
});
