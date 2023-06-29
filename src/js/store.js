export default class Store {
    constructor() {

        // first time running task
        if(this.get("firstTime") === null){
            this.saveToLocalStorage("firstTime", true)
            this.saveToLocalStorage("firstTimeDate", new Date())
            this.saveToLocalStorage("lastVisit", new Date())
            this.saveToLocalStorage("visits", {history:[]})
            this.saveToLocalStorage("pb", 0)
            this.saveToLocalStorage("wr", 0)
            this.saveToLocalStorage("visitsCount", 0)
            this.saveToLocalStorage("score", 0)
            this.saveToLocalStorage("playtime", 0)
            
        } else {
            this.saveToLocalStorage("lastVisit", new Date())
            this.saveToLocalStorage("visitsCount", this.get("visitsCount") + 1)
            let vv = this.get("visits")
            vv.history.push(new Date())
            this.saveToLocalStorage("visits", vv)





        }
    }

    saveToLocalStorage(name, item) {
        localStorage.setItem(name, JSON.stringify(item))
    }
    get(name) {
        return JSON.parse(localStorage.getItem(name))
    }


    // create save telemnetry funciton to call on game start, end, and record session info
    
}