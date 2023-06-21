import { button, comment, photo, redSquare } from "../blocks";
import Scene from "../scene";
import logoURL from "../../assets/imgs/logo.png"
export default class GameScene extends Scene {

    constructor() {
        super("Game Scene")
        // welcome - watch - ready - replay - gameover - pb - wr 
        this.gameState = "welcome"
        this.loop()

        

    }

    loop(){
        switch (this.gameState) {
            case "welcome":
                this.add(comment("Attention! watch the sequence carefully and try to repeat it."))
                this.add(button("Start",()=> (this.changeState("watch"))))

                break;
                case "watch":
                this.add(comment("asfasd! watch the sequence carefully and try to repeat it."))
                this.add(photo(logoURL))
            default:
                break;
        }

    }

    changeState(ss){
        this.gameState = ss
        this.loop()
    }

}