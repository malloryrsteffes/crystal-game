$(document).ready(function() {

// Variables for wins, losses and your current score. Replaces empty HTML with the variables.
var wins = 0;
var losses = 0;
var userScore = 0;
$("#totalWins").text(wins);
$("#totalLosses").text(losses);
$("#userScore").text(userScore);

// Random number, generated by the computer. This changes each time we win or lose.
// Then show the randomComputerNumber on the page
var randomComputerNumber = Math.floor(Math.random() * 101) + 19;
$("#randomNumberHolder").text(randomComputerNumber);
console.log(randomComputerNumber)

// Four crystal buttons, each with a random number b/w 1-12. A new number should be generated 
// for each every time we win or lose
var crystal1 = Math.ceil(Math.random() * 12);
var crystal2 = Math.ceil(Math.random() * 12);
var crystal3 = Math.ceil(Math.random() * 12);
var crystal4 = Math.ceil(Math.random() * 12);

// Plays Sounds, hopefully
var crystalSound1 = document.getElementById("crystalSound4");
var crystalSound2 = document.getElementById("crystalSound2");
var crystalSound3 = document.getElementById("crystalSound3");
var crystalSound4 = document.getElementById("crystalSound4");
var winGameSound = document.getElementById("winGameSound");
var loseGameSound = document.getElementById("loseGameSound");

// Function to reset randomComputerNumber, 4 crystal values, userScore resets to 0 
// wins,losses remain the same
function resetNumbers(){
    randomComputerNumber = Math.floor(Math.random() * 101) + 19;
    crystal1 = Math.ceil(Math.random() * 12);
    crystal2 = Math.ceil(Math.random() * 12);
    crystal3 = Math.ceil(Math.random() * 12);
    crystal4 = Math.ceil(Math.random() * 12);
    userScore = 0;
    $("#userScore").text(userScore);
    $("#randomNumberHolder").text(randomComputerNumber);
}




// Win Function

function win(){
    alert("You win!");
    wins++;
    $("#totalWins").text(wins);
    resetNumbers();
    winGameSound.play();
}

// Lose Function
function lose(){
    alert("You Lose!");
    losses++;
    $("#totalLosses").text(losses);
    resetNumbers();
    loseGameSound.play();
}

// CRYSTAL CLICK FUNCTIONS
//When you click any crystal, it should add its value to your userScore 

// Crystal 1  

$("#crystal1").on('click', function(){
    crystalSound1.play();

    userScore = userScore + crystal1;
    $("#userScore").text(userScore);
    //$('audio#crystalSound1').play();  
    // The above doesn't work - at least not placed here or I've typed it incorrectly
        if (userScore === randomComputerNumber){
            win();
        }
        
        else if (userScore > randomComputerNumber){
            lose();
        }

});

//Crystal 2
$("#crystal2").on('click', function(){
   
    crystalSound2.play();
    userScore = userScore + crystal2;

    $("#userScore").text(userScore);

        if (userScore === randomComputerNumber){
            win();
        }
        
        else if (userScore > randomComputerNumber){
            lose();
        }
});

//Crystal 3
$("#crystal3").on('click', function(){

    crystalSound3.play();
    userScore = userScore + crystal3;

    $("#userScore").text(userScore);

        if (userScore === randomComputerNumber){
            win();
        }
        
        else if (userScore > randomComputerNumber){
            lose();
        }
});

// Crystal 4
$("#crystal4").on('click', function(){

    crystalSound4.play();
    userScore = userScore + crystal4;

    $("#userScore").text(userScore);

        if (userScore === randomComputerNumber){
            win();
        }
        
        else if (userScore > randomComputerNumber){
            lose();
        }
});

// Play Again Button, calls the resetNumbers function and resets the wins and losses to zero.
$("#playAgain").on('click', function(){
    resetNumbers();
    wins = 0;
    losses = 0;
    $("#totalWins").text(wins);
    $("#totalLosses").text(losses);

});




})