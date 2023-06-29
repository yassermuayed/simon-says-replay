import { button, comment, photo, redSquare } from "../blocks";
import Scene from "../scene";
import "../../css/game.css"
import noteYellowURL from "../../assets/yellow.mp3"
import noteRedURL from "../../assets/red.mp3"
import noteGreenURL from "../../assets/green.mp3"
import noteBlueURL from "../../assets/blue.mp3"

import logoURL from "../../assets/imgs/logo.png"
export default class GameScene extends Scene {

    constructor() {
        super("Game Scene")
        // welcome - watch - ready - replay - gameover - pb - wr 
        this.gameState = "welcome"
        this.instructions = this.add(comment("WATCH"),["instructions"])
        this.add(button("FullScreen", () => {
            document.documentElement.requestFullscreen()
        }),["fullscreen"])
        this.s = new Simon()
        this.add(this.s)
        this.loop()
    }

    loop() {
        switch (this.gameState) {
            case "welcome":
                let welcomeMessage = this.add(comment("Attention! watch the sequence carefully and try to repeat it."))
                let welcomeButton = this.add(button("Start", () => {
                    welcomeMessage.remove()
                    welcomeButton.remove()
                    this.changeState("watch")
                }))

                break;
            case "watch":
                let instructionMessage = this.add(comment("watch the sequence carefully and try to repeat it."))
                
                setTimeout(() => {
                    instructionMessage.remove()
                    this.changeState("ready")
                }, 1000);

                break;
            case "ready":
                this.instructions.innerText = "Get ready"
                setTimeout(() => {
                    this.changeState("replay")
                }, 950)
                break;
            case "replay":
                this.instructions.innerText = "Replay"

                break
            default:
                break;
        }

    }

    changeState(ss) {
        this.gameState = ss
        this.loop()
    }

    simonfunciton() {
        let box = document.createElement("div")
        box.classList.add("simon")

        // quarter 1
        let q1 = document.createElement("div")
        q1.classList.add("q1", "quarter")

        let yellowSound = new Audio(noteYellowURL)
        q1.addEventListener("click", () => {
            yellowSound.play()
        })

        // quarter 2
        let q2 = document.createElement("div")
        q2.classList.add("q2", "quarter")

        let redSound = new Audio(noteRedURL)
        q2.addEventListener("click", () => {
            redSound.play()
        })

        // quarter 3
        let q3 = document.createElement("div")
        q3.classList.add("q3", "quarter")
        let greenSound = new Audio(noteGreenURL)
        q3.addEventListener("click", () => {
            greenSound.play()
        })

        // quarter 4
        let q4 = document.createElement("div")
        q4.classList.add("q4", "quarter")
        let blueSound = new Audio(noteBlueURL)
        q4.addEventListener("click", () => {
            blueSound.play()
        })
        
        box.appendChild(q1)
        box.appendChild(q2)
        box.appendChild(q3)
        box.appendChild(q4)
        box.classList.add("simon")
        return box
    }

}

class Simon{
    constructor(){
        let box = document.createElement("div")
        box.classList.add("simon")

        // quarter 1
        let q1 = document.createElement("div")
        q1.classList.add("q1", "quarter")

        let yellowSound = new Audio(noteYellowURL)
        q1.addEventListener("click", () => {
            yellowSound.play()
        })

        // quarter 2
        let q2 = document.createElement("div")
        q2.classList.add("q2", "quarter")

        let redSound = new Audio(noteRedURL)
        q2.addEventListener("click", () => {
            redSound.play()
        })

        // quarter 3
        let q3 = document.createElement("div")
        q3.classList.add("q3", "quarter")
        let greenSound = new Audio(noteGreenURL)
        q3.addEventListener("click", () => {
            greenSound.play()
        })

        // quarter 4
        let q4 = document.createElement("div")
        q4.classList.add("q4", "quarter")
        let blueSound = new Audio(noteBlueURL)
        q4.addEventListener("click", () => {
            blueSound.play()
        })
        
        box.appendChild(q1)
        box.appendChild(q2)
        box.appendChild(q3)
        box.appendChild(q4)
        box.classList.add("simon")
        return box

    }
}