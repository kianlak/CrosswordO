function startCrosswordGenerationProcess(length) {
	const crossword = new Crossword(length);

	while(crossword.progress != 1) {
		createCrossword(crossword);

		crossword.setProgress(1);
	}

	console.log(crossword);
}