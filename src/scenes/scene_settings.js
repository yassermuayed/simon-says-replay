import styles from "../css/settings.module.css";
import _Scene from "../engine/_scene";

import { SceneManagerInstance, versionNumber } from "../main";
import HomeScene from "./scene_home";
import { comment, cont, button, htm } from "../components/blocks";
export default class SettingsScene extends _Scene {
  constructor() {
    super("Settings scene");
    this.add(comment("Simon Memory Challenge"));
    this.add(comment(`Version ${versionNumber}`));
    this.add(comment("2023"));
    this.add(htm("br"));
    this.add(comment("This is an open source project under the MIT license"), [
      styles.license,
    ]);
    let link = document.createElement("a");
    link.href = "https://github.com/yassermuayed/simon-says-replay";
    link.setAttribute("target", "_blank");
    link.appendChild(document.createTextNode("Github"));
    this.add(link);
    this.add(htm("a"));

    this.add(htm("br"));
    let IGLink = htm("a");
    this.add(comment("Created by Yasser Muayed"));
    IGLink.href = "https://www.instagram.com/yassermuayed/";
    IGLink.setAttribute("target", "_blank");
    IGLink.appendChild(document.createTextNode("Follow me on IG"));
    this.add(IGLink);
    this.add(htm("br"));
    this.add(
      button("Reset Your Progress ", async () => {
        await localStorage.clear();
        location.reload();
      })
    );

    this.add(
      cont([
        button("Back", () => {
          SceneManagerInstance.changeScene(new HomeScene());
        }),
      ]),
      ["flex", "bottom"]
    );
  }
}
