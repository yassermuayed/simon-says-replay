import { store } from "../main"
import { button } from "./blocks"

export default class Scene {

    constructor(name, root = document.getElementById("root")) {
        this.root = root
        this.name = name
        this.instance = root.appendChild(this.newDiv(this.name))
        this.kids = []
     
    }

    newDiv(sceneName){
        let dd = document.createElement("div")
        dd.classList.add('scene')

        let textNodeDiv = document.createElement("div")
        let tn = document.createTextNode(sceneName + " " + store.get("visitsCount") + " Time: " + store.get("playtime"))
        textNodeDiv.classList.add("scene-name","unselectable")
        textNodeDiv.addEventListener("click", () => {
            location.reload()
        })
        let btn = document.createElement("button")
        btn.appendChild(document.createTextNode("delete"))
       
        textNodeDiv.appendChild(tn)
        dd.appendChild(textNodeDiv)
        return dd
    }

    add(el , cl = [] ){
        cl.forEach(c => el.classList.add(c))
        this.kids.push(el)
        this.instance.appendChild(el)
        return el
    }

    delete(){
        this.instance.remove()
    }
    

}

//find binary search in js.