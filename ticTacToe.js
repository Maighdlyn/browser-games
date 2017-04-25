$(document).ready(function () {
    function showMessage(messageText) {
        var messageElem = document.querySelector('#textBox');
        messageElem.innerText = messageText;
    }

    var space = ['', '', '', '', '', '', '', '', '']

    function updateBoard() {
        document.getElementById('space0').textContent = space[0];
        document.getElementById('space1').textContent = space[1];
        document.getElementById('space2').textContent = space[2];
        document.getElementById('space3').textContent = space[3];
        document.getElementById('space4').textContent = space[4];
        document.getElementById('space5').textContent = space[5];
        document.getElementById('space6').textContent = space[6];
        document.getElementById('space7').textContent = space[7];
        document.getElementById('space8').textContent = space[8];
    };

  
    
   function updateArray(letter) {
        if (this === document.getElementById('space8')){
            space[0] = letter};
        
        $('#space1').click(function () {
            space[1] = letter
        });
        $('#space2').click(function () {
            space[2] = letter
        });
        updateBoard();
        console.log(space);
    };
    

    function check() {
        /*        var space0 = document.getElementById('space0').textContent;
                var space1 = document.getElementById('space1').textContent;
                var space2 = document.getElementById('space2').textContent;
                var space3 = document.getElementById('space3').textContent;
                var space4 = document.getElementById('space4').textContent;
                var space5 = document.getElementById('space5').textContent;
                var space6 = document.getElementById('space6').textContent;
                var space7 = document.getElementById('space7').textContent;
                var space8 = document.getElementById('space8').textContent;
        */
        if (space[0] === space[1] && space[1] === space[2] && space[0] != "") {
            showMessage("You Win! Top Across!");
        } else if (space[3] === space[4] && space[4] === space[5] && space[3] != "") {
            showMessage("You Win! Middle Across!");
        } else if (space[6] === space[7] && space[7] === space[8] && space[6] != "") {
            showMessage("You Win! Bottom Across!");
        } else if (space0 === space[3] && space[3] === space[6] && space[3] != "") {
            showMessage("You Win! Left Down!");
        } else if (space[1] === space[4] && space[4] === space[7] && space[1] != "") {
            showMessage("You Win! Middle Down!");
        } else if (space[2] === space[5] && space[5] === space[8] && space[5] != "") {
            showMessage("You Win! Right Down!");
        } else if (space[0] === space[4] && space[4] === space[8] && space[0] != "") {
            showMessage("You Win! Diagonal!");
        } else if (space[2] === space[4] && space[4] === space[6] && space[2] != "") {
            showMessage("You Win! Diagonal!");
        };
    };



    $('#twoPlayer').click(function () {
        var clickCounter = 0;
        $('.XO').click(function () {
            if (this.textContent === "") {
                clickCounter += 1;
                if (clickCounter % 2 == 0) {
                    updateArray("O");
                    console.log("should be 'O'")
                } else {
                    updateArray("X");
                    console.log("should be 'X'")
                }
            };
            check();
        });
    });
   
    


    $('#onePlayer').click(function () {
        $('.XO').click(function () {
            if (this.textContent === "") {
                this.innerHTML = "X";
            };

            var randomSpace = Math.floor(Math.random() * 9);
            console.log(randomSpace);


            //check that space is empty
            //assign "O" to that space
            check();
        });

    });

    $('#newGame').click(function () {
        location.reload();
    });
});
