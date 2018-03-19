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


var user = new Word(words);







// Function that selects a random word from the word bank and creates underscores (_) for each letter.
// This might need to be moved into the Word constructor... this may not be the correct setup.
// Not sure how this should interact with the Letter Constructor...
// var randomWord = function () {
//   word = words[Math.floor(Math.random() * words.length)];

//   // var remainingLetters = word.length; 
//   var answerArray = []; // dashed

//   // loops through word assigned to create appropriate number of underscores (_)
//   for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//   };
//   // Shows the hidden word at the start of the game
//   console.log("Here is the word for you to guess " + answerArray);

//   return answerArray; // ["_", "_", "_", "_"]
// };
// call the random word function described above
var dashed = user.randomWord();

console.log("Word:  " + user.word);
  

// reset function that calls a random word to be selected from the word bank and displays the new word to guess.
// var reset = function () {
//   randomWord();
//   console.log("next word to guess " + word);
// }

// Inquirer prompt asking for a letter to guess.
// Inquirer prompts should repeat until the word is guessed. 
// if word.length has 1 or more placeholders _ , repeat inquirer prompts... If won, restart inquirer prompts

// Recursion


function askQuestion() {

  inquirer.prompt([
    {
      type: "input",
      name: "character",
      message: "Guess a letter!"
    }
  ])
    .then(function (answers) {
      // stores inquirer guess into a variable
      // console.log(answers);
      // var character = answers.character;
      // Adds to the word constructor. Stores character (guess).
      // var newGuess = new Word(character);

      const userAnswer = answers.character;

      if (user.word.includes(userAnswer)) {
        var index = user.word.indexOf(userAnswer);
        dashed[index] = userAnswer;
        
        console.log("Here is the word for you to guess " + dashed);
        
        var guessword = dashed.join(""); 
        
        if(guessword === user.word){
          console.log("You win!!!");
        } else{
          askQuestion();
        }
        

      } else {
        // TODO
        // It doesn't not exist
        console.log("No it does not");
        askQuestion();

      }

    });

}

askQuestion();
  // Not sure how the letter and word constructors interact to create the game logic

 // call the reset function after word is guessed correctly


 // Feature
 // 