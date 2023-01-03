function firstStepFilledAroundCenter(crossword) {
  let startingBox, rangeOfPossibleIndex;
  let acrossWord1, acrossWord2, downWord1, downWord2;
  let boxesAvailableForWord = (crossword.sideLength - 1) / 2;

  [acrossWord1, acrossWord2] = getRandomFilledAroundCenterWord(crossword, boxesAvailableForWord);
  [downWord1, downWord2] = getRandomFilledAroundCenterWord(crossword, boxesAvailableForWord);

  if(boxesAvailableForWord - acrossWord1.length == 0) {
    rangeOfPossibleIndex = boxesAvailableForWord - acrossWord1.length;
  }
  else {
    rangeOfPossibleIndex = boxesAvailableForWord - acrossWord1.length + 1;
  }

  startingBox = Math.floor(Math.random() * rangeOfPossibleIndex);

  console.log(acrossWord1, acrossWord2, downWord1, downWord2, startingBox, rangeOfPossibleIndex)

  firstStepWordsInsertIntoCrossword(crossword, acrossWord1, acrossWord2, crossword.halfPoint, startingBox, insertMode.ACROSS);

  startingBox = Math.floor(Math.random() * rangeOfPossibleIndex);
  firstStepWordsInsertIntoCrossword(crossword, downWord1, downWord2, startingBox, crossword.halfPoint, insertMode.DOWN);
}