function countLetters(inputText){

  // remove spaces
  var inputText = inputText.split(' ').join('');

  // split the inputText into an array
  var inputText = inputText.split('');

  // create the letterCount object
  var letterCount = {};

  // loop through and count the letters
  for (var i = 0; i < inputText.length; i++) {
    if (letterCount[inputText[i]] !== undefined){
      letterCount[inputText[i]] = letterCount[inputText[i]] + 1;
    } else {
      letterCount[inputText[i]] = 1;
    }
  }

  return letterCount;
}

console.log(countLetters("This is a test"));
console.log(countLetters("Word"));
console.log(countLetters("the quick brown fox jumped over the lazy dog"));