import SplashScene from "../scenes/scene_splash";

export default class SceneManager {
  startingScene;
  constructor(startingScene) {
    console.log("Manager running ++++++++++++++");
    // HACK change this back to null after testing
    this.startingScene = startingScene;
    this.activeScene = null;
    if (this.activeScene === null) {
      this.activeScene = new SplashScene();
    }
  }

  changeScene(requiredScene) {
    this.activeScene.delete();
    this.activeScene = requiredScene;
  }
}
