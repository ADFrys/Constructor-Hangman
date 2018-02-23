// Require the letter constructor
var Letter = require("./Letter.js");

// character comes from the inquirer response
var character = require("./index.js");

// Word constructor
var Word = function() {
  // Array of letter objects (contains letters of underlining word)
  this.lettersArray = [];
  // adds new letter objects to array
  this.addLetter = function(underliningLetter) {
    this.lettersArray.push(new Letter(underliningLetter));
    };
    // Function that concatenates letters to create a word (or displays "_" placeholders)
  this.returnString = function() {
  	Letter.prototype.toString = function() {
      this.reveal();
      console.log(lettersArray.join(','));
    }
  }
  // function that calls the check function (that checks if letter guessed is correct)
  this.character = function(character) {
    Letter.prototype.toString = function(character) {
    this.check(character)
    }
  }
};
// export Word Constructor
module.exports = Word;
