import "./css/style.css"
import Scene from "./js/scene"
import { redSquare, button } from "./js/blocks"
import HomeScene from "./js/scenes/scene_home"
import SplashScene from "./js/scenes/scene_splash"
import Manager from "./js/manager"
import RecurseLoader from "./js/resLoader"
import Store from "./js/store"
import {supabase} from "./sb/client"

let root = document.getElementById("root")

export let store = new Store()
export let resLoader = new RecurseLoader()
export let gameManager = new Manager()

window.onunload = () => {
    store.saveToLocalStorage("playtime", new Date() - new Date(store.get("lastVisit")) )
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
}


// let { data: countries, error } = await supabase
//   .from('countries')
//   .select('id,name')
// console.log(countries)

