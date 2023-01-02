class Word {
  constructor(word, row, column, mode) {
    this.word = word.toUpperCase();
    this.definition = getDefinition(word);
    this.direciton = mode;
    this.clueNumber = 0;
    this.startingBox = [row, column];
  }

  /* SETTERS */
  setDefinition(definition) {
    this.definition = definition;
  }

  setStartingBox(row, column) {
    this.startingBox[0] = row;
    this.startingBox[1] = column;
  }

  setClueNumber(clueNumber) {
    this.clueNumber = clueNumber;
  }
}