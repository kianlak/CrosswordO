function getRandomCenterIntersectionAcrossWord(crossword) {
  let wordAcross;

  while(wordAcross == undefined) {
    let acrossWordLength = Math.floor(Math.random() * (crossword.sideLength - 3 + 1) + 3) | 1;
    let words = getWordsForAcrossWithLength(acrossWordLength);

    if(words != undefined) {
      wordAcross = words[Math.floor(Math.random() * words.length)];
    }
  }

  return wordAcross;

  function getWordsForAcrossWithLength(length) {
    let words = [];

    for(const index in DICTIONARY) {
      let word = getWord(index);

      if(word.length == length) {
        words.push(word);
      }
    }

    return words;
  }
}

function getRandomCenterIntersectionDownWord(crossword, wordAcross) {
  let wordDown;

  while(wordDown == undefined) {
    let downWordLength = Math.floor(Math.random() * (crossword.sideLength - 3 + 1) + 3) | 1;
    let wordAcrossMiddleLetter = wordAcross[Math.floor(wordAcross.length / 2)];
    let words = getWordsForDownWithLength(downWordLength, wordAcrossMiddleLetter);

    if(words != undefined) {
      wordDown = words[Math.floor(Math.random() * words.length)];
    }
  }
  
  return wordDown;

  function getWordsForDownWithLength(length, intersectingLetter) {
    let words = [];
    
    for(const index in DICTIONARY) {
      let word = getWord(index);
      
      if((word.length == length) && (word[Math.floor(word.length / 2)] == intersectingLetter)) {
        words.push(word);
      }
    }

    return words;
  }
}