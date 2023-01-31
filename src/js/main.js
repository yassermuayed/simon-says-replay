// import blueURL from '/assets/imgs/1x/blue.png'
// import bluepURL from '/assets/imgs/1x/bluep.png'
// import greenURL from '/assets/imgs/1x/green.png'
// import greenpURL from '/assets/imgs/1x/greenp.png'
// import redURL from '/assets/imgs/1x/red.png'
// import redpURL from '/assets/imgs/1x/redp.png'
// import yellowURL from '/assets/imgs/1x/yellow.png'
// import yellowpURL from '/assets/imgs/1x/yellowp.png'

import audio0URL from '/assets/0.wav';
import audio1URL from '/assets/1.wav';
import audio2URL from '/assets/2.wav';
import audio3URL from '/assets/3.wav';

const _splashScreen = document.querySelector('.splash-screen');
const _homeScreen = document.querySelector('.home-screen');
const _gameScreen = document.querySelector('.game-screen');

const _playButton = document.querySelector('.play-button')

const _light = document.querySelector('.light');
const _directions = document.querySelector('.directions');

const _green = document.querySelector('.green');
const _red = document.querySelector('.red');
const _yellow = document.querySelector('.yellow');
const _blue = document.querySelector('.blue');

const _greenp = document.querySelector('.greenp');
const _redp = document.querySelector('.redp');
const _yellowp = document.querySelector('.yellowp');
const _bluep = document.querySelector('.bluep');

hideScreen(_greenp)
hideScreen(_redp)
hideScreen(_yellowp)
hideScreen(_bluep)

const _score = document.querySelector('.score');

const _popUp = document.querySelector('.popup')
const _playAgainButton = document.querySelector('.play-again')
const _popUpScore = document.querySelector('.popup-score')

var audio0 = new Audio(audio0URL);
var audio1 = new Audio(audio1URL);
var audio2 = new Audio(audio2URL);
var audio3 = new Audio(audio3URL);




let score = 0;
let gameState = "splash"

let watchSequence = [0]
let replaySequence = []

let loadingTimeOut;
let getReadyTimeOut;
let watchInterval;

showScreen(_splashScreen)
hideScreen(_gameScreen)
hideScreen(_homeScreen)
readyToLunch()


// _green.src = greenpURL;
// _blue.src = bluepURL;
// _red.src = redpURL;
// _yellow.src = yellowpURL;

// _green.src = greenURL;
// _blue.src = blueURL;
// _red.src = redURL;
// _yellow.src = yellowURL;

function changeState(state) {

    switch (state) {
        case "splash":
            gameState = "splash"

            showScreen(_splashScreen)
            hideScreen(_gameScreen)
            hideScreen(_homeScreen)
            readyToLunch()
            break

        case "home":
            gameState = "home"

            showScreen(_homeScreen)
            hideScreen(_gameScreen)
            hideScreen(_splashScreen)

            break

        case "game":
            gameState = "game"

            showScreen(_gameScreen)
            hideScreen(_splashScreen)
            hideScreen(_homeScreen)
            changeState("start")
            break

        case "start":
            hideScreen(_popUp)
            gameState = "start"
            start()
            break

        case "watch":
            gameState = "watch"
            watch()
            break

        case "replay":
            gameState = "replay"
            replay()
            break

        case "gameover":
            showScreen(_popUp)
            gameState = "gameover"
            gameOver()
            break

        case "newgame":
            score = 0;
            watchSequence = [0]
            replaySequence = []
            changeState("start")
            break

        case "nextlevel":
            score++;
            _score.innerText = score;
            replaySequence = []
            let newNote = Math.floor(Math.random() * (4 - 0))
            watchSequence.push(newNote)
            changeState("start")
            break

        default:
            break;
    }
}

function showScreen(screen) {
    if (!screen.classList.contains('show')) {
        screen.classList.add('show')
        screen.classList.remove('hide')
    }
}

function hideScreen(screen) {
    if (!screen.classList.contains('hide')) {
        screen.classList.add('hide')
        screen.classList.remove('show')
    }
}

function showButton(screen) {
    if (!screen.classList.contains('show-inline')) {
        screen.classList.add('show-inline')
        screen.classList.remove('hide')
    }
}

function hideButton(screen) {
    if (!screen.classList.contains('hide')) {
        screen.classList.add('hide')
        screen.classList.remove('show-inline')
    }
}

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}



function readyToLunch() {

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
        // alert(`Cool, the script ${script.src} is loaded`);
        // alert( _ ); // _ is a function declared in the loaded script
        changeState("home")
    });




    // loadingTimeOut = setTimeout(() => {

    // }, 5000);



}

function start() {
    // clearTimeout(loadingTimeOut)
    _score.innerText = score;
    _light.style.backgroundColor = "yellow";
    _directions.innerText = "Get ready"
    getReadyTimeOut = setTimeout(() => {
        changeState("watch")
    }, 1000);

}

function watch() {
    clearTimeout(getReadyTimeOut)
    _light.style.backgroundColor = "red";
    _directions.innerText = "Watch"

    let i = 0;
    watchInterval = setInterval(() => {
        if (i < watchSequence.length) {
            playNote(simon[watchSequence[i]])
            i++
        }
        else {
            setTimeout(() => {
                changeState("replay")
            }, 300);

        }
    }, 500);
}

function replay() {
    clearInterval(watchInterval)
    _light.style.backgroundColor = "green";
    _directions.innerText = "Replay";

}

function checkGameOver() {

    replaySequence.forEach((ele, index) => {

        if (ele !== watchSequence[index]) {
            changeState("gameover");
        }
        if (replaySequence.length == watchSequence.length) {
            changeState("nextlevel");
        }
    })


}

function gameOver() {
    _light.style.backgroundColor = 'black'
    _directions.innerText = "GAME OVER !!!!"

    _popUpScore.innerText = score
}


// let simon = [
//     [0, _green, greenURL, audio0, greenpURL],
//     [1, _red, redURL, audio1, redpURL],
//     [2, _yellow, yellowURL, audio2, yellowpURL],
//     [3, _blue, blueURL, audio3, bluepURL]
// ]

let simon = [
    [0, _green, _greenp, audio0],
    [1, _red, _redp, audio1],
    [2, _yellow, _yellowp, audio2],
    [3, _blue, _bluep, audio3]
]

function playNote(note) {

    hideButton(note[1])
    showButton(note[2])
    note[3].play()
    setTimeout(() => {
        hideButton(note[2])
        showButton(note[1])
    }, 100);

}

_green.addEventListener('click', () => {
    if (gameState === "replay") {
        playNote(simon[0])
        replaySequence.push(0)

        checkGameOver()
    }
})

_red.addEventListener('click', () => {
    if (gameState === "replay") {
        playNote(simon[1]);
        replaySequence.push(1)
        checkGameOver()

    }
})

_yellow.addEventListener('click', () => {
    if (gameState === "replay") {
        playNote(simon[2]);
        replaySequence.push(2)
        checkGameOver()

    }
})

_blue.addEventListener('click', () => {
    if (gameState === "replay") {
        playNote(simon[3]);
        replaySequence.push(3)
        checkGameOver()

    }
})


_playButton.addEventListener('click', () => {
    changeState('game')

})

_playAgainButton.addEventListener('click', () => {
    changeState("newgame")
})
