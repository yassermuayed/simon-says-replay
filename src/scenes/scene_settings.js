import _Scene from "../engine/_scene";
import di from "../assets/defaulticon.svg";
import homeIcon from "../assets/home.svg";

import { SceneManagerInstance, versionNumber } from "../main";
import HomeScene from "./scene_home";
import { comment, cont, iconButton, button } from "../components/blocks";
export default class SettingsScene extends _Scene {
  constructor() {
    super("Settings scene");
    this.add(comment("Settings"));
    this.add(comment("Simon Memory Challenge"));
    this.add(comment(`Version ${versionNumber}`));

    // this.add(cont([this.add(comment("Name")), this.add(changeNameFiled())]));

    this.add(
      button("Clear Data", () => {
        localStorage.clear();
        location.reload();
      })
    );

    this.add(
      cont([
        iconButton(homeIcon, () =>
          SceneManagerInstance.changeScene(new HomeScene())
        ),

        iconButton(di, () =>
          SceneManagerInstance.changeScene(new SettingsScene())
        ),
      ]),
      ["flex", "bottom"]
    );
  }
}
