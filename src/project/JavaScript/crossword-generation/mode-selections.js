/** Determines whether or not crossword center is a black box
 * @returns {boolean} Response for whether or not crossword center is a black box
 */
function crosswordCenterIsBlackBox() {
  let percentChance = Math.ceil(Math.random() * 100);
  
  /** Percent Chances
   * case1: 90% (Crossword center is not a black box)
   * case2: 10% (Crossword center is a black box)
   */
  switch(true) {
    case(percentChance <= 90):  // Case1                    
      return false;
    case(percentChance >= 91):  // Case2
      return true;
  }
}

/** Determines what mode to use for a center black box crossword
 * @returns {number} Mode to be used
 */
function randomlySelectCenterBlackBoxMode() {
  let percentChance = Math.ceil(Math.random() * 100);

  /** Percent Chances
   * case1: 70% (Top, Bottom, Left, and Right are filled)
   * case2: 15% (Across filled in the center row)
   * case3: 15% (Down filled in the center column)
   */
  switch(true) {
    case(percentChance <= 70):                        // Case 1
      return centerBlackBoxMode.FILLEDAROUNDCENTER;
    case(percentChance >= 71 && percentChance <= 85): // Case 2
      return centerBlackBoxMode.FILLEDACROSS;
    case(percentChance >= 86): // Case 3
      return centerBlackBoxMode.FILLEDDOWN;
  }
}

/** Determines what mode to use for a crosword with no center black box
 * @returns {number} Mode to be used 
 */
function randomlySelectNoCenterBlackBoxMode() {
  let percentChance = Math.ceil(Math.random() * 100);

  /** Percent Chances
   * case1: 80% (Center has insertection between across and down word)
   * case2: 10% (Center only has an across word)
   * case3: 10% (Center only has a down word)
   */
  switch(true) {
    case(percentChance <= 80):                        // Case 1         
      return noCenterBlackBoxMode.INTERSECTION;
    case(percentChance >= 81 && percentChance <= 90): // Case 2
      return noCenterBlackBoxMode.ACROSSONLY;
    case(percentChance >= 91):                        // Case 3
      return noCenterBlackBoxMode.DOWNONLY;
  }
}

/** Determines what mode to use for a crosword fill in pattern
 * @returns {number} Mode to be used 
 */
function randomlySelectFillInMode() {
  let percentChance = Math.ceil(Math.random() * 100);

  /** Percent Chances
   * case1: 10% (Top to bottom pattern)
   * case2: 10% (Left to right pattern)
   * case3: 10% (Reversed Top to bottom pattern)
   * case4: 10% (Reversed Left to right pattern)
   * case5: 30% (Random coordinate for across)
   * case6: 30% (Random coordinate for Down)
   */
  switch(true) {
    case(percentChance <= 10):                        // Case 1         
      return fillInMode.TOPTOBOTTOM;
    case(percentChance >= 11 && percentChance <= 20): // Case 2
      return fillInMode.LEFTTORIGHT;
    case(percentChance >= 21 && percentChance <= 30): // Case 3
      return fillInMode.REVERSETOPTOBOTTOM;
    case(percentChance >= 31 && percentChance <= 40): // Case 4
      return fillInMode.REVERSELEFTTORIGHT;
    case(percentChance >= 41 && percentChance <= 70): // Case 5
      return fillInMode.RANDOMACROSS;
    case(percentChance >= 71):                        // Case 6
      return fillInMode.RANDOMDOWN;
  }
}