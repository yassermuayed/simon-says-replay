import { gameManager } from "../../main";
import { button, comment, redSquare } from "../blocks";
import Scene from "../scene";
import GameScene from "./scene_game";

export default class HomeScene extends Scene {

    constructor(){
        super("home scene")
        this.add(redSquare())
        this.add(comment("Simon Says Replay"))
        this.add(button("New Game",  ()=> gameManager.changeScene(new GameScene())))
        
        this.add(comment("Personal Best"))
        this.add(comment("13"))
        this.add(comment("World record"))
        this.add(comment("Yasser Muayed"))
        this.add(comment("50"))

        this.add(button("Settings"))
    }


}