function returnLetterStart(crossword, segment, column, mode) {
  // let startingIndex = 0, endingIndex = 0;
  // let startingSegmentElementRow = parseInt(segment[0][0].match(/^[^,]*/)[0]);
  // let endingSegmentElementRow = parseInt(segment[segment.length - 1][0].match(/^[^,]*/)[0]);
  // let segmentLength = endingSegmentElementRow - startingSegmentElementRow;
  // let wordLength;
  // let rangeWithinLetter = false;
  // let lettersList = [[], []];
  // let attempts = 0;

  // while(!rangeWithinLetter && attempts < 4) {
  //   console.log(attempts)

  //   lettersList = [[], []];

  //   startingIndex = Math.floor(Math.random() * (segmentLength - startingSegmentElementRow + 1) + startingSegmentElementRow);
  //   endingIndex = Math.floor(Math.random() * (endingSegmentElementRow - startingIndex) + startingIndex);
  //   wordLength = endingIndex - startingIndex + 1;
    
  //   if(wordLength >= 2) {
  //     for(let i = 0; i < wordLength - 1; i++) {
  //       if(crossword.grid[startingIndex + i][column] != " ") {
  //         lettersList[0].push(crossword.grid[startingIndex + i][column]);
  //         lettersList[1].push(i);
  //       }
  //     }

  //     if(lettersList[0].length > 0) {
  //       rangeWithinLetter = true;
  //     }
  //     else {
  //       attempts++;
  //     }
  //   }
  // }

  // if(lettersList[0].length > 0) {
  //   getFittingWords(crossword, startingIndex, endingIndex, column, wordLength, lettersList, mode);
  // }
}

function returnBlankStartDownWord(crossword, segment, column, mode) {
  let startingIndex = 0, endingIndex = 0;
  let startingSegmentElementRow = parseInt(segment[0][0].match(/^[^,]*/)[0]);
  let endingSegmentElementRow = parseInt(segment[segment.length - 1][0].match(/^[^,]*/)[0]);
  let segmentLength = endingSegmentElementRow - startingSegmentElementRow;
  let wordLength;
  let rangeWithinLetter = false;
  let lettersList = [[], []];
  let attempts = 0;

  while(!rangeWithinLetter && attempts < 4) {

    lettersList = [[], []];

    startingIndex = Math.floor(Math.random() * (segmentLength - startingSegmentElementRow + 1) + startingSegmentElementRow);
    endingIndex = Math.floor(Math.random() * (endingSegmentElementRow - startingIndex) + startingIndex);
    wordLength = endingIndex - startingIndex + 1;
    
    if(wordLength >= 2) {
      for(let i = 0; i < wordLength - 1; i++) {
        if(crossword.grid[startingIndex + i][column] != " ") {
          lettersList[0].push(crossword.grid[startingIndex + i][column]);
          lettersList[1].push(i);
        }
      }

      if(lettersList[0].length > 0) {
        rangeWithinLetter = true;
      }
      else {
        attempts++;
      }
    }
  }

  if(lettersList[0].length > 0) {
    getFittingWords(crossword, startingIndex, endingIndex, column, wordLength, lettersList, mode);
  }
}

function returnBlankStartAcrossWord(crossword, segment, row, mode) {
  let startingIndex = 0;
  let endingIndex = 0;
  let startingSegmentElementColumn = parseInt(segment[0][0].match(/,(.*)/)[1]);
  let endingSegmentElementColumn = parseInt(segment[segment.length - 1][0].match(/,(.*)/)[1]);
  let segmentLength = endingSegmentElementColumn - startingSegmentElementColumn;
  let wordLength = 0;
  let rangeWithinLetter = false;
  let lettersList = [[], []];
  let attempts = 0;
  
  while(!rangeWithinLetter && attempts < 4) {
    lettersList = [[], []];

    // startingIndex = () => Math.random()*4;

    startingIndex = Math.floor(Math.random() * (segmentLength - startingSegmentElementColumn + 1) + startingSegmentElementColumn);
    endingIndex = Math.floor(Math.random() * (endingSegmentElementColumn - startingIndex) + startingIndex);
    wordLength = endingIndex - startingIndex + 1;
    
    if(wordLength >= 2) {
      for(let i = 0; i < wordLength; i++) {
        if(crossword.grid[row][startingIndex + i] != " ") {
          lettersList[0].push(crossword.grid[row][startingIndex + i]);
          lettersList[1].push(i);
        }
      }

      if(lettersList[0].length > 0) {
        rangeWithinLetter = true;
      }
      else {
        attempts++;
      }
    }
  }

  if(lettersList[0].length > 0) {
    getFittingWords(crossword, startingIndex, endingIndex, row, wordLength, lettersList, mode);
  }
}