function continueTraversal(crossword, row, column, mode) {
  if(mode == insertMode.ACROSS) {
    if(row - 1 >= 0 && crossword.directionGrid[row - 1][column] == "A") {
      return false;
    }
    
    if(row + 1 < crossword.sideLength && crossword.directionGrid[row + 1][column] == "A") {
      return false;
    }
    
    if(row - 1 >= 0 && crossword.directionGrid[row - 1][column] == "AD" && crossword.directionGrid[row][column] != "D") {
      return false;
    }

    if(row + 1 < crossword.sideLength && crossword.directionGrid[row + 1][column] == "AD" && crossword.directionGrid[row][column] != "D") {
      return false;
    }

    if(column - 1 >= 0 && (crossword.directionGrid[row][column - 1] == "AD" || crossword.directionGrid[row][column - 1] == "A")) {
      return false;
    }

    if(column + 1 < crossword.sideLength && (crossword.directionGrid[row][column + 1] == "AD" || crossword.directionGrid[row][column + 1] == "A")) {
      return false;
    }

    return true;
  }
  else if(mode == insertMode.DOWN) {
    if(column - 1 >= 0 && crossword.directionGrid[row][column - 1] == "D") {
      return false;
    }
    
    if(column + 1 < crossword.sideLength && crossword.directionGrid[row][column + 1] == "D") {
      return false;
    }
    
    if(column - 1 >= 0 && crossword.directionGrid[row][column - 1] == "AD" && crossword.directionGrid[row][column] != "A") {
      return false;
    }

    if(column + 1 < crossword.sideLength && crossword.directionGrid[row][column + 1] == "AD" && crossword.directionGrid[row][column] != "A") {
      return false;
    }

    if(row - 1 >= 0 && (crossword.directionGrid[row - 1][column] == "AD" || crossword.directionGrid[row - 1][column] == "A")) {
      return false;
    }

    if(row + 1 < crossword.sideLength && (crossword.directionGrid[row + 1][column] == "AD" && crossword.directionGrid[row + 1][column] == "D")) {
      return false;
    }

    return true;
  }
}

function acrossWordSegmenting(crossword, list, index, mode) {
  let segments = [];
  let wordData = {};
  let segmentLength = 0;
  let hasSpace = false;
  let hasLetter = false;
  let startingPoint = false;

  for(let i = 0; i < crossword.sideLength; i++) {
    if((list[i] == "#" || i == crossword.sideLength - 1) && segmentLength > 1 && hasSpace && hasLetter) {
      if(list[i] == "#") {
        wordData[[index, i - 1]] = list[i - 1];
        segments.push(wordData);
      }
      else {
        wordData[[index, i]] = list[i];
        segments.push(wordData);
      }

      wordData = {};
      segmentLength = 0;
      hasSpace = false;
      hasLetter = false;
      startingPoint = false;
    }
    else if(list[i] != "#" && list[i] != " " && continueTraversal(crossword, index, i, mode)) {
      hasLetter = true;
      wordData[[index, i]] = list[i];
      segmentLength++;

      if(!startingPoint) {
        startingPoint = true;
        wordData[[index, i]] = list[i];
      }
    }
    else if(list[i] == " " && continueTraversal(crossword, index, i, mode)) {
      hasSpace = true;
      segmentLength++;

      if(!startingPoint) {
        startingPoint = true;
        wordData[[index, i]] = list[i];
      }
    }
    else {
      wordData = {};
      segmentLength = 0;
      hasSpace = false;
      hasLetter = false;
      startingPoint = false;
    }
  }

  if(segments.length != 0) {
    return segments;
  }
  else {
    return undefined;
  }
}

function downWordSegmenting(crossword, list, index, mode) {
  let segments = [];
  let wordData = {};
  let segmentLength = 0;
  let hasSpace = false;
  let hasLetter = false;
  let startingPoint = false;

  for(let i = 0; i < crossword.sideLength; i++) {
    if((list[i] == "#" || i == crossword.sideLength - 1) && segmentLength > 1 && hasSpace && hasLetter) {
      if(list[i] == "#") {
        wordData[[i - 1, index]] = list[i - 1];
        segments.push(wordData);
      }
      else {
        wordData[[i, index]] = list[i];
        segments.push(wordData);
      }

      wordData = {};
      segmentLength = 0;
      hasSpace = false;
      hasLetter = false;
      startingPoint = false;
    }
    else if(list[i] != "#" && list[i] != " " && continueTraversal(crossword, i, index, mode)) {
      hasLetter = true;
      wordData[[i, index]] = list[i];
      segmentLength++;

      if(!startingPoint) {
        startingPoint = true;
        wordData[[i, index]] = list[i];
      }
    }
    else if(list[i] == " " && continueTraversal(crossword, i, index, mode)) {
      hasSpace = true;
      segmentLength++;

      if(!startingPoint) {
        startingPoint = true;
        wordData[[i, index]] = list[i];
      }
    }
    else {
      wordData = {};
      segmentLength = 0;
      hasSpace = false;
      hasLetter = false;
      startingPoint = false;
    }
  }

  if(segments.length != 0) {
    return segments;
  }
  else {
    return undefined;
  }
}

function processSegments(crossword, segments, index, mode) {
  for(const element of segments) {
    setTimeout(1000);
    chooseRandomWordToInsert(crossword, Object.entries(element), index, mode);
  }
}

function chooseRandomWordToInsert(crossword, segment, index, mode) {
  if(segment[0][1] == " ") {
    if(mode == insertMode.DOWN) {
      returnBlankStartDownWord(crossword, segment, index, mode);
    }
    else {
      returnBlankStartAcrossWord(crossword, segment, index, mode);
    }
  }
  // else {
  //   returnLetterStart(crossword, segment, index, mode);
  // }
}

function getFittingWords(crossword, startingIndex, endingIndex, index, wordLength, intersectionList, mode) {
  let wordChoices = [];
  let randomlySelectedWord;
  let correctWord = false;
  
  for(const index in DICTIONARY) {
    let word = getWord(index);
    
    for(let i = 0; i < intersectionList[0].length; i++) {
      if(word.charAt(intersectionList[1][i]) == intersectionList[0][i].toLocaleLowerCase() && word.length == wordLength) {
        correctWord = true;
      }
      else {
        correctWord = false;
        break;
      }
    }
    
    if(correctWord) {
      wordChoices.push(word);
    }

    correctWord = false;
  }
  
  if(wordChoices.length > 0) {
    randomlySelectedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)].toUpperCase();

    if(mode == insertMode.DOWN) {
      setDownWordsIntoCrossword(crossword, randomlySelectedWord, startingIndex, endingIndex, index);
    }
    else {
      setAcrossWordsIntoCrossword(crossword, randomlySelectedWord, startingIndex, endingIndex, index);
    }
  }
}

function setDownWordsIntoCrossword(crossword, word, startingIndex, endingIndex, column) {
  for(let i = 0; i < word.length; i++) {
    crossword.setElementIntoGrid(startingIndex + i, column, word[i]);

    if(crossword.directionGrid[startingIndex + i][column] == insertMode.ACROSS) {
      crossword.setElementIntoDirectionGrid(startingIndex + i, column, insertMode.ACROSSANDDOWN);
    }
    else {
      crossword.setElementIntoDirectionGrid(startingIndex + i, column, insertMode.DOWN);
    }
  }

  insertBlackBoxesDown(crossword, startingIndex, endingIndex, column);

  crossword.addToWords(word, startingIndex, column, insertMode.DOWN);
}

function setAcrossWordsIntoCrossword(crossword, word, startingIndex, endingIndex, row) {
  for(let i = 0; i < word.length; i++) {
    crossword.setElementIntoGrid(row, startingIndex + i, word[i]);

    if(crossword.directionGrid[row][startingIndex + i] == insertMode.DOWN) {
      crossword.setElementIntoDirectionGrid(row, startingIndex + i, insertMode.ACROSSANDDOWN);
    }
    else if(crossword.directionGrid[row][startingIndex + i] == insertMode.ACROSSANDDOWN) {
      crossword.setElementIntoDirectionGrid(row, startingIndex + i, insertMode.ACROSSANDDOWN);
    }
    else {
      crossword.setElementIntoDirectionGrid(row, startingIndex + i, insertMode.ACROSS);
    }
  }

  insertBlackBoxesAcross(crossword, startingIndex, endingIndex, row);

  crossword.addToWords(word, startingIndex, row, insertMode.ACROSS);
}

function insertBlackBoxesDown(crossword, startingIndex, endingIndex, column) {
  if(startingIndex - 1 >= 0 && crossword.directionGrid[startingIndex - 1][column] == "N") {
    crossword.setElementIntoGrid(startingIndex - 1, column, "#");
  }
  if(endingIndex + 1 <= crossword.sideLength - 1 && crossword.directionGrid[endingIndex + 1][column] == "N") {
    crossword.setElementIntoGrid(endingIndex + 1, column, "#");
  }
}

function insertBlackBoxesAcross(crossword, startingIndex, endingIndex, row) {
  if(startingIndex - 1 >= 0 && crossword.directionGrid[row][startingIndex - 1] == "N") {
    crossword.setElementIntoGrid(row, startingIndex - 1, "#");
  }
  if(endingIndex + 1 <= crossword.sideLength - 1 && crossword.directionGrid[row][endingIndex + 1] == "N") {
    crossword.setElementIntoGrid(row, endingIndex + 1, "#");
  }
}