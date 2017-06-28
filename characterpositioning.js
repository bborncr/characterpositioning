function countLetters(inputText){

  // remove spaces
  var inputText = inputText.split(' ').join('');

  // split the inputText into an array
  var inputText = inputText.split('');

  // create the letterCount object
  var letterCount = {};

  // var letterCount = {
  //   a: {
  //     count: 3,
  //     positions: [3, 4, 1]
  //   },
  //   b: {
  //     count: 1,
  //     positions:[0]
  //   }
  // }

  // loop through and count the letters
  for (var i = 0; i < inputText.length; i++) {
    if (letterCount[inputText[i]] !== undefined){
      letterCount[inputText[i]]['count'] = letterCount[inputText[i]]['count'] + 1;
      letterCount[inputText[i]]['positions'].push(i);
    } else {
      letterCount[inputText[i]] = {'count': 1, 'positions': [i]};
    }
  }

  return letterCount;
}

console.log(countLetters("This is a test"));
console.log(countLetters("Word"));
console.log(countLetters("the quick brown fox jumped over the lazy dog"));