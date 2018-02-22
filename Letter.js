function Letter(underliningLetter, letterGuessed) {
  this.underliningLetter = underliningLetter;
  this.letterGuessed = letterGuessed;
  this.reveal = function() {
    if (this.letterGuessed === true) {
      console.log(this.underliningLetter);
	  }
	  else {
	  console.log("_");
	  }
  }
  this.check = function(character) {
    if (character === this.underliningLetter) {
	  this.letterGuessed = true;
	  }
  }
}

module.exports = Letter;