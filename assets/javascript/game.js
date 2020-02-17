$(document).ready(function(){
  
  

//declare variables/objects
const playerScore = [] ;
var wins = 0 ;
var loses = 0 ;
var randomScore = Math.floor(Math.random(19 , 121) * 121 );
    console.log(Math.floor(Math.random(19 , 121) * 121 ))


//functions to run game
   $("#button1").click(clicked)
   $("#button2").click(clicked)
   $("#button3").click(clicked)
   $("#button4").click(clicked)

function clicked() {
    //push buttton value to player score array
    console.log('playersScore' + $(this).val());
        playerScore.push($(this).val());
        console.log('Current Score: ' + playerScore);
       var playerScoreString = playerScore ; 
            console.log(" Stringed array " , playerScoreString)
        // playerScoreString.parseInt()
       const add = (a , b) =>
        a + b

        const sum = playerScore.reduce(add, 0)

        

        console.log("Summed score " + sum)

    // get the sum of the array
    // for (i=0 ; i < playerScoreString.length ; i++) {

    //     if (i=0) { continue ;} ;
    //     playerScore += playerScoreString[i] << 0;
    //     console.log("playerscore" , playerScore)

    }

})

//functions to count wins/losses

