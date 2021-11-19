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
  setColors("grey","grey");
  clearPictures();
  gif.style.display = "block";
  setTimeout(function() {
    gif.style.display = "none";
    console.log(getWinner(humanGuess,machineGuess));
  },4800);
  humanGuess = 1; 
  machineGuess = getRandom();
})

tailsButton.addEventListener("click",function(){
  setColors("grey","grey");
  clearPictures();
  gif.style.display = "block";
  setTimeout(function() {
    gif.style.display = "none";
    console.log(getWinner(humanGuess,machineGuess));
  },4800);
  humanGuess = 0; 
  machineGuess = getRandom();
  
})

function getRandom() {
    let random = Math.random(0,1) * 2
    let rounded = Math.floor(random)
    return rounded;
  }

  function getWinner(human,machine) {
    if (machine == human) {
      showPicture(firework);
      hidePicture(sad);
      if (machine == 1){
        setColors("green","red");
      } else {
        setColors("red","green");
      }
      return 'You won!' + ' coin: ' + machine + ' your guess: ' + human;
    } else {
      showPicture(sad);
      hidePicture(firework);
      if (human == 1){
        setColors("red","green");
      } else {
        setColors("green","red");
      }
      return 'You lost!' + ' coin: ' + machine + ' your guess: ' + human;
    }
  }

  function setColors(color1, color2) {
    headsButton.style.backgroundColor = color1;
    tailsButton.style.backgroundColor = color2;
  }