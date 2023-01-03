/** Checks progress and sends crossword to be updated depending on progress
 * @param {object} crossword The crossword instance being used 
 */
function workOnCrossword(crossword) {
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
      firstStepFilledAroundCenter(crossword);
      console.log("FILLEDAROUNDCENTER")
    }
    else if(mode == centerBlackBoxMode.FILLEDACROSS) {
      // WIP
    }
    else if(mode == centerBlackBoxMode.FILLEDDOWN) {
      // WIP
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

    if(mode == noCenterBlackBoxMode.INTERSECTION) {
      firstStepIntersectionMode(crossword);
      console.log("INTERSECTION")
    }
    else if(mode == noCenterBlackBoxMode.ACROSSONLY) {
      firstStepAcrossOnlyMode(crossword);
      console.log("ACROSS ONLY")
    }
    else {
      firstStepDownOnlyMode(crossword);
      console.log("DOWN ONLY")
    }
  }
}