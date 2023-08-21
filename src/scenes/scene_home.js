import "../css/home.css";
import di from "../assets/defaulticon.svg"
import homeIcon from "../assets/home.svg"
import { SceneManagerInstance, StateManagerInstance } from "../main.js";
import { button, comment, cont, iconButton, redSquare } from "../components/blocks.js";
import _Scene from "../engine/_scene";
import GameScene from "./scene_game";
import SettingsScene from "./scene_settings";


export default class HomeScene extends _Scene {
  constructor() {
    super("home scene");

    console.log("========== Home scene");
    this.add(redSquare());
    this.add(comment("Simon Says Replay"));
    this.add(
      button("New Game", () =>
        SceneManagerInstance.changeScene(new GameScene()),
      ),
    );

    // TODO connect to supabase or a leaderboard service

    this.add(comment("____________"));
    this.add(comment(StateManagerInstance.playerName));
    this.add(comment("Personal Best"));
    this.add(comment(StateManagerInstance.personalBest));
    this.add(comment("____________"));
    this.add(comment("World record"));
    this.add(comment("0"));
    this.add(comment("World Champion"));
    this.add(comment("user name"));

    this.add(
      cont([
        iconButton(homeIcon, () => { }),
        // iconButton(di, () =>
        //   SceneManagerInstance.changeScene(new SettingsScene())),
        // iconButton(di, () =>
        //   SceneManagerInstance.changeScene(new SettingsScene())),
        iconButton(di, () =>
          SceneManagerInstance.changeScene(new SettingsScene())),
      ]),
      ["flex", "bottom"],
    );
  }
}
