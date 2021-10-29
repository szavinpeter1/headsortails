
let firework = document.getElementById("img-firework");

let sad = document.getElementById("img-sad");

let button = document.getElementById("btn-play");
button.addEventListener("click", function() {
 firework.style.display = "none";
 sad.style.display = "none";
});

function getRandom() {
    let random = Math.random(0,1) * 2
    let rounded = Math.floor(random)
    return rounded;
  }

  function getWinner() {
    if (coin == humanGuess) {
      return 'You won!' + ' coin: ' + coin + ' your guess: ' + humanGuess;
    } else {
      return 'You lost!' + ' coin: ' + coin + ' your guess: ' + humanGuess;
    }
  }

  let coin = getRandom()
  // console.log('Pénzérme:', coin)
  //let humanGuess = prompt('Adj meg 0-t vagy 1-et!');
  // console.log('Ember tippje:', humanGuess);

  let result = getWinner();
  console.log(result);