/** Starts the process for creating a crossword
 * @param {number} length Length of the sides of the crossword
 */
function startCrosswordGenerationProcess(length) {
	const crossword = new Crossword(length);

	let i = 0;

	while(crossword.progress != 1) {
		workOnCrossword(crossword);

		if(i == 5000) {
			crossword.setProgress(1);
		}

		i++;
	}

	crossword.finishFillIn();
	
	// EVERYTHING ELSE 

	arrayToTable(crossword.grid)
	
	function arrayToTable(arr) {
		document.write("<table border='1'>");
		
		for (let i = 0; i < arr.length; i++) {
				document.write("<tr>");
				for (let j = 0; j < arr[i].length; j++) {
						document.write("<td>" + arr[i][j] + "</td>");
				}
				document.write("</tr>");
		}
		
		document.write("</table>");
	}
}

window.addEventListener('load', function(){
	// Get the button element
	var button1 = document.getElementById("breadthSelection1");
	var button2 = document.getElementById("breadthSelection2");
	var button3 = document.getElementById("breadthSelection3");

	button1.addEventListener("click", function(){
		startCrosswordGenerationProcess(7);
	});

	button2.addEventListener("click", function(){
		startCrosswordGenerationProcess(15);
	});

	button3.addEventListener("click", function(){
		startCrosswordGenerationProcess(21);
	});
});
