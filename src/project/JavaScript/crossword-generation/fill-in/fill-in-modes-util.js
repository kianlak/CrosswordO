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
    
    return !(row + 1 < crossword.sideLength && crossword.directionGrid[row + 1][column] == "AD" || row + 1 < crossword.sideLength && crossword.directionGrid[row + 1][column] == "D");
  }
}

function downWordsSegmenting(crossword, list, index, mode) {
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
    }
  }

  if(segments.length != 0) {
    return segments;
  }
  else {
    return undefined;
  }
}

function processSegments(crossword, segments, column) {
  for(let segment = 0; segment < segments.length; segment++) {
    chooseRandomWordToInsert(crossword, Object.entries(segments[segment]), column);
  }
}

function chooseRandomWordToInsert(crossword, segment, column) {
  let typeCounter = 0;

  if(segment[0][1] == " ") {
    for(const element of segment) {
      if(element[1] != " ") {
        typeCounter++;
      }
    }

    if(typeCounter == 1 && segment[segment.length - 1][1] == " ") {
      returnBlankStartSingleWord(crossword, segment, column);
    }
    else if(typeCounter == 1 && segment[segment.length - 1][1] != " ") {
      returnBlankStartSingleWordFinish(crossword, segment, column);
    }
    else {
    }
  }
  else {

  }
}

// let result = segment[0][0].match(/^[^,]*/);
// console.log(result[0]); 