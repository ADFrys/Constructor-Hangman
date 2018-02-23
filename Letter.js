// Letter constructor

var Letter = function(underliningLetter) {
  // underliningletter is the string value storing the underlining character
  this.underliningLetter = underliningLetter;

  // letterGuessed is a boolean that stores if letter has been guessed or not (set to false by default)
  this.letterGuessed = false;

  // reveal is a function that returns underlying letter if guessed or "_" if false
  this.reveal = function() {
    if (this.letterGuessed === true) {
      console.log(this.underliningLetter);
	  }
	  else {
	  console.log("_");
	  }
  }
  // checks the guess (character) against the underlining letter
  this.check = function(character) {
    if (character === this.underliningLetter) {
	  this.letterGuessed = true;
    console.log("You guessed correct!");
    return;
	  }
    console.log("That is incorrect. Guess again.");
  }
};

// Export the letter constructor
module.exports = Letter;