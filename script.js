// Global Constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

// Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var randomNumber = 0;
var chanceCount = 0;

// Create a random pattern
function randPattern() {
  for (let i = 0; i <= 7; i++) {
    randomNumber = Math.floor(Math.random() * 7);
    while (randomNumber == 0) {
      randomNumber = Math.floor(Math.random() * 7);
    }
    pattern[i] = randomNumber;
    console.log(pattern)
  }
}

// Starting the game
function startGame() {
  progress = 0;
  gamePlaying = true;
  randPattern();
  chanceCount += 1;
  // swap the start and end buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

// Stopping the game
function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Lighting/Clearing a button
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  document.getElementById("img" + btn).classList.remove("img");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  document.getElementById("img" + btn).classList.add("img");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 250,
  5: 289,
  6: 330,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// Playing the individual clues
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// Playing the clue sequence
function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 25;
  }
}

// Win/loss notifications
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. Congratulations, you won!");
}

// Handling Guesses
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] != btn) {
    // Incorrect guess
    chanceCount += 1;
    if (chanceCount < 4) {
      alert("Guess again.");
    }
    else {
       loseGame();
    }
  }
  if (pattern[guessCounter] == btn) {
    // Correct guess
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  }
}
