import "../css/game.css";

import { comment, gameOverDialog, trafficLight } from "../components/blocks";
import _Scene from "../engine/_scene";
import Widget from "./widget";
import { SceneManagerInstance, StateManagerInstance } from "../main";
import confetti from "../components/confetti";



export default class GameScene extends _Scene {
  FSMEnum = {
    freshGame: "FRESH_GAME",
    start: "START",
    watch: "WATCH",
    getReady: "GET_READY",
    replay: "REPLAY",
    nextLevel: "NEXT_LEVEL",
    gameOver: "GAME_OVER",
    highScore: "HIGH_SCORE",
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
    this.instructions = this.add(comment("instructions"), ["instructions"]);
    this.changeState(this.FSMEnum.freshGame);
    this.userInput = [];
    this.activeSequence = [];
    // LATER ($one) study bind(this) in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    this.wi.userInputSignals.add(this.userInputListener.bind(this));
  }

  changeState(state, stuffToRemove = []) {
    this.loop(state);
    stuffToRemove.forEach((el) => el.remove());
  }

  setInstructions(instructions = " ", color = "white") {
    this.instructions.innerText = instructions;
    this.trafficLight.style.backgroundColor = color;
  }

  loop(param) {
    switch (param) {
      case this.FSMEnum.freshGame:
        this.freshGame();
        break;
      case this.FSMEnum.start:
        this.start();
        break;
      case this.FSMEnum.watch:
        this.watch();
        break;
      case this.FSMEnum.getReady:
        this.getReady();
        break;
      case this.FSMEnum.replay:
        this.replay();
        break;
      case this.FSMEnum.nextLevel:
        this.nextLevel();
        break;
      case this.FSMEnum.gameOver:
        this.gameOver();
        break;
      case this.FSMEnum.highScore:
        this.highScore();
        break;

      default:
        break;
    }
  }

  freshGame() {
    console.log("freshGame state");
    this.setInstructions("New Game", "blue");
    this.changeState(this.FSMEnum.start);
  }

  start() {
    console.log("start state");
    this.setInstructions("Start", "pink");
    this.userInput = [];
    setTimeout(() => {
      this.changeState(this.FSMEnum.watch);
      console.log();
    }, 500);
  }

  watch() {
    console.log("watch state");
    this.setInstructions("Watch", "yellow");

    this.activeSequence = this.generateSequence(this.level);
    this.playSequence(this.activeSequence).then(() => {
      setTimeout(() => {
        this.changeState(this.FSMEnum.getReady);
      }, 400);
    })

  }

  getReady() {
    console.log("getReady state");
    this.setInstructions("Get Ready", "red");

    setTimeout(() => {
      this.changeState(this.FSMEnum.replay);
    }, 2000);
  }

  replay() {
    console.log("replay state");
    this.setInstructions("Replay", "green");
    console.dir(this.wi)
    this.wi.canUserInteract = true;
  }
  userInputListener(message) {
    console.log("userInputListener received message: ", message);
    this.userInput.push(message);
    this.checkUserInput();
    console.log(this.userInput, " after push");
  }

  checkUserInput() {
    console.log("%c checkUserInput", 'background: red; color: #bada55; margin: 10px');
    this.userInput.map((el, index) => {

      if (el.slice(1) === (this.activeSequence[index] + "")) {
        console.log("%c Correct", "background: green", el.slice(1), " is equal to ", this.activeSequence[index], " at index: ", index);
        if (index === this.activeSequence.length - 1) {
          this.changeState(this.FSMEnum.nextLevel);
        }
      } else {
        console.log("%c Incorrect", "background: red", el.slice(1), " is not equal to ", this.activeSequence[index], " at index: ", index);
        this.changeState(this.FSMEnum.gameOver);
      }

    });

  }

  nextLevel() {
    console.log("%c nextLevel state", "background: green; color: white; padding: 0px 100px");
    // this.changeState(this.gs.start);
    this.setInstructions("Next Level", "white");
    this.wi.canUserInteract = false;
    setTimeout(() => {
      this.changeState(this.FSMEnum.start);
      this.level++;
    }, 2000);
  }

  gameOver() {
    console.log("gameOver state");
    // this.changeState(this.gs.start);

    if (this.level > StateManagerInstance.personalBest) {
      confetti();
      this.add(gameOverDialog("New Personal Best", this.level, () => {
        SceneManagerInstance.changeScene(new GameScene());
      }));
      StateManagerInstance.personalBest = this.level
      StateManagerInstance.saveToLocalStorage("personalBest", this.level)
      StateManagerInstance.syncVariablesWithLocalStorage()
    } else {
      this.add(gameOverDialog("Game Over", this.level, () => {
        SceneManagerInstance.changeScene(new GameScene());
      }));
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
    })
    let index = 0;
    return sequanceFinished
  }

  generateSequence() {
    let sequence = this.activeSequence;
    let newRandomNote = Math.floor(Math.random() * 4 + 1);
    // BUG there is a problem here. triple note repetition occurs
    // if the newRandomNote is equal to the last tow notes in sequance then generate a new one
    if (sequence[sequence.length - 1] === newRandomNote && sequence[sequence.length - 2] === newRandomNote) {
      let prevNote = newRandomNote;
      newRandomNote = Math.floor(Math.random() * 4 + 1);
      console.log("%c Prevent triple note repetition", "background: pink; color: black; padding : 10px", sequence[sequence.length - 1] === newRandomNote, " Previous Random Note was : ", prevNote, " and the new random note is : ", newRandomNote);
    }
    sequence.push(newRandomNote);
    console.log("%c Generated sequence: ", "background: blue; color: white; font-weight: bold", sequence);
    return sequence
  }
}
