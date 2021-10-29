let humanGuess;
let machineGuess;

let firework = document.getElementById("img-firework");

let sad = document.getElementById("img-sad");

clearPictures();

function showPicture(pic) {
  pic.style.display = "block";
}

function hidePicture(pic) {
  pic.style.display = "none";
}

function clearPictures() {
  firework.style.display = "none";
  sad.style.display = "none";
}

let button = document.getElementById("btn-play");
button.addEventListener("click", clearPictures);

let headsButton = document.getElementById("btn-head");
let tailsButton = document.getElementById("btn-tails");

headsButton.addEventListener("click",function(){
  humanGuess = 1; 
  machineGuess = getRandom();
  console.log(getWinner(humanGuess,machineGuess));
})

tailsButton.addEventListener("click",function(){
  humanGuess = 0; 
  machineGuess = getRandom();
  console.log(getWinner(humanGuess,machineGuess));
})

function getRandom() {
    let random = Math.random(0,1) * 2
    let rounded = Math.floor(random)
    return rounded;
  }

  function getWinner(humanGuess,machineGuess) {
    if (machineGuess == humanGuess) {
      showPicture(firework);
      hidePicture(sad);
      return 'You won!' + ' coin: ' + machineGuess + ' your guess: ' + humanGuess;
    } else {
      showPicture(sad);
      hidePicture(fireworksss);
      return 'You lost!' + ' coin: ' + machineGuess + ' your guess: ' + humanGuess;
    }
  }

  