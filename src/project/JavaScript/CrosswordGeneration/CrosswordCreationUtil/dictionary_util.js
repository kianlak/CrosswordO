/** Returns the word from the Dictionary
 * @param {number} index Index of the word in the dictionary 
 * @returns {string} The word
 */
function getWord(index) {
  return DICTIONARY[index].match(/^[^:]+/)[0];
}

/** Returns the definition from the Dictionary
 * @param {string} word Word to be defined 
 * @returns {string} The definition
 */
function getDefinition(word) {
  for(const index in DICTIONARY) {
    if(getWord(index) == word) {
      return DICTIONARY[index].match(/:\s*(.+)/)[1];
    }
  }
}