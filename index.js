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

var dashed = user.randomWord();

// console.log("Word:  " + user.word);


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
      var character = answers.character;
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
        console.log("Sorry, that is not the correct letter.");
        askQuestion();

      }

    });

}

askQuestion();
