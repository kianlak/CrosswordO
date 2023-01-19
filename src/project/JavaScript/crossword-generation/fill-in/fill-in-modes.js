function fillInTopToBottom(crossword) {
  let segmentCollection = [];

  for(let column = 0; column < crossword.sideLength; column++) {
    let rowList = [];

    for(let row = 0; row < crossword.sideLength; row++) {
      rowList.push(crossword.grid[row][column]);
    }

    segmentCollection.push(downWordSegmenting(crossword, rowList, column, insertMode.DOWN));

    if(segmentCollection[segmentCollection.length - 1] != undefined && Math.floor(Math.random() * 2) == 1) {
      processSegments(crossword, segmentCollection[segmentCollection.length - 1], column, insertMode.DOWN);
    }
  }
}

function fillInLeftToRight(crossword) {
  let segmentCollection = [];

  for(let row = 0; row < crossword.sideLength; row++) {
    let columnList = [];

    for(let column = 0; column < crossword.sideLength; column++) {
      columnList.push(crossword.grid[row][column]);
    }

    segmentCollection.push(acrossWordSegmenting(crossword, columnList, row, insertMode.ACROSS));

    if(segmentCollection[segmentCollection.length - 1] != undefined && Math.floor(Math.random() * 2) == 1) {
      processSegments(crossword, segmentCollection[segmentCollection.length - 1], row, insertMode.ACROSS);
    }
  }
}

function fillInRandomAcross(crossword) {
  let row = Math.floor(Math.random() * crossword.sideLength);
  let segmentCollection = [];
  let columnList = [];

  for(let column = 0; column < crossword.sideLength; column++) {
    columnList.push(crossword.grid[row][column]);
  }

  segmentCollection.push(acrossWordSegmenting(crossword, columnList, row, insertMode.ACROSS));

  if(segmentCollection[segmentCollection.length - 1] != undefined && Math.floor(Math.random() * 2) == 1) {
    processSegments(crossword, segmentCollection[segmentCollection.length - 1], row, insertMode.ACROSS);
  }
}

function fillInRandomDown(crossword) {
  let column = Math.floor(Math.random() * crossword.sideLength);
  let segmentCollection = [];
  let rowList = [];

  for(let row = 0; row < crossword.sideLength; row++) {
    rowList.push(crossword.grid[row][column]);
  }

  segmentCollection.push(downWordSegmenting(crossword, rowList, column, insertMode.DOWN));
  
  if(segmentCollection[segmentCollection.length - 1] != undefined && Math.floor(Math.random() * 2) == 1) {
    processSegments(crossword, segmentCollection[segmentCollection.length - 1], column, insertMode.DOWN);
  }
}