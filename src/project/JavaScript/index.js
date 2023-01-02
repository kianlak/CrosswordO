/** Starts the process for creating a crossword
 * @param {number} length Length of the sides of the crossword
 */
function startCrosswordGenerationProcess(length) {
	const crossword = new Crossword(length);

	while(crossword.progress != 1) {
		workOnCrossword(crossword);

		crossword.setProgress(1);
	}

	console.log(crossword);
}