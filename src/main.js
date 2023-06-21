import "./css/style.css"
import Scene from "./js/scene"
import { redSquare, button } from "./js/blocks"
import HomeScene from "./js/scenes/scene_home"
import SplashScene from "./js/scenes/scene_splash"
import Manager from "./js/manager"
import RecurseLoader from "./js/resLoader"

let root = document.getElementById("root")
export let resLoader = new RecurseLoader()
export let gameManager = new Manager()
