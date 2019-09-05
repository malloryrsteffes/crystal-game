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

// Function to reset: New randomComputerNumber, 4 new crystal values, userScore resets to 0 
// wins,losses remain the same
function resetNumbers(){
    randomComputerNumber = Math.floor(Math.random() * 101) + 19;
    crystal1 = Math.ceil(Math.random() * 12);
    crystal2 = Math.ceil(Math.random() * 12);
    crystal3 = Math.ceil(Math.random() * 12);
    crystal4 = Math.ceil(Math.random() * 12);
    userScore = 0;
    $("#userScore").text(userScore);
}

resetNumbers();



// Win Function

function win(){
    alert("You win!");
    wins++;
    $("#totalWins").text(wins);
    resetNumbers();
}

// Lose Function
function lose(){
    alert("You Lose!");
    losses++;
    $("#totalLosses").text(losses);
    resetNumbers();
}

// CRYSTAL CLICK FUNCTIONS
//When you click any crystal, it should add its value to your userScore 
$("#crystal1").on('click', function(){
    userScore = userScore + crystal1;

    $("#userScore").text(userScore);
    //This is where something breaks. Sometimes it recognizes the loss condition too early or too late,
    //sometimes not at all. Same with the win condition!
        if (userScore === randomComputerNumber){
            win();
        }
        
        else if (userScore > randomComputerNumber){
            lose();
        }
});

$("#crystal2").on('click', function(){
    userScore = userScore + crystal2;

    $("#userScore").text(userScore);

        if (userScore === randomComputerNumber){
            win();
        }
        
        else if (userScore > randomComputerNumber){
            lose();
        }
});

$("#crystal3").on('click', function(){
    userScore = userScore + crystal3;

    $("#userScore").text(userScore);

        if (userScore === randomComputerNumber){
            win();
        }
        
        else if (userScore > randomComputerNumber){
            lose();
        }
});

$("#crystal4").on('click', function(){
    userScore = userScore + crystal4;

    $("#userScore").text(userScore);

        if (userScore === randomComputerNumber){
            win();
        }
        
        else if (userScore > randomComputerNumber){
            lose();
        }
});

// Play Again Button, also not working 
$("#playAgain").on('click', function(){
    resetNumbers();
    userScore = 0;
    wins = 0;
    losses = 0;

});


})