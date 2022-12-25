/** Chooses a random word fitting of the crossword puzzle
 * @param {string[]} words Collection of all words
 * @param {number} SIDE_LENGTH Holds the sides length of the crossword
 * @returns {string} Returns randomly selected word
 */
function getRandomWord(words, SIDE_LENGTH) {
    let list_size = words.length;
    let word_index; // Index of given word from the words list

    while(true) {
        word_index = Math.floor(Math.random() * (list_size + 1));   // Randomly chooses a word from the entire list

        // Makes sure that random word can be used based on the SIDE_LENGTH of the crossword grid
        if(words[word_index].length <= SIDE_LENGTH) {
            return(words[word_index]);
        }
    }
}

/** Chooses a word of the same length as string in paramters
 * @param {string} word A word
 * @returns {string} Returns a word of the same length as paramters
 */
function getSameLengthWord(word) {
    let word2Choices = WORDS.filter(w => w.length === word.length);
    return word2Choices[Math.floor(Math.random() * word2Choices.length)];
}

/** Creates a JSON Data Object to be stored into the crosswords wordJSONData list
 * @param {number} id Unique number for each insertion into wordJSONData
 * @param {string} word Word being stored
 * @param {string} definition Words definition
 * @param {char} insertionType The way the word is being inserted into the crossword (e.i. Across: 'A', Down: 'D') 
 */
function createWordJSONData(id, word, definition, insertionType) {
    let wordDataSetUp = {
        id: id,
        word: word,
        clue: definition,
        insertType: insertionType
    };

    wordJSONData.push(wordDataSetUp);
}

function findWordToFit(row, column, intersectingRow, direction, crossword, directionGrid, SIDE_LENGTH) {
    let wordLength;
    let letterAtIntersection = crossword[intersectingRow][column];

    for(let i = intersectingRow + 1; i < SIDE_LENGTH; i++) {
        if(crossword[i][column] != 0) {
            if(crossword[i][column] != '#') {
                wordLength = (i - 2) - row;
            }
            else {
                wordLength = (i - 1) - row;
            }
            break;
        }
        else if(i == SIDE_LENGTH - 1) {
            wordLength = i - row;
        }
    }

    let words = []

    for(const element of WORDS) {
        if(element.length <= wordLength) {
            if (element.slice((intersectingRow - row), (intersectingRow - row) + 1) === letterAtIntersection) {
                words.push(element);
            }
        }
    }

    if(words.length == 0) {
        return ["", crossword, directionGrid]
    }

    let index = Math.floor(Math.random() * words.length);

    let chosenWord = words[index];

    for(let i = 0; i < chosenWord.length; i++) {
        crossword[row + i][column] = chosenWord[i];
        if(directionGrid[row + i][column] != "N") {
            directionGrid[row + i][column] = "AD";
        }
        else {
            directionGrid[row + i][column] = "D";
        }
    }
    
    return [chosenWord, crossword, directionGrid];
}

/** Returns the JSON data of the provided word
 * @param {string} word Word to retrieve JSON data for
 * @returns {object} JSON data object for the given word
 * @returns {number} Returns error number
 */
async function getWordsJSONData(word, callback) {
    return fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word + '/')
        .then(response => {
            if (!response.ok) {
                throw new Error("ERROR");
            }
            return response.json()
        }).then(responseJSON => {   
            return responseJSON;  
        }).catch(error => {
            console.log(error);

            return 404;
        })
}