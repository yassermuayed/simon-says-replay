import blueURL from '/assets/blue.mp3'
import greenURL from '/assets/green.mp3'
import redURL from '/assets/red.mp3'
import yellowURL from '/assets/yellow.mp3'

const _splashScreen = document.querySelector('.splash-screen');
const _homeScreen = document.querySelector('.home-screen');
const _gameScreen = document.querySelector('.game-screen');

const _playButton = document.querySelector('.play-button')
const _light = document.querySelector('.light');
const _directions = document.querySelector('.directions');
const _timerNotes = document.querySelector('.timer-notes');
const _score = document.querySelector('.score');
const _popUp = document.querySelector('.popup')
const _playAgainButton = document.querySelector('.play-again')
const _popUpScore = document.querySelector('.popup-score')

const _green = document.querySelector('.green');
const _red = document.querySelector('.red');
const _yellow = document.querySelector('.yellow');
const _blue = document.querySelector('.blue');

const _greenp = document.querySelector('.greenp');
const _redp = document.querySelector('.redp');
const _yellowp = document.querySelector('.yellowp');
const _bluep = document.querySelector('.bluep');

const _simon = document.querySelector('.simon');

const audioGreen =  new Audio(greenURL)
const audioRed =    new Audio(redURL)
const audioYellow = new Audio(yellowURL)
const audioBlue =   new Audio(blueURL)

audioBlue.play()


hideScreen(_greenp)
hideScreen(_redp)
hideScreen(_yellowp)
hideScreen(_bluep)


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

            _timerNotes.innerText = '0/0'
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




function readyToLunch() {

    loadingTimeOut = setTimeout(() => {

        changeState("home")

    }, 1000);



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


function start() {
    clearTimeout(loadingTimeOut)
    _timerNotes.innerText = (watchSequence.length)
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
            }, 100);

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
    [0, _green, _greenp, audioGreen],
    [1, _red, _redp, audioRed],
    [2, _yellow, _yellowp, audioYellow],
    [3, _blue, _bluep, audioBlue]
]

function playNote(note) {

    note[3].play()
    hideButton(note[1])
    showButton(note[2])
    setTimeout(() => {
        hideButton(note[2])
        showButton(note[1])
    }, 150);

    if (gameState === "replay") {
        _timerNotes.innerText = (replaySequence.length + 1) + "/" + (watchSequence.length)
    }

}

_green.addEventListener('click', (e) => {
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





