function createCrossword(crossword) {
  if(crossword.progress == 0) {
    firstCrosswordInsert(crossword);
    crossword.updateProgress();
  }
}

function firstCrosswordInsert(crossword) {
  let [word1, word2] = getRandomMiddleWords(crossword);

  const wordAcross = new Word(word1);
  const wordDown = new Word(word2);

  console.log(wordAcross.word, wordAcross.definition)
  console.log(wordDown.word, wordDown.definition)
}