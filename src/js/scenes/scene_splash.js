import { gameManager } from "../../main";
import { button, comment, redSquare } from "../blocks";
import Scene from "../scene";
import HomeScene from "./scene_home";

export default class SplashScene extends Scene {

    constructor(){
        super("Splash scene")
        this.add(comment("loading"))
        console.log("splash screen")
        setTimeout(() => {
            gameManager.changeScene(new HomeScene())
        }, 1000);
    }

}