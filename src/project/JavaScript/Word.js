class Word {
  constructor(word) {
    this.word = word;
    this.definition = getDefinition(word);
    this.startingBox = [0, 0];
  }

  /* SETTERS */
  setDefinition(definition) {
    this.definition = definition;
  }

  setStartingBox(box) {
    this.startingBox = box;
  }
}