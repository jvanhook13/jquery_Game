$(document).ready(function(){
  
  

//declare variables/objects
var playerScore = 0 ;
var wins = 0 ;
var losses = 0 ;
var randomScore = Math.floor(Math.random(19 , 121) * 121 );
    console.log(Math.floor(Math.random(19 , 121) * 121 ))


//functions to run game
   $("#button1").click(clicked)
   $("#button2").click(clicked)
   $("#button3").click(clicked)
   $("#button4").click(clicked)

function clicked() {
    //push buttton value to player score array
    console.log('playersScore ' + $(this).val());
        playerScore = Number(playerScore) + Number($(this).val()) ;
        console.log('Current Score: ' + playerScore);
        if (playerScore === randomScore && playerScore !== 0) {

            wins++ ;
        
        } else if (playerScore > randomScore) {
        
            losses++ ;
        
        }

    }

//functions to count wins/losses





// winLoss() ;
console.log("wins" , wins)
console.log("losses" , losses);
})
