var letterChoises = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0; 
    var guesses = 10;

    var output = 
    document.getElementById ("output");

    var userguess =
    document.getElementById("userguess");

    var computerChoice = 
    document.getElementById("computerChoice");

    var wins=
    document.getElementById("wins");

    var losses=
    document.getElementById("losses");

    document.onkeyup = function() {
        var userguess = string.fromCharcode(event.keyCode).
         toLowerCase();

        consol.log(userguess);
        }

    var computerGuess = letterChoises[math.floor(math.random()*letterChoises.length)];

console.log(computerGuess)
        
       if (userguess === computerChoice) {
       
       wins++;
       }
           else (guesses--); 
       if (guesses = 0) {
           losses++
       };
