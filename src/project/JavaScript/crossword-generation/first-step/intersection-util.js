/** Gets a down word that has the correct intersecting letter as wordAcross
 * @param {object} crossword The crossword used
 * @param {string} wordAcross The intersecting word
 * @returns {string} The chosen word
 */
function getRandomCenterIntersectionDownWord(crossword, wordAcross) {
  let wordDown;

  while(wordDown == undefined) {
    let downWordLength = Math.floor(Math.random() * (crossword.sideLength - 3 + 1) + 3) | 1;
    let wordAcrossMiddleLetter = wordAcross[Math.floor(wordAcross.length / 2)];
    let words = getWordsForCenterDownWithLength(downWordLength, wordAcrossMiddleLetter);

    if(words != undefined) {
      wordDown = words[Math.floor(Math.random() * words.length)];
    }
  }
  
  return wordDown;

  /** Finds a list of words that have the same intersecting letter as wordAcross
   * @param {*} length Length of word
   * @param {*} intersectingLetter Intersecting letter
   * @returns {string[]} List of possible words
   */
  function getWordsForCenterDownWithLength(length, intersectingLetter) {
    let words = [];
    
    for(const index in DICTIONARY) {
      let word = getWord(index);
      
      if((word.length == length) && (word[Math.floor(word.length / 2)] == intersectingLetter)) {
        words.push(word);
      }
    }

    return words;
  }
}