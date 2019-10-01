//pseudo code
//Generate a random number and assign it as computer generated number between 19 to 120
//create four gem stones and assign random number to them between 1 to 12
//A click on a stone should add the value of that stone to the previous count.
//When the sum of stone clicks matches computer generated number mark as win else continue untill it reaches the value
//or goes past the number and mark as lost.
//Reset the game and follow the cycle again from step 2.



let random_result;
let wins = 0;
let lost = 0;
let previousNum = 0;

var resetAndstart = function () {
    $(".crystals").empty();

    var images = ['https://i.etsystatic.com/13015452/r/il/d9eb95/1275014621/il_794xN.1275014621_8931.jpg',
        'https://miro.medium.com/max/2520/0*AmwIyi21fDd9Guwz.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61NHzqPotVL._SX425_.jpg',
        'http://kristalcanada.com/EN/wp-content/uploads/2013/10/030469006251-21.jpg'];

    random_result = Math.floor(Math.random() * 101) + 19;

    $("#result").html(+ random_result);

    for (i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random)

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        })
        $(".crystals").append(crystal);
    }
    $("#previous").html("Your total Score is: " + previousNum);
}
resetAndstart();

$(document).on('click', ".crystal ", function () {
    var num = parseInt($(this).attr('data-random'));

    previousNum += num;
    $("#previous").html("Your total Score is: " + previousNum);
    console.log(previousNum);


    if (previousNum > random_result) {
        lost++;
        $("#lost").html(" losses: " + lost);
        previousNum = 0;
        resetAndstart();
    }
    else if (previousNum === random_result) {
        wins++;

        $("#wins").html(" win: " + wins);
        previousNum = 0;
        resetAndstart();
    }



});