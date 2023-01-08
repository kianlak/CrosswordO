/** Inserts black boxes at the start and end of words
 * @param {object} crossword The crossword being used
 * @param {number} row Row of first letter
 * @param {number} column Column of first letter
 */
function insertBlackBoxes(crossword, row, column) {
  crossword.setElementIntoGrid(row, column, "#");
  [row, column] = symmetricalCoordinates(crossword, row, column);
  crossword.setElementIntoGrid(row, column, "#");
}

/** Finds the symmetrical coordinates
 * @param {object} crossword The crossword being used
 * @param {number} row Row used to find symmetrical row
 * @param {number} column Column used to find symmetrical column
 * @returns {number[]} Symmetrical coordinates
 */
function symmetricalCoordinates(crossword, row, column) {
  row = (crossword.sideLength - 1) - row;
  column = (crossword.sideLength - 1) - column;

  return [row, column];
}

/** Determines whether crossword will have a black box center
 * @returns {boolean} Whether or not the crossword has a black box center
 */
function crosswordCenterIsBlackBox() {
  let percentChance = Math.ceil(Math.random() * 100);
  
  /* Percent Chances
  * truth: 10% (Crossword has a black box center)
  * false: 90% (Crossword does not have a black box center)
  */
  return percentChance <= 10 ? true : false;
}

/** Determines whether crossword will have have insertion mode ACROSS or DOWN
 * @returns {enum} Insertion mode selected
 */
function randomlySelectInsertionMode() {
  let percentChance = Math.floor(Math.random() * 2);
  
  /* Percent Chances
  * ACROSS: 50%
  * DOWN: 50%
  */
  return percentChance == 0 ? insertMode.ACROSS : insertMode.DOWN;
}