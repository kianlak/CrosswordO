/** Returns a word from the dictionary
 * @param {number} index Index of word from dictionary
 * @returns {string} The word 
*/
function getWord(index) {
  return DICTIONARY[index].match(/^[^:]+/)[0];
}

/** Returns the definition of a word from the dictionary
 * @param {string} word Word to be defined
 * @returns {string} The definition
*/
function getDefinition(word) {
  for(const index in DICTIONARY) {
    if(getWord(index).toLowerCase() == word.toLowerCase()) {
      return DICTIONARY[index].match(/:\s*(.+)/)[1];
    }
  }
}