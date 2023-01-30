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
const _score = document.querySelector('.score');

const _popUp = document.querySelector('.popup')
const _playAgainButton = document.querySelector('.play-again')
const _popUpScore = document.querySelector('.popup-score')

var audio0 = new Audio('./assets/0.wav');
var audio1 = new Audio('./assets/1.wav');
var audio2 = new Audio('./assets/2.wav');
var audio3 = new Audio('./assets/3.wav');


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
            let newNote = Math.floor(Math.random() * (3 - 0))
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

function readyToLunch() {
    loadingTimeOut = setTimeout(() => {
        changeState('home')
    }, 800);


}

function start() {
    clearTimeout(loadingTimeOut)
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


let simon = [
    [0, _green, 'green', audio0],
    [1, _red, 'red', audio1],
    [2, _yellow, 'yellow', audio2],
    [3, _blue, 'blue', audio3]
]

function playNote(note) {
    audio0.pause();
    audio1.pause();
    audio2.pause();
    audio3.pause();

    note[1].src = `./assets/imgs/1x/${note[2]}p.png`;
    note[3].play();
    setTimeout(() => {
        note[1].src = `./assets/imgs/1x/${note[2]}.png`
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
