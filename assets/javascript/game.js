
$(document).ready(function game() {



    //declare variables/objects
    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    var gameWin = false
    var randomScore = Math.floor(Math.random() * 121 + 19);
    console.log(randomScore)


    //functions to run game
    $("#button1").click(clicked)
    $("#button2").click(clicked)
    $("#button3").click(clicked)
    $("#button4").click(clicked)
    $("#randomScore").html("Score to match: " + randomScore)





    function clicked() {
        //push buttton value to player score array
        console.log('playersScore ' + $(this).val());
        playerScore = Number(playerScore) + Number($(this).val());
        $("#playerScore").html("Current Score: " + playerScore)
        console.log('Current Score: ' + playerScore);
        winLoss();

    }

    //functions to count wins/losses
    function winLoss() {
        if (playerScore == randomScore) {
            gameWin = true
            console.log("gameWin", gameWin)
            $("#randomScore").html("Winner Winner Chicken Dinner")
            console.log("Winner Winner Chicken Dinner")
            




        } else if (playerScore > randomScore) {
            console.log("gameWin", gameWin)
            $("#randomScore").html("Better Luck next time")
            




        }
    };

    win();
    // restart();

    function win() {
        if (playerScore == randomScore) {
            wins++ ;
            $("#wins").html("wins: " + wins)
            console.log(wins, "wins")
            restart()
        } else if (playerScore > randomScore)
            losses++ ;
        $("#losses").html("losses: " + losses)
    }


    function restart() {
        if (gameWin = true) {
            playerScore = 0;
            gameWin = false
            game;


        } else if (playerScore > randomScore) {
            playerScore = 0;
            gameWin = false
            game;


        }

    }

    console.log("wins", wins)
    console.log("losses", losses);
})