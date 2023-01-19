/** Checks progress and sends crossword to be updated depending on progress
 * @param {object} crossword The crossword instance being used 
 */
function workOnCrossword(crossword) {
  if(crossword.progress == 0) { 
    firstStepCrossword(crossword);

    crossword.updateProgress();
  }
  else {
    fillInCrossword(crossword);

    crossword.updateProgress();
    if(crossword.progress >= 0.50) {
      crossword.setProgress(1)
    }
  }
}

function firstStepCrossword(crossword) {
  if(crosswordCenterIsBlackBox()) {
    let mode = randomlySelectCenterBlackBoxMode();

    crossword.setElementIntoGrid(crossword.halfPoint, crossword.halfPoint, "#");

    if(mode == centerBlackBoxMode.FILLEDAROUNDCENTER) {
      firstStepFilledAroundCenter(crossword);
    }
    else if(mode == centerBlackBoxMode.FILLEDACROSS) {
      firstStepFilledAcrossCenter(crossword);
    }
    else if(mode == centerBlackBoxMode.FILLEDDOWN) {
      firstStepFilledDownCenter(crossword);
    }
  }
  else {
    let mode = randomlySelectNoCenterBlackBoxMode();

    if(mode == noCenterBlackBoxMode.INTERSECTION) {
      firstStepIntersectionMode(crossword);
    }
    else if(mode == noCenterBlackBoxMode.ACROSSONLY) {
      firstStepAcrossOnlyMode(crossword);
    }
    else {
      firstStepDownOnlyMode(crossword);
    }
  }
}

function fillInCrossword(crossword) {
  let mode = randomlySelectFillInMode();

  if(mode == fillInMode.TOPTOBOTTOM) {
    fillInTopToBottom(crossword);
  }
  else if(mode == fillInMode.LEFTTORIGHT) {
    fillInLeftToRight(crossword);
  }
  else if(mode == fillInMode.RANDOMACROSS) {
    fillInRandomAcross(crossword);
  }
  else {
    fillInRandomDown(crossword);
  }
}