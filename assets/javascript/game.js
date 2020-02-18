var wins = 0;
var losses = 0;
var gameWin = false

$(document).ready(function game() {



    //declare variables/objects
    var playerScore = 0;

    var randomScore = Math.floor(Math.random(19, 121) * 121);
    console.log(randomScore)


    //functions to run game
    $("#button1").click(clicked)
    $("#button2").click(clicked)
    $("#button3").click(clicked)
    $("#button4").click(clicked)
    $("#randomScore").html("Score to match: " + randomScore)
    $("#wins").html("wins" + wins)
    $("#losses").html("losses" + losses)



    function clicked() {
        //push buttton value to player score array
        console.log('playersScore ' + $(this).val());
        playerScore = Number(playerScore) + Number($(this).val());
        $("#playerScore").html("Current Score: " + playerScore)
        console.log('Current Score: ' + playerScore);
        winLoss();
        restart();
    }

    //functions to count wins/losses
    function winLoss() {
        if (playerScore === randomScore) {
            gameWin = true
            wins += 1;
            $("#info").html("Winner Winner Chicken Dinner")
            console.log("Winner Winner Chicken Dinner")


        } else if (playerScore > randomScore) {
            losses += 1;
            $("#info").html("Better Luck next time")
            console.log("Better Luck next time")

        }
    };



    function restart() {
        if (gameWin == true) {
            game;

        } else if (playerScore > randomScore) {

            game;


        }

    }

    console.log("wins", wins)
    console.log("losses", losses);
})