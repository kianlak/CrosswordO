function insertBlackBoxes(crossword, row, column) {
  crossword.setElementIntoGrid(row, column, "#");
  [row, column] = symmetricalCoordinates(crossword, row, column);
  crossword.setElementIntoGrid(row, column, "#");
}

function symmetricalCoordinates(crossword, row, column) {
  row = (crossword.sideLength - 1) - row;
  column = (crossword.sideLength - 1) - column;

  return [row, column];
}