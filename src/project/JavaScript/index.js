function startCrosswordGenerationProcess(length) {
	const crossword = new Crossword(length);

	while(crossword.progress != 1) {
		workOnCrossword(crossword);

		crossword.setProgress(1);
	}

	console.log(crossword);
}