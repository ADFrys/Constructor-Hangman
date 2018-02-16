function Letter(letter) {
  this.letter = letter;
  this.letterGuessed = false;
  this.reveal = function() {
    if (letterGuessed === true) {
      console.log(letter);
	  }
	else {
	  console.log("_");
	}
  }
  this.check = function(character) {
    if (character === letter) {
	  this.letterGuessed = true;
	}
  }
}