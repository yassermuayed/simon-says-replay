
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
        let tn = document.createTextNode(sceneName)
        textNodeDiv.classList.add("scene-name")

        let btn = document.createElement("button")
        btn.appendChild(document.createTextNode("delete"))
       
        textNodeDiv.appendChild(tn)
        dd.appendChild(textNodeDiv)
        return dd
    }

    add(el){
        this.kids.push(el)
        this.instance.appendChild(el)
    }

    delete(){
        this.root.removeChild(this.instance)
    }
    

}