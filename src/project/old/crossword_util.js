/** Checks progress done on the crossword
 * @param {any[][]} crossword Crosswords current state
 * @param {number} AREA_OF_CROSSWORD Holds the area of the crossword
 * @returns {number} Percentage of puzzle done (Decimal form)
 */
function checkProgress(crossword, SIDE_LENGTH) {
    const AREA_OF_CROSSWORD = Math.pow(SIDE_LENGTH, 2);

    let spotsFilled = 0;

    // Finds number of non-empty spots
    for(const row of crossword) {
        for(const indexContent of row) {
            if(indexContent != '0') {
                spotsFilled++;
            }
        }
    }

    return spotsFilled / AREA_OF_CROSSWORD;
}

// Randomly selects Across or Down insertion
function randomDirectionSelection(determiningValue) {
    if(determiningValue % 2 == 0) {
        return "A";
    }
    else {
        return "D";
    }
}

function directionIsValid(direction) {

}