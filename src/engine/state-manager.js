export default class StateManager {
  hasPlayedBefore;
  timesPlayedCount;
  lastTimePlayed;
  isSignedIn;
  playerName;
  personalBest;
  proofOfPersonalBest;
  allScoreProofs;
  worldRecord;
  WRHolder;

  // testing variables
  soundPlayCount;

  constructor() {
    this.soundPlayCount = 0;
    this.hasPlayedBefore = this.getFromLocalStorage("hasPlayedBefore");

    console.log("Has Played Before? ", this.hasPlayedBefore)
    if (this.hasPlayedBefore) {
      console.log(this.hasPlayedBefore, "played =====")

      this.syncVariablesWithLocalStorage()

    } else {
      this.firstTimeSetUp()
    }
  }

  firstTimeSetUp() {
    console.log("%c first time setup running", "background: pink; color: black; font-size: 2rem; padding: 20px 50px")
    this.saveToLocalStorage("hasPlayedBefore", true)

    this.initializeLocalStorageDefaultValues()
    this.syncVariablesWithLocalStorage()
  }

  initializeLocalStorageDefaultValues() {
    this.saveToLocalStorage("playerName", "Guest")
    this.saveToLocalStorage("personalBest", 0)
  }

  syncVariablesWithLocalStorage() {
    this.playerName = this.getFromLocalStorage("playerName");
    this.personalBest = this.getFromLocalStorage("personalBest")

  }

  saveToLocalStorage(name, item) {
    localStorage.setItem(name, JSON.stringify(item));
  }
  getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  // create save telemnetry funciton to call on game start, end, and record session info
}
