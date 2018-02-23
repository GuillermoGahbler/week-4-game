// pseudo code



// each crystal click will add the random number that was generated for that crystal to your total score

// subsequent clicks will add  number generated to your total score.

// if all crystal numbers added up to equal the random number generated the  player wins, the total wins is updated by 1 and the game starts over.

// if all the crytals add up higher than random number generated the player loses and game the total losses is updated by 1 and the game starts over.

// when game starts new crystal numbers will be randomly generated (hidden) also a new random number will be generated


// var randomNum;
var wins=0;
var losses=0;
var totalScore=0;

function randomize(upper,lower) {
 var randomNumber = Math.floor(Math.random()* (upper -lower+1)) + lower;
 return randomNumber;
// without the return the var's below would not return a value.
}

var counter = randomize(120, 19);

var purpleCrystal = randomize(12,1);
var blueCrystal = randomize(12,1);
var greenCrystal = randomize(12,1);
var yellowCrystal = randomize(12,1);

$("#purpleCrystal").val(purpleCrystal);
$("#blueCrystal").val(blueCrystal);
$("#greenCrystal").val(greenCrystal);
$("#yellowCrystal").val(yellowCrystal);

$("#counter").text(counter);

$("#purpleCrystal").on( "click", function(){
    var purpleCrystalValue = $(this).val();
    totalScore = totalScore + parseInt(purpleCrystalValue);
    $("#totalScore").text(totalScore);
})

$("#blueCrystal").on("click", function(){
    var blueCrystalValue = $(this).val();
    totalScore = totalScore + parseInt(blueCrystalValue);
    $("#totalScore").text(totalScore);
})

$("#greenCrystal").on("click", function(){
    var greenCrystalValue = $(this).val();
    totalScore = totalScore + parseInt(greenCrystalValue);
    $("#totalScore").text(totalScore); 
})

$("#yellowCrystal").on("click", function(){
    var yellowCrystalValue = $(this).val();
    totalScore = totalScore + parseInt(yellowCrystalValue);
    $("#totalScore").text(totalScore);
    if (totalScore === counter) {
        wins = wins + 1;
        console.log(wins + " you win");
        
    } else if (totalScore > counter) {
        losses = losses + 1;
        console.log(losses + " you lose");
    
           
    }

})

// this ensures that the total score is logged on the html, you add it to the crystals on click so that it records.
$("#totalScore").text(totalScore);




































// assign each crystal a random number between 1-12 at the begining of each game 
// a random number between 19-120 generates at the begining of each game
