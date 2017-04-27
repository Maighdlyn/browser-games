$(document).ready(function () {

    var colorArray = ["red", "yellow", "blue", "green"];
    var randomSequence = [];

    function addRandomColor() {
        var randomNumber = Math.floor(Math.random() * 4);
        randomSequence.push(colorArray[randomNumber]);
        console.log("randomSequence = ", randomSequence);
    };

    $('#start').click(function () {
        addRandomColor();
    });

    var userSequence = [];
    $('.colorButton').click(function () {
        var colorClicked = $(this).attr('id');
        userSequence.push(colorClicked);
        console.log("userSequence = ", userSequence);
        if (userSequence.length === randomSequence.length) {
            if (randomSequence.value === userSequence.value) {
                console.log("That's right!");
                addRandomColor();
                userSequence = [];
            };
        };


    });

});
