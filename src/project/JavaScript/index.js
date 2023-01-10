/** Starts the process for creating a crossword
 * @param {number} length Length of the sides of the crossword
 */
function startCrosswordGenerationProcess(length) {
	const crossword = new Crossword(length);

	let i = 0;

	while(crossword.progress != 1) {
		workOnCrossword(crossword);

		if(i == 3) {
			crossword.setProgress(1);
		}

		i++;
	}

	console.log(crossword);
}