$(document).ready(function () {
	function showMessage(messageText) {
		var messageElem = document.querySelector('#textBox');
		messageElem.innerText = messageText;
	}

	function check() {
		var space0 = document.getElementById('space0').textContent;
		var space1 = document.getElementById('space1').textContent;
		var space2 = document.getElementById('space2').textContent;
		var space3 = document.getElementById('space3').textContent;
		var space4 = document.getElementById('space4').textContent;
		var space5 = document.getElementById('space5').textContent;
		var space6 = document.getElementById('space6').textContent;
		var space7 = document.getElementById('space7').textContent;
		var space8 = document.getElementById('space8').textContent;

		if (space0 === space1 && space1 === space2 && space0 != "") {
			showMessage("Winner! Top Across!");

		} else if (space3 === space4 && space4 === space5 && space3 != "") {
			showMessage("Winner! Middle Across!");
		} else if (space6 === space7 && space7 === space8 && space6 != "") {
			showMessage("Winner! Bottom Across!");
		} else if (space0 === space3 && space3 === space6 && space3 != "") {
			showMessage("Winner! Left Down!");
		} else if (space1 === space4 && space4 === space7 && space1 != "") {
			showMessage("Winner! Middle Down!");
		} else if (space2 === space5 && space5 === space8 && space5 != "") {
			showMessage("Winner! Right Down!");
		} else if (space0 === space4 && space4 === space8 && space0 != "") {
			showMessage("Winner! Diagonal!");
		} else if (space2 === space4 && space4 === space6 && space2 != "") {
			showMessage("Winner! Diagonal!");
		};
	};

	$('#twoPlayer').click(function () {
		$(this).removeClass('buttonColors').addClass('selectedButton')
		var clickCounter = 0;
		$('.XO').click(function () {
			if (this.textContent === "") {
				clickCounter += 1;
				if (clickCounter % 2 == 0) {
					this.innerText = "O";
				} else {
					this.innerText = "X";
				}
			};
			check();
		});
	});

	$('#onePlayer').click(function () {
		$(this).removeClass('buttonColors').addClass('selectedButton')
		$('.XO').click(function () {
			if (this.textContent === "") {
				this.innerHTML = "X";
			};

			var spaceArray = ["space0", "space1", "space2", "space3", "space4", "space5", "space6", "space7", "space8"];
			var emptySpacesArray = [];
			for (var i = 0; i <= 8; i++) {
				if (document.getElementById(spaceArray[i]).textContent === "") {
					emptySpacesArray.push(spaceArray[i]);
				};
			}

			var randomNumber = Math.floor(Math.random() * emptySpacesArray.length);
			var randomSpace = document.getElementById(emptySpacesArray[randomNumber]);
			randomSpace.innerText = "O";

			check();
		});

	});

	$('#newGame').click(function () {
		location.reload();
	});
});
