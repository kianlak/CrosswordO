/** Creates new Crossword Puzzle
 * @param {number} SIDE_LENGTH Length of each side of the crossword puzzle
 */
async function createNewCrosswordPuzzle(SIDE_LENGTH) {
    let crossword;
    let directionGrid;
    let isCrosswordCreationDone = false;

    [crossword, directionGrid] = await generateInitialPresets(SIDE_LENGTH);

    let i = 0;  //REMOVE ONCE DONE

    while(!isCrosswordCreationDone) {
        // Wait to see if current iteration finishes the crossword puzzle
        [crossword, directionGrid, isCrosswordCreationDone] = await crosswordCreation(crossword, directionGrid, SIDE_LENGTH);
        
        if(i == 1) {
            isCrosswordCreationDone = true;
        }
        i++;
    }

    console.log(directionGrid)
    console.log("Crossword Creation Completed");

    // FIGURE OUT ONCE DONE
    const gridData = crossword;
    function createGrid(gridData) {
        const grid = document.getElementById('grid');

        for (const element of gridData) {
            const row = element;
            const tr = document.createElement('tr');

            for (const element of row) {
                const cell = element;
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            }

            grid.appendChild(tr);
        }
    }
    createGrid(gridData);
}

// Generates empty starter date for crossword
async function generateInitialPresets(SIDE_LENGTH) {
    let crossword = [...Array(SIDE_LENGTH)].map(_e => Array(SIDE_LENGTH));      //Create an empty crossword puzzle
    let directionGrid = [...Array(SIDE_LENGTH)].map(_e => Array(SIDE_LENGTH));  //Create an empty direction grid for the crossword puzzle

    // Fills in crossword with empty data
    for(const element of crossword) {
        element.fill('0');
    }

    // Fills in directionGrid with empty data
    for(const element of directionGrid) {
        element.fill('N');
    }

    return [crossword, directionGrid]
}