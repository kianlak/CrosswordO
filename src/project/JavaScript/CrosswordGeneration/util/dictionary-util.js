function getWord(index) {
  return DICTIONARY[index].match(/^[^:]+/)[0];
}

function getDefinition(word) {
  for(const index in DICTIONARY) {
    if(getWord(index) == word) {
      return DICTIONARY[index].match(/:\s*(.+)/)[1];
    }
  }
}