
var Letter = function(underliningLetter, letterGuessed) {
  this.underliningLetter = underliningLetter;
  this.letterGuessed = letterGuessed;
  this.reveal = function() {
    if (this.letterGuessed === true) {
      console.log(this.underliningLetter + " underliningletter");
	  }
	  else {
	  console.log("_");
	  }
  }
  this.check = function(character) {
    if (character === this.underliningLetter) {
	  this.letterGuessed = true;
    console.log("true");
    return;
	  }
      console.log("false");
      console.log(character + " character");
      console.log(this.underliningLetter);
  }
};

var newLetter = new Letter("a", true);

var character = process.argv[2];


newLetter.check(character);
newLetter.reveal();

module.exports = Letter;