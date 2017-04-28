$(document).ready(function () {

	var colorArray = ["red", "yellow", "blue", "green"];
	var randomSequence = [];

	function addRandomColor() {
		var randomNumber = Math.floor(Math.random() * 4);
		randomSequence.push(colorArray[randomNumber]);
		console.log("randomSequence = ", randomSequence);
	};

	$('#start').click(function () {
		randomSequence = [];
		userSequence = [];
		addRandomColor();
		document.querySelector('#screen').innerText = "- -"
	});

	var userSequence = [];
	$('.colorButton').click(function () {
		var colorClicked = $(this).attr('id');
		userSequence.push(colorClicked);
		console.log("userSequence = ", userSequence);
		if (userSequence.length === randomSequence.length) {
			if (randomSequence.toString() === userSequence.toString()) {
				document.querySelector('#screen').innerText = "GOOD JOB";
				addRandomColor();
				userSequence = [];
			} else {
				document.querySelector('#screen').innerText = "GAME OVER";
			};
		};
	});
});
