function createCrossword(crossword) {
  if(crossword.progress == 0) { 
    firstStepCrossword(crossword);

    crossword.updateProgress();
  }
}

/* TO DO
  Put for loops into own functions

  Create random instances of middle and non middle

  Create fill rest of row and rest of column functions
*/

function firstStepCrossword(crossword) {
  if(crosswordCenterIsBlackBox()) {
    let mode = randomlySelectCenterBlackBoxMode();

    crossword.setElementIntoGrid(crossword.halfPoint, crossword.halfPoint, "#");

    // WIP
    if(mode == centerBlackBoxMode.FILLEDAROUNDCENTER) {
      //WIP
    }
    else if(mode == centerBlackBoxMode.ACROSSVERTICALTOCENTER) {
      //WIP
    }
    else {
      //WIP
    }
  }
  else {
    let mode = randomlySelectNoCenterBlackBoxMode();

    // WIP
    if(mode == noCenterBlackBoxMode.INTERSECTION) {
      firstStepIntersectionMode(crossword);
    }
    else if(mode == noCenterBlackBoxMode.ACROSSONLY) {
      //WIP
    }
    else {
      //WIP
    }
  }
}