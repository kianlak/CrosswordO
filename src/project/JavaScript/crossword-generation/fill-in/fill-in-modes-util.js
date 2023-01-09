function continueTraversal(crossword, row, column, mode) {
  if(mode == insertMode.ACROSS) {

  }
  else if(mode == insertMode.DOWN) {
    if(column - 1 >= 0 && crossword.directionGrid[row][column - 1] == "D") {
      return false;
    }
    
    if(column + 1 < crossword.sideLength && crossword.directionGrid[row][column + 1] == "D") {
      return false;
    }
    
    if(row + 1 < crossword.sideLength && crossword.directionGrid[row + 1][column] == "AD" || row + 1 < crossword.sideLength && crossword.directionGrid[row + 1][column] == "D") {
      return false;
    }

    return true;
  }
}

function possibleDownWords(crossword, list, index, mode) {
  let segments = [];
  let wordData = {};
  let segmentLength = 0;
  let hasSpace = false;
  let hasLetter = false;

  for(let i = 0; i < crossword.sideLength; i++) {
    if((list[i] == "#" || i == crossword.sideLength - 1) && segmentLength > 1 && hasSpace && hasLetter) {
      segments.push(wordData);
      wordData = {};
      segmentLength = 0;
      hasSpace = false;
      hasLetter = false;
    }
    else if(list[i] != "#" && list[i] != " " && continueTraversal(crossword, i, index, mode)) {
      hasLetter = true;
      wordData[list[i]] = [i, index];
      segmentLength++;
    }
    else if(list[i] == " " && continueTraversal(crossword, i, index, mode)) {
      hasSpace = true;
      segmentLength++;
    }
    else {
      wordData = {};
      segmentLength = 0;
      hasSpace = false;
      hasLetter = false;
    }
  }

  if(segments.length != 0) {
    return segments;
  }
  else {
    return undefined;
  }
}