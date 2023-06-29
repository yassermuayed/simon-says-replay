import { gameManager, store } from "../../main";
import { button, comment, cont, redSquare } from "../blocks";
import Scene from "../scene";
import GameScene from "./scene_game";
import '../../css/home.css'
export default class HomeScene extends Scene {

    constructor(){
        super("home scene")
        this.add(redSquare())
        this.add(comment("Simon Says Replay"))
        if(store.get("firstTime")){
            this.add(comment("Welcome new player"))
            store.saveToLocalStorage("firstTime", false)
        }
        this.add(button("New Game",  ()=> gameManager.changeScene(new GameScene())))

        // just for development
        setTimeout(() => {
            gameManager.changeScene(new GameScene())
        }, 100);
        

        this.add(comment("Personal Best"))
        this.add(comment(store.get("pb")))
        this.add(comment("World record"))
        this.add(comment("Current Holder"))
        this.add(comment("Yasser Muayed"))
        this.add(comment(store.get("wr")))


        this.add(cont([button("Settings"), button("About"),this.add(button("Exit"),['follow-me'])]),["flex","bottom"])

       
    }


}