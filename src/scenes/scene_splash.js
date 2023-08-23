import "../css/splash.css";
import _Scene from "../engine/_scene";
import { SceneManagerInstance } from "../main";
import { loading, button, comment } from "../components/blocks";
import HomeScene from "./scene_home";
import loadingOperations from "../engine/loading-operations";

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
    this.operations = loadingOperations;
    this.add(comment("SIMON SAYS REPLAY"), ["splash-logo"]);
    this.loadingWidget = this.add(loading());

    console.log("Loading Widget : ", this.loadingWidget);
    console.dir(this.loadingWidget);
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
      // setTimeout(() => {
      //   SceneManagerInstance.changeScene(new HomeScene());
      // });

      this.loadingWidget.loadingText.innerText = ` 100% Loaded (${completedOperations}/${this.operations.length}) (0KiB)`;
      this.add(
        button("TAP TO START", () => {
          SceneManagerInstance.changeScene(new HomeScene());
        }),
        ["splash-button"]
      );
    }
  }

  async startLoading() {
    let completedOperations = 0;
    this.operations.forEach((op) => {
      op.execute();
      completedOperations++;
      this.loadingProgress = completedOperations / this.operations.length;
      this.update(op, completedOperations);
    });
  }
}
