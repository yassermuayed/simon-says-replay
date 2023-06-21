import SplashScene from "./scenes/scene_splash"

export default class Manager{
    constructor(activeScene = null, requiredScene = null){
        this.activeScene = activeScene
        

        if (this.activeScene === null){
            this.activeScene = new SplashScene()
        }
    }

    changeScene(requiredScene){
        this.activeScene.delete()
        this.activeScene = requiredScene
    }
}