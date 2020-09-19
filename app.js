const startButton = document.querySelector('.start')
const countdownEl = document.getElementById('countdown');
const popUp = document.querySelector('.pop-up')
const havingColors = document.querySelector('.colors')
const successButton = document.querySelector('.success')
const guessInput = document.querySelector('.guessInput')
const guessResult = document.querySelector('.result')
const cancelButton = document.querySelector('.Danger')
const container = document.querySelector('.container')
const Chances = document.querySelector('.chances')

var colors = ["red", "blue", "pink", "black"];

let chances = 3;
let count = 0;
let colorIndex;
let interval;
let startingMinutes = 0.5;
let time = startingMinutes * 60;
let minutes;
let seconds;

startButton.addEventListener('click', () => {
    Chances.innerHTML = `remaining chances:${chances}`
    guessInput.autofocus = true
    interval = setInterval(updateCountdown, 1000);
    havingColors.innerHTML = colors.join(', ')
    popUp.style.display = 'block'
    colorIndex = randomColor()
    // console.log(colorIndex)
    startButton.style.display = 'none'
})

successButton.addEventListener('click', () => {
    count++
    // console.log(count)

    if (count >= 3) {
        successButton.disabled = true;
        clearInterval(interval)
        guessResult.innerHTML = `you Lost!`
    }
    else if (guessInput.value === colors[colorIndex]) {
        Chances.innerHTML = ''
        successButton.disabled = true;
        clearInterval(interval)
        container.style.backgroundColor = guessInput.value
        guessResult.innerHTML = `congrats you have predicted the color in ${count} number of gusses`
        // countdownEl.innerHTML = `0:00`
        startingMinutes = 0.5;
        time = startingMinutes * 60;
        count = 0
    }
    else
        guessResult.innerHTML = `Wrong! try again`
    guessInput.value = ''
    chances--;
    Chances.innerHTML = `remaining chances:${chances}`
})

cancelButton.addEventListener('click', () => {
    popUp.style.display = 'none'
    guessInput.value = ''
    guessResult.innerHTML = ''
    startButton.style.display = 'block';
    countdownEl.innerHTML = '0:00'
    clearInterval(interval)
    startingMinutes = 0.5;
    time = startingMinutes * 60;
    container.style.backgroundColor = null
    successButton.disabled = false
    chances = 3;
    count = 0;
})

guessInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13)
        successButton.click();
})

function updateCountdown() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    // console.log(seconds)

    if (minutes < 0) {
        guessResult.innerHTML = 'Time up please try again!'
        successButton.disabled = true;
        Chances.innerHTML = ''
        clearInterval(interval)
        return;
    }
    seconds = seconds < 1 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

function randomColor() {
    return Math.floor(Math.random() * colors.length);
};
putElement.style.background = colors[targetColor];

