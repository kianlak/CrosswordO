/** Implements the intersection mode onto the crossword
 * @param {object} crossword The crossword to be modified
 */
function firstStepIntersectionMode(crossword) {
  let word1 = getRandomCenterWord(crossword);
  let word2 = getRandomCenterIntersectionDownWord(crossword, word1);
  let startingBoxRow, startingBoxColumn;

  startingBoxColumn = (crossword.sideLength - word1.length) / 2;

  insertCenterWordIntoCrossword(crossword, word1, crossword.halfPoint, startingBoxColumn, insertMode.ACROSS);
  crossword.addToWords(word1, crossword.halfPoint, startingBoxColumn, insertMode.ACROSS);

  startingBoxRow = (crossword.sideLength - word2.length) / 2;

  insertCenterWordIntoCrossword(crossword, word2, startingBoxRow, crossword.halfPoint, insertMode.DOWN);

  crossword.addToWords(word2, startingBoxRow, crossword.halfPoint, insertMode.DOWN);
}

/** Implements the across only mode onto the crossword
 * @param {object} crossword The crossword to be modified
 */
function firstStepAcrossOnlyMode(crossword) {
  let word = getRandomCenterWord(crossword);
  let startingBox;

  startingBox = (crossword.sideLength - word.length) / 2;

  insertCenterWordIntoCrossword(crossword, word, crossword.halfPoint, startingBox, insertMode.ACROSS);
  insertBlackBoxes(crossword, (crossword.halfPoint + 1), crossword.halfPoint);
  
  crossword.addToWords(word, crossword.halfPoint, startingBox, insertMode.ACROSS);
}

/** Implements the down only mode onto the crossword
 * @param {object} crossword The crossword to be modified
*/
function firstStepDownOnlyMode(crossword) {
  let word = getRandomCenterWord(crossword);
  let startingBox;
  
  startingBox = (crossword.sideLength - word.length) / 2;
  
  insertCenterWordIntoCrossword(crossword, word, startingBox, crossword.halfPoint, insertMode.DOWN);
  insertBlackBoxes(crossword, crossword.halfPoint, (crossword.halfPoint + 1));

  crossword.addToWords(word, startingBox, crossword.halfPoint, insertMode.DOWN);
}