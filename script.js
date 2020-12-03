// declare variables for the original name and the jumbled name to use later
let pokeName = "";
let pokeNameJumbled = "";

// function that calls the Pokemon API to retrieve a random pokemon name
const getPokemonName = function() {
    fetch(
            // generate a random pokemon name using randomized ID# (API has pokemon 1-898 but Im only using 1-151)
            `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151 + 1)}/`
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            //real name of Pokemon from API
            const pokeName = data.name;
            console.log(pokeName);
            // jumbled name of Pokemon
            const pokeNameJumbled = pokeName.shuffle();
            //function to display the jumbled name and bring the real name out of the fetch scope
            displayInfomation(pokeName, pokeNameJumbled);
        });
};
getPokemonName();

//function to display jumbled name
const displayInfomation = function(name, jumbledName) {
    pokeName = name;
    pokeNameJumbled = jumbledName;
    const domJumble = document.querySelector(".jumble");
    domJumble.textContent = jumbledName;
};

// score and highscore variables at default
let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;
// Function to check the guess against the real name
const checkName = function() {
    // make sure its all lowercase
    const guess = document.querySelector(".guess").value.toLowerCase();
    //If there is no guess
    if (!guess) {
        document.querySelector(".message").textContent = "No guess entered!";
        //If guess is correct
    } else if (guess === pokeName) {
        document.querySelector(
            ".message"
        ).textContent = `Thats correct! It's ${pokeName}!`;
        //If guess is wrong
    } else if (guess != pokeName) {
        document.querySelector(".message").textContent = `Guess again!`;
        score--;
        document.querySelector(".score").textContent = score;
    }
};

// on click of check button compare user input 'guess' against answer
document.querySelector(".check").addEventListener("click", function() {
    checkName();
});

// Function for again button to display a new jumbled word to guess
const tryAgain = function() {
    // reset the input
    document.querySelector(".guess").value = "";
    //reset score
    score = 20;
    document.querySelector(".score").textContent = score;
    // generate new jumbled word/display it
    getPokemonName();
};

// Again BUTTON
document.querySelector(".again").addEventListener("click", function() {
    tryAgain();
});

// jumble function
String.prototype.shuffle = function() {
    var a = this.split(""),
        n = a.length;
    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};