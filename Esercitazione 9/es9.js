
let countdown;
let rimanenti;

function startCountdown() {
  rimanenti = parseInt(document.getElementById('secondsInput').value, 10) || 0;
  if (rimanenti >= 0) {
    countdown = setInterval(function () {
      document.getElementById('output').innerHTML = rimanenti + ' secondi rimanenti';
      rimanenti--;
    }, 1000);
  } 
}

function pauseCountdown() {
    clearTimeout(countdown);    
}

function resetCountdown() {
    clearTimeout(countdown);
    document.getElementById('output').innerText=100
}
