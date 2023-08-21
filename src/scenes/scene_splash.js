import "../css/splash.css";
import _Scene from "../engine/_scene";
import { loading, button, comment } from "../components/blocks";
import { SceneManagerInstance } from "../main";
import HomeScene from "./scene_home";

export default class SplashScene extends _Scene {
  loadingWidget;
  loadingProgress;
  loadingComplete;
  // TODO loadingOperations is an array if functions that can be appended to from anywhere 
  operations;
  constructor() {
    super("Splash scene");
    console.log("========= splash scene constructor");
    this.loadingComplete = false;
    this.loadingProgress = 0;
    this.operations = [];
    for (let i = 0; i < 374; i++) {
      this.operations.push(this.getRandomOperationName());
    }
    this.add(comment("SIMON SAYS REPLAY"), ["splash-logo"]);
    this.loadingWidget = this.add(loading());


    console.log("Loading Widget : ", this.loadingWidget)
    console.dir(this.loadingWidget)
    this.startLoading();
  }

  requestFullscreen(element) {
    // Check if the element supports fullscreen.
    if (!element.requestFullscreen) {
      return;
    }

    // Request fullscreen for the element.
    element.requestFullscreen();
  }

  update(opName, completedOperations) {
    // this.loadingWidget.innerHTML = `${this.loadingProgress * 100}%`;
    this.loadingWidget.progress.style.width = `${this.loadingProgress * 100}%`;
    let loadingPercentage = (this.loadingProgress * 100).toFixed(2);
    this.loadingWidget.loadingText.innerText = ` ${loadingPercentage}% ${opName} (${completedOperations}/${this.operations.length}) (0KiB)`;
    if (completedOperations >= this.operations.length) {
      this.loadingComplete = true;
    }

    if (this.loadingComplete) {
      // HACK Remove this to prevent changing scene directly
      SceneManagerInstance.changeScene(new HomeScene())
      this.loadingWidget.loadingText.innerText = ` 100% Loaded (${completedOperations}/${this.operations.length}) (0KiB)`;
      this.add(
        button(
          "TAP TO START",
          () => {
            // HACK uncomment to restore full screen request on start
            //  check to see if device is mobile
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              // this.requestFullscreen(document.body);
            }
            SceneManagerInstance.changeScene(new HomeScene())
          }
        ),
        ["splash-button"]);
    }

  }

  async startLoading() {
    let completedOperations = 0;
    this.operations.forEach((op) => {
      this.fakeOperation().then(() => {
        completedOperations++;
        this.loadingProgress = completedOperations / this.operations.length;
        console.log(op)
        this.update(op, completedOperations);

      });
    })
  }

  fakeOperation() {
    let randomTime = Math.random() * 500;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("success");
      }, randomTime);
    })
  }

  getRandomOperationName() {
    const operationNames = [
      "Operation",
    ];

    const randomIndex = Math.floor(Math.random() * operationNames.length);
    return operationNames[randomIndex];
  }
}
