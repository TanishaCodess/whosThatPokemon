//make a call to pokemon API using ID
fetch(
        // generate a random pokemon name using randomized ID# (API has pokemon 1-898 but Im only using 1-151)
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151 + 1)}/`
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // take random name and store it
        let pokeName = data.name;
        console.log(pokeName);

        // jumble the letters of the word
        let jumble = pokeName.shuffle();
        console.log(jumble);

        // display the jumbled word
        document.querySelector(".jumble").textContent = jumble;

        // set initual score and highscore
        let score = 20;
        let highscore = 0;

        // on click of check button compare user input 'guess' against answer
        document.querySelector(".check").addEventListener("click", function() {
            // make sure its all lowercase
            const guess = document.querySelector(".guess").value.toLowerCase();
            console.log(guess);

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
        });
    })
    .catch(function(err) {
        console.warn("Something went wrong.", err);
    });

// shuffle function that makes letter palcement in jumble more random
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

// Again BUTTON
// reset score
// reset input
//rest word
document.querySelector(".again").addEventListener("click", function() {
    document.querySelector(".guess").value = "";
});