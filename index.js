// Require the word constructor
var Word = require("./Word.js");
// Require Inquirer npm package
var inquirer = require("inquirer");

// Word bank of words user will guess
var words = [
"bird",
"dog",
"fish",
"lizard"
];

// Function that selects a random word from the word bank and creates underscores (_) for each letter.
// This might need to be moved into the Word constructor... this may not be the correct setup.
// Not sure how this should interact with the Letter Constructor...
var randomWord = function() {
  var word = words[Math.floor(Math.random() * words.length)];
  var remainingLetters = word.length;
  answerArray= [];
  
  // loops through word assigned to create appropriate number of underscores (_)
  for (var i=0; i<word.length; i++) {
    answerArray[i] = "_" ;
  };
  // Shows the hidden word at the start of the game
  console.log("Here is the word for you to guess " + answerArray);
};
// call the random word function described above
randomWord();

// reset function that calls a random word to be selected from the word bank and displays the new word to guess.
var reset = function () {
  randomWord();
  console.log("next word to guess " + word);
}

// Inquirer prompt asking for a letter to guess.
// Inquirer prompts should repeat until the word is guessed. 
// if word.length has 1 or more placeholders _ , repeat inquirer prompts... If won, restart inquirer prompts
inquirer.prompt([
    {
      type: "input",
      name: "character",
      message: "Guess a letter!"
    }
  ])
  .then(function(answers) {
    // stores inquirer guess into a variable
    var character = answers.character;
    // Adds to the letter constructor. Stores character (guess).
    var newGuess = new letter(character);
    console.log(answers);
  });

  // Not sure how to use the letter and word constructors 

 // call the reset function after word is guessed correctly

 // export character variable to use as an argument in the Word constructor.
  module.exports = character;