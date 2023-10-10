import "../css/game.css";

import {
  comment,
  cont,
  gameOverDialog,
  htm,
  trafficLight,
} from "../components/blocks";
import _Scene from "../engine/_scene";
import Widget from "./widget";
import { SceneManagerInstance, StateManagerInstance } from "../main";
import confetti from "../components/confetti";
import HomeScene from "./scene_home";

export default class GameScene extends _Scene {
  ENUM = {
    freshGame: "FRESH_GAME",
    start: "START",
    watch: "WATCH",
    getReady: "GET_READY",
    replay: "REPLAY",
    nextLevel: "NEXT_LEVEL",
    gameOver: "GAME_OVER",
    highScore: "HIGH_SCORE",
    pause: "PAUSE",
  };
  widgetInstance;
  wi;
  trafficLight;
  instructions;
  removeOnStateChange = [];
  level = 1;
  userInput;
  activeSequence;
  constructor() {
    super("Game Scene");
    console.log("=========== Game Scene");
    console.log("Elements in scene", this.kids.length, this.kids);
    this.widgetInstance = new Widget();
    this.wi = this.add(this.widgetInstance);
    this.trafficLight = this.add(trafficLight());
    this.score = document.createElement("div");
    this.score.innerText = this.level;
    this.score.classList.add("score");
    this.trafficLight.appendChild(this.score);

    this.instructions = this.add(comment("instructions"), ["instructions"]);
    this.changeState(this.ENUM.freshGame);
    this.userInput = [];
    this.activeSequence = [];
    // LATER ($one) study bind(this) in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    this.wi.userInputSignals.add(this.userInputListener.bind(this));

    let hiddenButton = htm("button", ["hidden"]);
    this.add(cont([hiddenButton]), ["flex", "bottom"]);
  }

  changeState(state, stuffToRemove = []) {
    this.score.innerText = this.level;
    this.loop(state);
    stuffToRemove.forEach((el) => el.remove());
  }

  setInstructions(instructions = " ", color = "white") {
    this.instructions.innerText = instructions;
    this.trafficLight.style.backgroundColor = color;
    this.trafficLight.style.boxShadow = `0 0 20px ${color}`;
  }

  loop(param) {
    switch (param) {
      case this.ENUM.freshGame:
        this.freshGame();

        break;
      case this.ENUM.start:
        this.start();
        break;
      case this.ENUM.watch:
        this.watch();
        break;
      case this.ENUM.getReady:
        this.getReady();
        break;
      case this.ENUM.replay:
        this.replay();
        break;
      case this.ENUM.nextLevel:
        this.nextLevel();
        break;
      case this.ENUM.gameOver:
        this.gameOver();
        break;
      case this.ENUM.highScore:
        this.highScore();
        break;
      case this.ENUM.pause:
        this.pause();
        break;

      default:
        break;
    }
  }

  freshGame() {
    console.log("freshGame state");
    this.setInstructions("New Game", "blue");
    this.changeState(this.ENUM.start);
  }

  start() {
    console.log("start state");
    this.setInstructions("Watch", "pink");
    this.userInput = [];
    setTimeout(() => {
      this.changeState(this.ENUM.watch);
      console.log();
    }, 100);
  }

  watch() {
    console.log("watch state");
    this.setInstructions("Watch", "yellow");

    this.activeSequence = this.generateSequence(this.level);
    this.playSequence(this.activeSequence).then(() => {
      setTimeout(() => {
        this.changeState(this.ENUM.getReady);
      }, 400);
    });
  }

  getReady() {
    console.log("getReady state");
    this.setInstructions("Get Ready", "red");

    setTimeout(() => {
      this.changeState(this.ENUM.replay);
    });
  }

  replay() {
    console.log("replay state");
    this.setInstructions("Replay", "green");
    console.dir(this.wi);
    this.wi.canUserInteract = true;
  }
  userInputListener(message) {
    console.log("userInputListener received message: ", message);
    this.userInput.push(message);
    this.checkUserInput();
    console.log(this.userInput, " after push");
  }

  checkUserInput() {
    console.log(
      "%c checkUserInput",
      "background: red; color: #bada55; margin: 10px"
    );
    this.userInput.map((el, index) => {
      if (el.slice(1) === this.activeSequence[index] + "") {
        console.log(
          "%c Correct",
          "background: green",
          el.slice(1),
          " is equal to ",
          this.activeSequence[index],
          " at index: ",
          index
        );
        if (index === this.activeSequence.length - 1) {
          this.changeState(this.ENUM.nextLevel);
        }
      } else {
        console.log(
          "%c Incorrect",
          "background: red",
          el.slice(1),
          " is not equal to ",
          this.activeSequence[index],
          " at index: ",
          index
        );
        this.changeState(this.ENUM.gameOver);
      }
    });
  }

  nextLevel() {
    console.log(
      "%c nextLevel state",
      "background: green; color: white; padding: 0px 100px"
    );
    // this.changeState(this.gs.start);
    this.setInstructions("Good Job", "white");
    this.wi.canUserInteract = false;
    setTimeout(() => {
      this.changeState(this.ENUM.start);
      this.level++;
    }, 400);
  }

  pause() {
    this.add(
      gameOverDialog("Pause", this.level, () => {
        SceneManagerInstance.changeScene(new GameScene());
      })
    );
  }

  gameOver() {
    console.log("gameOver state");
    // this.changeState(this.gs.start);

    if (this.level - 1 > StateManagerInstance.personalBest) {
      confetti();
      this.add(
        gameOverDialog(
          "New Personal Best",
          this.level,
          () => {
            SceneManagerInstance.changeScene(new GameScene());
          },
          () => {
            SceneManagerInstance.changeScene(new HomeScene());
          }
        )
      );
      StateManagerInstance.personalBest = this.level - 1;
      StateManagerInstance.saveToLocalStorage("personalBest", this.level - 1);
      StateManagerInstance.syncVariablesWithLocalStorage();
    } else {
      this.add(
        gameOverDialog(
          "Game Over",
          this.level - 1,
          () => {
            SceneManagerInstance.changeScene(new GameScene());
          },
          () => {
            SceneManagerInstance.changeScene(new HomeScene());
          }
        )
      );
    }
    this.wi.canUserInteract = false;
  }

  highScore() {
    console.log("highScore state");
    // this.changeState(this.gs.start);
    this.instructions.innerText = "High Score state";
  }

  playNote(noteNumber) {
    let propName = "q" + noteNumber;
    this.wi[`${propName}`].pressed();
  }

  playSequence(sequence) {
    let sequanceFinished = new Promise((resolve) => {
      let interval = setInterval(() => {
        this.playNote(sequence[index++]);
        if (index === sequence.length) {
          clearInterval(interval);
          resolve();
        }
      }, 300);
    });
    let index = 0;
    return sequanceFinished;
  }

  generateSequence() {
    let sequence = this.activeSequence;
    let newRandomNote = Math.floor(Math.random() * 4 + 1);
    // BUG there is a problem here. triple note repetition occurs
    // if the newRandomNote is equal to the last tow notes in sequance then generate a new one
    if (
      sequence[sequence.length - 1] === newRandomNote &&
      sequence[sequence.length - 2] === newRandomNote
    ) {
      let prevNote = newRandomNote;
      newRandomNote = Math.floor(Math.random() * 4 + 1);
      console.log(
        "%c Prevent triple note repetition",
        "background: pink; color: black; padding : 10px",
        sequence[sequence.length - 1] === newRandomNote,
        " Previous Random Note was : ",
        prevNote,
        " and the new random note is : ",
        newRandomNote
      );
    }
    sequence.push(newRandomNote);
    console.log(
      "%c Generated sequence: ",
      "background: blue; color: white; font-weight: bold",
      sequence
    );
    return sequence;
  }
}
