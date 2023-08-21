import _Scene from "../engine/_scene";
import di from "../assets/defaulticon.svg"
import homeIcon from "../assets/home.svg"

import { SceneManagerInstance } from "../main";
import HomeScene from "./scene_home";
import { comment, cont, iconButton, changeNameFiled, button } from "../components/blocks";
export default class SettingsScene extends _Scene {
  constructor() {
    super("Settings scene");
    this.add(comment("Settings Page"));
    this.add(changeNameFiled())
    this.add(cont([this.add(comment("Name"))]));
    this.add(button("Clear Local Storage", () => {
      localStorage.clear();
    }))

    this.add(
      cont([
        iconButton(homeIcon, () =>
          SceneManagerInstance.changeScene(new HomeScene())),

        iconButton(di, () =>
          SceneManagerInstance.changeScene(new SettingsScene())),
      ]),
      ["flex", "bottom"],
    );
  }
}
