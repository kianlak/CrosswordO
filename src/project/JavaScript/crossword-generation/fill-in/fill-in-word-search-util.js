function returnBlankStartSingleWordFinish(crossword, segment, column) {

}

function returnBlankStartSingleWord(crossword, segment, column) {
  let startingIndex = 0, endingIndex = 0;
  let startingSegmentElementRow = parseInt(segment[0][0].match(/^[^,]*/)[0]);
  let endingSegmentElementRow = parseInt(segment[segment.length - 1][0].match(/^[^,]*/)[0]);
  let segmentLength = endingSegmentElementRow - startingSegmentElementRow + 1;
  let wordLength;
  let rangeWithinLetter = false;
  let lettersList = [[], []];

  while(!rangeWithinLetter) {
    lettersList = [[], []];

    startingIndex = Math.floor(Math.random() * (segmentLength - startingSegmentElementRow + 1) + startingSegmentElementRow);
    endingIndex = Math.floor(Math.random() * (segmentLength - startingSegmentElementRow + 1) + startingSegmentElementRow);
    wordLength = endingIndex - startingIndex + 1;
    
    if(wordLength >= 2) {
      for(let i = 0; i < wordLength - 1; i++) {
        if(crossword.grid[startingIndex + i][column] != " ") {
          console.log(crossword.grid[startingIndex + i][column])
          lettersList[0].push(crossword.grid[startingIndex + i][column]);
          lettersList[1].push(i);
        }
      }

      if(lettersList[0].length > 0) {
        rangeWithinLetter = true;
      }
    }
  }
  
  console.log(startingIndex, endingIndex, wordLength, lettersList)
  console.log("======================")
}