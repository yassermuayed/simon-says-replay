import { SceneManagerInstance, buildNumber, versionNumber } from "../main";
import _Scene from "../engine/_scene";
import { loading, button, comment, htm } from "../components/blocks";
import HomeScene from "./scene_home";
import splashLogoURL from "../../public/splash-logo.webp";

export default class SplashScene extends _Scene {
  constructor() {
    super("Splash scene");
    console.log("========= splash scene constructor");
    this.add(comment(`V ${versionNumber} b${buildNumber}`), ["build-number"]);

    let splashLogo = htm("img", ["splash-logo"]);
    splashLogo.src = splashLogoURL;
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
    // TODO uncomment
  // element.requestFullscreen();
  }
}
