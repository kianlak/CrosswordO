class Crossword {
  constructor(sideLength) {
    this.sideLength = sideLength;
		this.halfPoint = Math.floor(Math.trunc(sideLength / 2));
    this.area = sideLength ** 2;

		this.progress = 0;
		this.grid = new Array(this.sideLength).fill().map(() => Array(this.sideLength).fill(" "));
		this.directionGrid = new Array(this.sideLength).fill().map(() => Array(this.sideLength).fill(insertMode.NONE));
		this.words = [];
  }
	
	/* METHODS */

	updateProgress() {
		let filledBoxes = 0;

		for(const row of this.grid) {
			for(const element of row) {
				if(element != '') {
					filledBoxes++;
				}
			}
		}

		this.setProgress(filledBoxes / this.area);
		return this.progress;
	}

	//FINSISH THIS LATER
	// sortClueNumbers() {
	// 	let clueNumber = 1;

	// 	this.words.sort((word1, word2) => word1.startingBox[1] - word2.startingBox[1]);
	// }

	addToWords(word, row, column, mode) {
		this.words.push(new Word(word, row, column, mode));
	}

	/* SETTERS */
	setProgress(progress) {
		this.progress = progress;
	}

	setElementIntoGrid(row, column, element) {
		this.grid[row][column] = element;
	}

	setElementIntoDirectionGrid(row, column, element) {
		this.directionGrid[row][column] = element;
	}
}