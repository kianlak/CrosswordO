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