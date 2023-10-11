import { SceneManagerInstance, buildNumber } from "../main";
import _Scene from "../engine/_scene";
import { loading, button, comment, htm } from "../components/blocks";
import HomeScene from "./scene_home";

export default class SplashScene extends _Scene {
  constructor() {
    super("Splash scene");
    console.log("========= splash scene constructor");
    this.add(comment(`V2.0.0 Webpack build ${buildNumber} Android 33`), ["build-number"]);

    let splashLogo = htm("img", ["splash-logo"]);
    splashLogo.src = "../../public/splash-logo.png";
    this.add(splashLogo);

    this.loadingWidget = this.add(loading());
    setTimeout(() => {
      this.loadingWidget.loadingText.innerText = `Loading Complete`;
      this.add(
        button("TAP TO START", () => {
          navigator.vibrate(100);
          this.requestFullscreen(document.documentElement);
          SceneManagerInstance.changeScene(new HomeScene());
        }),
        ["splash-button"]
      );
    }, 300);
  }

  requestFullscreen(element) {
    element.requestFullscreen();
  }
}
