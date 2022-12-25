// Works on Crossword Creation
async function crosswordCreation(crossword, directionGrid, SIDE_LENGTH) {
    let boardProgress = checkProgress(crossword, SIDE_LENGTH);  // Gets crossword completion progress

    if(boardProgress == 0) {    // First inputs
        [crossword, directionGrid] = await firstInsertIntoCrossword(crossword, directionGrid, SIDE_LENGTH);
        return [crossword, directionGrid, false]
    }
    else if(boardProgress != 1 || boardProgress != 0) { // Adding inptus
        [crossword, directionGrid] = await populateCrossword(crossword, directionGrid, boardProgress, SIDE_LENGTH);
        
        return [crossword, directionGrid, false];
    }
    else if(boardProgress == 1) {   //Done
        return [crossword, directionGrid, true];
    }
}


/** Inserts first word into the crossword
 * @param {any[][]} crossword Crosswords current state
 * @returns {any[][]} Updated crossword
 */
async function firstInsertIntoCrossword(crossword, directionGrid, SIDE_LENGTH) {
    /** Inserts black block into correct position in crossword to keep symmetry
     * @param //Work on
     * @returns {any[][]} Updated crossword
     */
    function blackBlockSymmetry(crossword, row, column, SIDE_LENGTH) {
        crossword[SIDE_LENGTH - row - 1][SIDE_LENGTH - column - 1] = '#'
        return crossword;
    }
    
    let word1 = getRandomWord(WORDS, SIDE_LENGTH);
    let word2 = getSameLengthWord(word1, WORDS);
    let [word1JSONData, word2JSONData] = await Promise.all([getWordsJSONData(word1), getWordsJSONData(word2)]);
    let definitionOfWord1 = word1JSONData[0]['meanings'][0]['definitions'][0]['definition'];
    let definitionOfWord2 = word2JSONData[0]['meanings'][0]['definitions'][0]['definition'];
    let row = Math.floor(Math.random() * (Math.trunc(SIDE_LENGTH / 2) + 1));
    let column = Math.floor(Math.random() * (SIDE_LENGTH - word1.length));
    let blackBlockInsert = true;

    createWordJSONData(1, word1, definitionOfWord1, 'A');
    createWordJSONData(2, word2, definitionOfWord2, 'A');

    // Goes through every index of the word length to put individual letters into crossword
    for(let i = 0; i < word1.length; i++) {
        if((column - 1) >= 0 && blackBlockInsert) { // Checks if a black block is necessary on the leftmost of the first index of the word
            crossword[row][column - 1] = '#';
            
            if((row != 7 && SIDE_LENGTH == 15) || (row != 10 && SIDE_LENGTH == 21)) {   // Checks if word is being put into middle of the crossword
                crossword = blackBlockSymmetry(crossword, row, (column - 1), SIDE_LENGTH);
            }
            blackBlockInsert = false;
        }
        else if((word1.length - 1) == i && (column + i + 1) <= (SIDE_LENGTH - 1)) { // Checks if a black block is necessary on the rightmost of the last index of the word
            crossword[row][column + i + 1] = '#';
            
            if((row != 7 && SIDE_LENGTH == 15) || (row != 10 && SIDE_LENGTH == 21)) {   // Checks if word is being put into middle of the crossword
                blackBlockSymmetry(crossword, row, (column + i + 1), SIDE_LENGTH)
            }
        }
        
        crossword[row][column + i] = word1[i];  // Inserts letter into the correct index
        directionGrid[row][column + i] = "A";

        if((row != 7 && SIDE_LENGTH == 15) || (row != 10 && SIDE_LENGTH == 21)) {   // Checks if word is being put into middle of the crossword
            crossword[SIDE_LENGTH - row - 1][SIDE_LENGTH - column - i - 1] = word2[word1.length - i - 1];   // Inserts letter into the correct index
            directionGrid[SIDE_LENGTH - row - 1][SIDE_LENGTH - column - i - 1] = "A";
        }
    }
    return [crossword, directionGrid];
}

async function populateCrossword(crossword, directionGrid, directionRandomizerValue, SIDE_LENGTH) {
    let row = Math.floor(Math.random() * SIDE_LENGTH);
    let column = Math.floor(Math.random() * SIDE_LENGTH);
    let direction = randomDirectionSelection(directionRandomizerValue * 100);

    if(crossword[row][column] == '0') {
        for(let i = row; i < SIDE_LENGTH; i++) {
            if(crossword[i][column] != 0 && crossword[i][column] != '#') {
                [word, crossword, directionGrid] = findWordToFit(row, column, i, direction, crossword, directionGrid, SIDE_LENGTH);
            }
        }
    }

    return [crossword, directionGrid];
}