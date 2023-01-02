function getRandomAcrossMiddleWord(crossword) {
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

function getRandomDownMiddleWord(crossword, wordAcross) {
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

function firstInsertBlackBoxes(crossword, direction) {
  if(direction == "A") {
    let row = crossword.halfPoint;
    let column = crossword.halfPoint - 1;
    
    insertBlackBoxes(crossword, row, column);
  }
}

function crosswordCenterIsBlackBox() {
  let percentChance = Math.ceil(Math.random() * 100);
  
  return percentChance <= 10 ? true : false;
}

function randomlySelectCenterBlackBoxMode() {
  let percentChance = Math.ceil(Math.random() * 100);

  /** Percent Chances
   * case1: 90%
   * case2: 5%
   * case3: 5%
   */
  switch(true) {
    case(percentChance <= 90):                          
      return centerBlackBoxMode.FILLEDAROUNDCENTER;
    case(percentChance >= 91 && percentChance <= 95):
      return centerBlackBoxMode.ACROSSVERTICALTOCENTER;
    case(percentChance >= 96):
      return centerBlackBoxMode.DOWNHORIZONTALTOCENTER;
  }
}

function randomlySelectNoCenterBlackBoxMode() {
  let percentChance = Math.ceil(Math.random() * 100);

  /** Percent Chances
   * case1: 80%
   * case2: 10%
   * case3: 10%
   */
  switch(true) {
    case(percentChance <= 80):                          
      return centerBlackBoxMode.FILLEDAROUNDCENTER;
    case(percentChance >= 81 && percentChance <= 90):
      return centerBlackBoxMode.ACROSSVERTICALTOCENTER;
    case(percentChance >= 91):
      return centerBlackBoxMode.DOWNHORIZONTALTOCENTER;
  }
}


function firstStepIntersectionMode(crossword) {
  let word1 = getRandomAcrossMiddleWord(crossword);
  let word2 = getRandomDownMiddleWord(crossword, word1);
  let startingBox;

  startingBox = (crossword.sideLength - word1.length) / 2;

  for(let i = 0; i < word1.length; i++) {
    crossword.setElementIntoGrid(crossword.halfPoint, (startingBox + i), word1[i]);
    crossword.setElementIntoDirectionGrid(crossword.halfPoint, (startingBox + i), insertMode.ACROSS);
  }

  startingBox = (crossword.sideLength - word2.length) / 2;

  for(let i = 0; i < word2.length; i++) {
    crossword.setElementIntoGrid((startingBox + i), crossword.halfPoint, word2[i]);
    
    if(crossword.directionGrid[startingBox + i][crossword.halfPoint] != insertMode.ACROSS) {
      crossword.setElementIntoDirectionGrid((startingBox + i), crossword.halfPoint, insertMode.DOWN);
    }
    else {
      crossword.setElementIntoDirectionGrid((startingBox + i), crossword.halfPoint, insertMode.ACROSSANDDOWN);
    }
  }
}