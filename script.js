//make an API call to pokemon

fetch(
        // generate a random pokemon name using randomized ID# (API has pokemon 1-898)
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 898 + 1)}/`
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // take random name and store it to be reffered to later in answer
        let pokeName = data.name;
        console.log(pokeName);

        // jumble the letters of the word
        let jumble = pokeName.shuffle();
        console.log(jumble);

        // display the jumbled word
        document.querySelector(".jumble").textContent = jumble;
    })
    .catch(function(err) {
        console.warn("Something went wrong.", err);
    });

// shuffle function that makes letter palcement more random
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

//take user input guess
// error handle for capitals
// check against answer pokemon word(no jumbled) // CHECK BUTTON
//display right or wrong in .message section

// RESTART BUTTON
// rest score
// fetch new jumbled word

//SKIP BUTTON
// new jumbled word