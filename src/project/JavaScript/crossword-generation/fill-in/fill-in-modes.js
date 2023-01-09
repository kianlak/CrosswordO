function fillInTopToBottom(crossword) {
  let possibleWords = {};
  let data = [];

  for(let column = 0; column < crossword.sideLength; column++) {
    let rowList = [];

    for(let row = 0; row < crossword.sideLength; row++) {
      rowList.push(crossword.grid[row][column]);
    }

    data.push(possibleDownWords(crossword, rowList, column, insertMode.DOWN));
  }

  console.log(data);

  for(let column = 0; column < crossword.sideLength; column++) {
    
  }
}