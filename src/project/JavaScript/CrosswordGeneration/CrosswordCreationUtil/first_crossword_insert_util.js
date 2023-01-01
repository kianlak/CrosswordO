/** Gets two words for the center words (Across and Down)
 * @param {Object} crossword The crossword instance
 * @returns {string[]} The two chosen words
 */
function getRandomMiddleWords(crossword) {
  let wordAcross;
  let wordDown;

  // Get proper wordAcross
  while(wordAcross == undefined) {
    let acrossMiddleWordLength = Math.floor((Math.random() * crossword.sideLength) + 3) | 1;
    let words = getWordsForAcrossWithLength(acrossMiddleWordLength);  // List of possible words

    if(words != undefined) {
      wordAcross = words[Math.floor(Math.random() * words.length)];
    }
  }

  // Get proper wordDown
  while(wordDown == undefined) {
    let downMiddleWordLength = Math.floor((Math.random() * crossword.sideLength) + 3) | 1;
    let wordAcrossMiddleLetter = wordAcross[Math.floor(wordAcross.length / 2)];           // Gets the middle letter of wordAcross (It will intersect with wordDown)
    let words = getWordsForDownWithLength(downMiddleWordLength, wordAcrossMiddleLetter);  // List of possible words

    if(words != undefined) {
      wordDown = words[Math.floor(Math.random() * words.length)];
    }
  }

  return [wordAcross, wordDown];
  
  /* === HELPER FUNCTIONS === */

  /** Collects words based on their specified lengths for Across
   * @param {number} length Length of words to choose from
   * @returns {string[]} Collection of words
   */
  function getWordsForAcrossWithLength(length) {
    let words = [];

    for(const index in DICTIONARY) {
      let word = getWord(index);  // Gets the word
      
      // Checks if length of word matches required length
      if(word.length == length) {
        words.push(word);
      }
    }

    return words;
  }

  /** Collects words based on their specified lengths for Down
   * @param {number} length Length of words to choose from
   * @returns {string[]} Collection of words
   */
  function getWordsForDownWithLength(length, intersectingLetter) {
    let words = [];

    for(const index in DICTIONARY) {
      let word = getWord(index);  // Gets the word
      
      // Checks if length of word matches required length and if intersecting letters match
      if((word.length == length) && (word[Math.floor(word.length / 2)] == intersectingLetter)) {
        words.push(word);
      }
    }

    return words;
  }
}