/** Checks progress and sends crossword to be updated depending on progress
 * @param {object} crossword The crossword instance being used 
 */
function workOnCrossword(crossword) {
  if(crossword.progress == 0) { 
    firstStepCrossword(crossword);

    crossword.updateProgress();
  }
}

function firstStepCrossword(crossword) {
  if(crosswordCenterIsBlackBox()) {
    let mode = randomlySelectCenterBlackBoxMode();

    crossword.setElementIntoGrid(crossword.halfPoint, crossword.halfPoint, "#");

    if(mode == centerBlackBoxMode.FILLEDAROUNDCENTER) {
      firstStepFilledAroundCenter(crossword);
      console.log("FILLED AROUND CENTER")
    }
    else if(mode == centerBlackBoxMode.FILLEDACROSS) {
      firstStepFilledAcrossCenter(crossword);
      console.log("FILLED ACROSS CENTER");  
    }
    else if(mode == centerBlackBoxMode.FILLEDDOWN) {
      firstStepFilledDownCenter(crossword);
      console.log("FILLED DOWN CENTER");  
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