let humanGuess;
let machineGuess;

let firework = document.getElementById("img-firework");
let gif = document.getElementById('img-coin');
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

let headsButton = document.getElementById("btn-head");
let tailsButton = document.getElementById("btn-tails");

headsButton.addEventListener("click",function(){
  clearPictures();

  gif.style.display = "block";
  setInterval(function() {
    gif.style.display = "none";
    console.log(getWinner(humanGuess,machineGuess));
  },5000);
  humanGuess = 1; 
  machineGuess = getRandom();
})

tailsButton.addEventListener("click",function(){
  clearPictures();
  gif.style.display = "block";
  setInterval(function() {
    gif.style.display = "none";
    console.log(getWinner(humanGuess,machineGuess));
  },5000);
  humanGuess = 0; 
  machineGuess = getRandom();
  
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

  