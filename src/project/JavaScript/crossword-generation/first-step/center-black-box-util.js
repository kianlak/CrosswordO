function getRandomFilledAroundCenterWord(crossword, length) {
  let word1, word2;
  let words = randomWordLooseLength(length);
  
  word1 = words[Math.floor(Math.random() * words.length)];
  words = randomWordByLength(word1.length);
  word2 = words[Math.floor(Math.random() * words.length)];

  return [word1, word2];
}

function randomWordLooseLength(length) {
  let words = [];

  for(const index in DICTIONARY) {
    let word = getWord(index);

    if(word.length <= length) {
      words.push(word);
    }
  }

  return words;
}

function randomWordByLength(length) {
  let words = [];

  for(const index in DICTIONARY) {
    let word = getWord(index);

    if(word.length == length) {
      words.push(word);
    }
  }

  return words;
}

function firstStepWordsInsertIntoCrossword(crossword, word1, word2, row, column, mode) {
  if(mode == insertMode.ACROSS) {
    if((column - 1) >= 0) {
      insertBlackBoxes(crossword, row, (column - 1));
    }

    insertBlackBoxes(crossword, row, (column + word1.length));
    insertCenterAcrossWordIntoCrossword(crossword, word1, row, column);

    [row, column] = symmetricalCoordinates(crossword, row, column);
    insertCenterAcrossWordIntoCrossword(crossword, word2, row, (column - word1.length + 1));

    if((column + 1) < crossword.sideLength) {
      insertBlackBoxes(crossword, row, (column + 1));
    }

  }
  else {
    if((row - 1) >= 0) {
      insertBlackBoxes(crossword, (row - 1), column);
    }

    insertBlackBoxes(crossword, (row + word1.length), column);
    insertCenterDownWordIntoCrossword(crossword, word1, row, column);

    [row, column] = symmetricalCoordinates(crossword, row, column);
    insertCenterDownWordIntoCrossword(crossword, word2, (row - word1.length + 1), column);

    if((row + 1) < crossword.sideLength) {
      insertBlackBoxes(crossword, (row + 1), column);
    }
  }
}