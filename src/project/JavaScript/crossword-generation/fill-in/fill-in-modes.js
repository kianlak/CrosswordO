function fillInTopToBottom(crossword) {
  let segmentCollection = [];

  for(let column = 0; column < crossword.sideLength; column++) {
    let rowList = [];

    for(let row = 0; row < crossword.sideLength; row++) {
      rowList.push(crossword.grid[row][column]);
    }

    segmentCollection.push(downWordsSegmenting(crossword, rowList, column, insertMode.DOWN));

    if(segmentCollection[segmentCollection.length - 1] != undefined) {
      processSegments(crossword, segmentCollection[segmentCollection.length - 1], column);
    }
  }
}