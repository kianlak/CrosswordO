class Crossword {
  constructor(sideLength) {
		// Constants
    this.sideLength = sideLength;
		this.midPoint = Math.trunc(sideLength / 2) + 1;
    this.area = sideLength ** 2;

		this.progress = 0;
		this.grid = new Array(this.sideLength).fill().map(() => Array(this.sideLength).fill(''));
		this.directionGrid = new Array(this.sideLength).fill().map(() => Array(this.sideLength).fill(''));
  }
	
	/* METHODS */

	/** Updates the current Crossword puzzle progress
	 * @returns {number} Percentage of blocks filled
	 */
	updateProgress() {
		let filledBoxes = 0;

		// Checks amount of blocks that are filled
		for(const row of this.grid) {
			for(const element of row) {
				if(element != '') {
					filledBoxes++;
				}
			}
		}

		this.setProgress(filledBoxes / this.area);	// Sets the new progress percentage
		return this.progress;
	}

	/* SETTERS */
	setProgress(progress) {
		this.progress = progress;
	}
}