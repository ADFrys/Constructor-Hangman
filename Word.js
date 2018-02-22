var Letter = require("./Letter.js");


var Word = function(underliningLetter, letterGuessed, character) {
  this.lettersArray = [];
  this.addLetter = function(underliningLetter, letterGuessed) {
    this.lettersArray.push(new Letter(underliningLetter, letterGuessed));
    };
  this.returnString = function() {
  	Letter.prototype.toString = function() {
      this.reveal();
      console.log("true");
    }
  }
  this.character = function(character) {
    Letter.prototype.toString = function() {
    this.check(character);
    }
  }
};

Word.prototype.toString = function() {
  console.log("character " + characterNew);
}

// console.log(lettersArray.join(','));
var word1 = new Word("a", false);
word1.addLetter("a", true);



module.exports = Word;
