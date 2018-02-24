
// my global vars
var wins=0;
var losses=0;
var totalScore=0;

function randomize(upper,lower) {
 var randomNumber = Math.floor(Math.random()* (upper -lower+1)) + lower;
 return randomNumber; // this is the randomize function, without the return the var's below would not return a value.
}

// uses the random funciton to set the high and low numer (upper/lower the +1 because we don't count 0)
var counter = randomize(120, 19);
var purpleCrystal = randomize(12,1);
var blueCrystal = randomize(12,1);
var greenCrystal = randomize(12,1);
var yellowCrystal = randomize(12,1);

// all these below can be removed since they are in the start game function at the bottom. I'm leaving them in for reference.
// i created a value for each crystal and named it the crystal name.
$("#purpleCrystal").val(purpleCrystal);
$("#blueCrystal").val(blueCrystal);
$("#greenCrystal").val(greenCrystal);
$("#yellowCrystal").val(yellowCrystal);
$("#counter").text(counter);



// breaking this down into smaller bite sized pieces to make more understandable
// $(#calls id from HTML)
// .on("click", function()) calls the function when you click
// the {}where you put what you need that function to do.
// i'm create new variable "var purpleCrystalValue" so i can set a value.
// The new value I need set is "$(this).val();", This is saying use this function right above and .val is use the #purpleCrytalvalue we already established in the above code block.
// so when the crytal is clicked it should generate a random number because that was the value we assigned. 

$("#purpleCrystal").on( "click", function(){
    var purpleCrystalValue = $(this).val();
    // calling the ID pow in html and inserting text as blank hence the .text("").
    $("#pow").text("");
     // this states that total score will is purpleCrystalValue and it needs to be pareInt so it can show a number otherise it'll show "NaN" not a number. 
    totalScore = totalScore + parseInt(purpleCrystalValue);
    // calling the ID totalScore in html and inserting the totalscore value which is the purpleCrystal value in number form, hence the .text(totalScore).
    $("#totalScore").text(totalScore);
    // if else statements below saying is counter and total score are same then add win,  if totalscore is higher than counter then add 1 to losses. 
    if (totalScore === counter) {
        wins = wins + 1;
        $("#wins").text("Wins " + wins);   
        $("#pow").text("YOU WIN!!!!");
        startGame();
        
    } else if (totalScore > counter) {
        losses = losses + 1;
        $("#losses").text("Losses " + losses);
        $("#pow").text("YOU LOST!!!!")
        startGame();
           
    }
})

// all others below are just a repeat of the above without the comments. 

$("#blueCrystal").on("click", function(){
    var blueCrystalValue = $(this).val();
    $("#pow").text("");
    totalScore = totalScore + parseInt(blueCrystalValue);
    $("#totalScore").text(totalScore);
    if (totalScore === counter) {
        wins = wins + 1;
        $("#wins").text("Wins " + wins);
        $("#pow").text("YOU WIN!!!!");
        startGame();
    } else if (totalScore > counter) {
        losses = losses + 1;
        $("#losses").text("Losses " + losses);
        $("#pow").text("YOU LOST!!!!")
        startGame();
           
    }
})

$("#greenCrystal").on("click", function(){
    var greenCrystalValue = $(this).val();
    $("#pow").text("");
    totalScore = totalScore + parseInt(greenCrystalValue);
    $("#totalScore").text(totalScore); 
    if (totalScore === counter) {
        wins = wins + 1;
        $("#wins").text("Wins " + wins);
        $("#pow").text("YOU WIN!!!!");
        startGame();
    } else if (totalScore > counter) {
        losses = losses + 1;
        $("#losses").text("Losses " + losses);
        $("#pow").text("YOU LOST!!!!")
        startGame();
           
    }
})

$("#yellowCrystal").on("click", function(){
    var yellowCrystalValue = $(this).val();
    $("#pow").text("");
    totalScore = totalScore + parseInt(yellowCrystalValue);
    $("#totalScore").text(totalScore);
    if (totalScore === counter) {
        wins = wins + 1;
        $("#wins").text("Wins " + wins);
        $("#pow").text("YOU WIN!!!!");
        startGame();
    } else if (totalScore > counter) {
        losses = losses + 1;
        $("#losses").text("Losses " + losses);
        $("#pow").text("YOU LOST!!!!")
        startGame();
    }

})

// this ensures that the total score is logged on the html, you add it to the crystals on click so that it records.
$("#totalScore").text(totalScore);




// this function sets all the functions when the game starts.
function startGame() {
    totalScore = 0;
    counter = randomize(120, 19);
    purpleCrystal = randomize(12,1);
    blueCrystal = randomize(12,1);
    greenCrystal = randomize(12,1);
    yellowCrystal = randomize(12,1);

    $("#purpleCrystal").val(purpleCrystal);
    $("#blueCrystal").val(blueCrystal);
    $("#greenCrystal").val(greenCrystal);
    $("#yellowCrystal").val(yellowCrystal);

    $("#counter").text(counter);
    $("#totalScore").text(totalScore);
    
        
}

// this calls the start of the game it's at the bottom so all the JS and Jquery load first.
startGame ();

// these are outside any function so they load before any changes are made by other funcitons.
$("#wins").text("Wins 0");
$("#losses").text("Losses 0");



// inlcuded my "Pseudo" Code below as an example.

// Pseudo Code!!
// assign each crystal a random number between 1-12 at the begining of each game 
// a random number between 19-120 generates at the begining of each game
// each crystal click will add the random number that was generated for that crystal to your total score
// subsequent clicks will add  number generated to your total score.
// if all crystal numbers added up to equal the random number generated the  player wins, the total wins is updated by 1 and the game starts over.
// if all the crytals add up higher than random number generated the player loses and game the total losses is updated by 1 and the game starts over.
// when game starts new crystal numbers will be randomly generated (hidden) also a new random number will be generated
