var wins = 0;
var losses = 0;
var gameWin = false

$(document).ready(function game() {



    //declare variables/objects
    var playerScore = 0;

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
        if (playerScore === randomScore) {
            gameWin = true
            console.log("gameWin" , gameWin)
            var wins = 0;
            wins++ ;
            $("#wins").html("wins" + wins)
            $("#info").html("Winner Winner Chicken Dinner")
            console.log("Winner Winner Chicken Dinner")
            restart();
            return wins
            
            

        } else if (playerScore > randomScore) {
            var losses = 0;
            losses++ ;
            $("#losses").html("losses" + losses)
            $("#info").html("Better Luck next time")
            console.log("Better Luck next time")
            restart();
            return losses

            

        }
    };



    function restart() {
        if (gameWin === true) {
            var playerScore = 0;
            var randomScore = Math.floor(Math.random(19, 121) * 121);
            var gameWin = false
            $(".button").outerHTML($(this).val(Math.floor(Math.random() * 13 + 1)))
            game;


        } else if (playerScore > randomScore) {
            var playerScore = 0;
            var randomScore = Math.floor(Math.random(19, 121) * 121);
            var gameWin = false     
            $(".button").outerHTML($(this).val(Math.floor(Math.random() * 13 + 1)))
            game;


        }

    }

    console.log("wins", wins)
    console.log("losses", losses);
})