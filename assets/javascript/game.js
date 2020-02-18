$(document).ready(function(){
  
  

//declare variables/objects
var playerScore = 0 ;
var wins = 0 ;
var losses = 0 ;
var randomScore = Math.floor(Math.random(19 , 121) * 121 );
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
        playerScore = Number(playerScore) + Number($(this).val()) ;
        $("#playerScore").html("Current Score: " + playerScore)
        console.log('Current Score: ' + playerScore);
   

//functions to count wins/losses

if (playerScore == randomScore) {          
    wins++ ;
    

} else if (playerScore > randomScore) {

    losses++ ;

} }


console.log("wins" , wins)
console.log("losses" , losses);
})
