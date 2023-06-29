import { gameManager } from "../../main";
import { button, comment, cont, loading, redSquare } from "../blocks";
import Scene from "../scene";
import HomeScene from "./scene_home";
import '../../css/splash.css'

export default class SplashScene extends Scene {

    constructor() {
        super("Splash scene")
        let loadingBar = this.add(loading())
        console.log("loading type: ",  loading)
        console.log("splash screen")

        let interv =setInterval(() => {
            console.log("run set intervel")
        }, 100);


        setTimeout(() => {
            clearInterval(interv)
            loadingBar.remove()
            let bbb = this.add(button("Start", () => {

                // document.documentElement.requestFullscreen()
                gameManager.changeScene(new HomeScene())
            }))

            bbb.click()
        }, 1000);
       
    }

}