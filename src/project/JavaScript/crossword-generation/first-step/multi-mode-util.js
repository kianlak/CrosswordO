/** Retrieve a word to be used at the center of the crossword
 * @param {object} crossword The crossword used
 * @returns {string} The chosen word
 */
function getRandomCenterWord(crossword) {
  let word;

  while(word == undefined) {
    let wordLength = Math.floor(Math.random() * (crossword.sideLength - 3 + 1) + 3) | 1;
    let words = getWordsByLength(wordLength);

    if(words != undefined) {
      word = words[Math.floor(Math.random() * words.length)];
    }
  }

  return word;

  /** Get collection of words that meet the length criteria
   * @param {number} length Length of the word
   * @returns {string[]} List of words that fit the length criteria
   */
  function getWordsByLength(length) {
    let words = [];

    for(const index in DICTIONARY) {
      let word = getWord(index);

      if(word.length == length) {
        words.push(word);
      }
    }

    return words;
  }
}

/** Inserts words into the crossword with black boxes as required
 * @param {object} crossword The crossword used
 * @param {string} word Word to insert
 * @param {number} row Starting row
 * @param {number} column Starting column
 * @param {string} mode Insertion mode of word
 */
function insertCenterWordIntoCrossword(crossword, word, row, column, mode) {
  if(mode == insertMode.ACROSS) {
    if((column - 1) >= 0) {
      insertBlackBoxes(crossword, row, (column - 1))
    }

    insertCenterAcrossWordIntoCrossword(crossword, word, row, column)
  }
  else {
    if((row - 1) >= 0) {
      insertBlackBoxes(crossword, (row - 1), column)
    }

    insertCenterDownWordIntoCrossword(crossword, word, row, column)
  }
}

/** Inserts words with insertion mode across into the crossword
 * @param {object} crossword The crossword used
 * @param {string} word Word to insert
 * @param {number} row Starting row
 * @param {number} column Starting column
 */
function insertCenterAcrossWordIntoCrossword(crossword, word, row, column) {
  for(let i = 0; i < word.length; i++) {
    crossword.setElementIntoGrid(row, (column + i), word[i].toUpperCase());
    
    if(crossword.directionGrid[row][column + i] == insertMode.NONE) {
      crossword.setElementIntoDirectionGrid(row, (column + i), insertMode.ACROSS);
    }
    else {
      crossword.setElementIntoDirectionGrid(row, (column + i), insertMode.ACROSSANDDOWN);
    }
  }
}

/** Inserts words with insertion mode down into the crossword
 * @param {object} crossword The crossword used
 * @param {string} word Word to insert
 * @param {number} row Starting row
 * @param {number} column Starting column
 */
function insertCenterDownWordIntoCrossword(crossword, word, row, column) {
  for(let i = 0; i < word.length; i++) {
    crossword.setElementIntoGrid((row + i), column, word[i].toUpperCase());
    
    if(crossword.directionGrid[row + i][column] == insertMode.NONE) {
      crossword.setElementIntoDirectionGrid((row + i), column, insertMode.DOWN);
    }
    else {
      crossword.setElementIntoDirectionGrid((row + i), column, insertMode.ACROSSANDDOWN);
    }
  }
}