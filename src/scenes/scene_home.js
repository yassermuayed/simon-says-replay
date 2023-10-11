import { SceneManagerInstance, StateManagerInstance } from "../main.js";
import { button, comment, cont } from "../components/blocks.js";
import _Scene from "../engine/_scene";
import GameScene from "./scene_game";
import SettingsScene from "./scene_settings";
import smallLogoUTL from "../../public/text-logo.webp";
export default class HomeScene extends _Scene {
  constructor() {
    super("home scene");
    console.log("========== Home scene");
    // setTimeout(() => {
    //   SceneManagerInstance.changeScene(new GameScene());
    // });
    let splashLogo = document.createElement("img");
    splashLogo.src = smallLogoUTL;
    splashLogo.className = "home-logo";
    this.add(splashLogo);

    this.add(
      button("New Game", () =>
        SceneManagerInstance.changeScene(new GameScene())
      ),
      ["new-game-btn"]
    );

    this.add(
      cont([
        this.add(comment("\u2606 High Score \u2606")),
        this.add(comment(StateManagerInstance.personalBest)),
      ]),
      ["high-score"]
    );
    let shareData = {
      title: "Simon Memory Challenge",
      text: "Get Simon Memory Challenge on Google Play Now!",
      url: "https://play.google.com/store/apps/details?id=com.yassermuayed.ssr",
    };
    let shareBtn = document.createElement("button");
    shareBtn.textContent = "Share";
    shareBtn.classList.add("btn");
    shareBtn.addEventListener("click", async () => {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log(err);
      }
    });
    this.add(
      cont([
        shareBtn,
        button("About", () =>
          SceneManagerInstance.changeScene(new SettingsScene())
        ),
      ]),
      ["flex", "bottom"]
    );
  }
}
