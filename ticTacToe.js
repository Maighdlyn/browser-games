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
            showMessage("You Win! Top Across!");
        } else if (space3 === space4 && space4 === space5 && space3 != "") {
            showMessage("You Win! Middle Across!");
        } else if (space6 === space7 && space7 === space8 && space6 != "") {
            showMessage("You Win! Bottom Across!");
        } else if (space0 === space3 && space3 === space6 && space3 != "") {
            showMessage("You Win! Left Down!");
        } else if (space1 === space4 && space4 === space7 && space1 != "") {
            showMessage("You Win! Middle Down!");
        } else if (space2 === space5 && space5 === space8 && space5 != "") {
            showMessage("You Win! Right Down!");
        } else if (space0 === space4 && space4 === space8 && space0 != "") {
            showMessage("You Win! Diagonal!");
        } else if (space2 === space4 && space4 === space6 && space2 != "") {
            showMessage("You Win! Diagonal!");
        };
    };

    var clickCounter = 0;
    $('.XO').click(function () {
        clickCounter += 1;
        if (clickCounter % 2 == 0) {
            this.innerHTML = "O";
        } else {
            this.innerHTML = "X";
        }
        check();
    });

    $('#newGame').click(function () {
        location.reload();
    });
});
