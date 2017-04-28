$(document).ready(function () {
	// The colorLight functions allow the buttons to light up. There is a separate function for each color of button. These functions are called later when buttons are clicked and when the game is showing the random sequence to be memorized.
	function redLight() {
		document.querySelector('#red').style.background = '#FF69B4';
		setTimeout(function () {
			document.querySelector('#red').style.background = '#ED0A3F';
		}, 500);
	};

	function yellowLight() {
		document.querySelector('#yellow').style.background = '#FAFAD2';
		setTimeout(function () {
			document.querySelector('#yellow').style.background = '#FFEB00';
		}, 500);
	};

	function blueLight() {
		document.querySelector('#blue').style.background = '#4997D0';
		setTimeout(function () {
			document.querySelector('#blue').style.background = '#0066FF';
		}, 500);
	};

	function greenLight() {
		document.querySelector('#green').style.background = '#9DE093';
		setTimeout(function () {
			document.querySelector('#green').style.background = '#3AA655';
		}, 500);
	};

// This section creates the randomized sequence of colors to be memorized and puts it in an array called randomSequence
	var colorArray = ["red", "yellow", "blue", "green"];
	var randomSequence = [];
	function addRandomColor() {
		var randomNumber = Math.floor(Math.random() * 4);
		randomSequence.push(colorArray[randomNumber]);
	};

// randomSequenceLights() makes the gameboard light up in the order of the randomSequence array that was created in the previous step
	var time = 0;
	function randomSequenceLights() {
		for (var i = 0; i < randomSequence.length; i++) {
			time = (i * 1000) + 2000;
			if (randomSequence[i] === "red") {
				setTimeout(redLight, time);
			} else if (randomSequence[i] === "yellow") {
				setTimeout(yellowLight, time);
			} else if (randomSequence[i] === "blue") {
				setTimeout(blueLight, time);
			} else if (randomSequence[i] == "green") {
				setTimeout(greenLight, time);
			};
		};
	};

// playFunction(color) keeps track of the colors that the user clicks and compares them to the randomSequence.
	var userSequence = [];
	function playFunction(color) {
		var colorClicked = $(color).attr('id');
		userSequence.push(colorClicked);
		if (userSequence.length === randomSequence.length) {
			if (randomSequence.toString() === userSequence.toString()) {
				document.querySelector('#screen').innerText = "GOOD JOB";
				setTimeout(function(){document.querySelector('#screen').innerText = "- -"}, 1000);
				userSequence = [];
				addRandomColor();
				setTimeout(randomSequenceLights(), 3000);
			} else {
				document.querySelector('#screen').innerText = "GAME OVER";
			};
		};
	};

//This section creates click events using the previously defined functions.
	$('#start').click(function () {
		randomSequence = [];
		userSequence = [];
		addRandomColor();
		randomSequenceLights();
	});

	$("#red").click(function () {
		redLight();
		setTimeout(playFunction(red), 3000);
	});

	$("#yellow").click(function () {
		yellowLight();
		setTimeout(playFunction(yellow), 3000);
	});

	$("#blue").click(function () {
		blueLight();
		setTimeout(playFunction(blue), 3000);
	});

	$("#green").click(function () {
		greenLight();
		setTimeout(playFunction(green), 3000);
	});
});
