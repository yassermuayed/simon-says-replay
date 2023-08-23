import "../css/home.css";

import di from "../assets/defaulticon.svg";
import homeIcon from "../assets/home.svg";

import { SceneManagerInstance, StateManagerInstance } from "../main.js";
import {
  button,
  comment,
  cont,
  gameLogo,
  iconButton,
} from "../components/blocks.js";
import _Scene from "../engine/_scene";
import GameScene from "./scene_game";
import SettingsScene from "./scene_settings";

export default class HomeScene extends _Scene {
  constructor() {
    super("home scene");
    console.log("========== Home scene");
    setTimeout(() => {
      SceneManagerInstance.changeScene(new GameScene());
    });
    this.add(gameLogo());
    this.add(comment("Simon Memory Challenge"));
    this.add(
      button("New Game", () =>
        SceneManagerInstance.changeScene(new GameScene())
      ),
      ["btn"]
    );

    // TODO connect to supabase or a leaderboard service

    this.add(comment("Personal Best"));
    this.add(comment(StateManagerInstance.personalBest));

    this.add(
      cont([
        iconButton(homeIcon, () => {}),
        // iconButton(di, () =>
        //   SceneManagerInstance.changeScene(new SettingsScene())),
        // iconButton(di, () =>
        //   SceneManagerInstance.changeScene(new SettingsScene())),
        iconButton(di, () =>
          SceneManagerInstance.changeScene(new SettingsScene())
        ),
      ]),
      ["flex", "bottom"]
    );
  }
}
