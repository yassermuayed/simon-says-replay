import "./css/style.css"
import Scene from "./js/scene"
import { redSquare, button } from "./js/blocks"
import HomeScene from "./js/scenes/scene_home"
import SplashScene from "./js/scenes/scene_splash"
import Manager from "./js/manager"
import RecurseLoader from "./js/resLoader"
import Store from "./js/store"


let root = document.getElementById("root")

export let store = new Store()
export let resLoader = new RecurseLoader()
export let gameManager = new Manager()

let startingTime = new Date()

setInterval(() => {
    console.log(new Date() - stringToDate(store.get("lastVisit")))
}, 1000);

// convert string back to date
function stringToDate(str){
    let date = new Date(str)
    return date
}

window.onunload = () => {
    store.saveToLocalStorage("playtime", new Date() - new Date(store.get("lastVisit")) )
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
}