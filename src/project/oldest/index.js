/** Creates new Crossword Puzzle
 * @param {number} SIDE_LENGTH The dimensions for the crossword
 */
async function createNewCrosswordPuzzle(SIDE_LENGTH) {
    let crossword = [...Array(SIDE_LENGTH)].map(_e => Array(SIDE_LENGTH));  //Create an empty crossword puzzle
    let crosswordDirection = [...Array(SIDE_LENGTH)].map(_e => Array(SIDE_LENGTH));  //Create an empty direction grid

    for(const element of crossword) {
        element.fill('0');
    }

    for(const element of crosswordDirection) {
        element.fill('N');
    }

    let isCrosswordCreationDone = false;

    let i = 0;
    //Keeps the crossword puzzle creation going until it is finished
    while(!isCrosswordCreationDone) {
        [crossword, isCrosswordCreationDone] = await crosswordCreation(crossword);
        if(i == 1) {
            isCrosswordCreationDone = true;
        }
        console.log(i, "ITERATION")
        i++;
    }

    console.log("Crossword Creation Completed");

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
