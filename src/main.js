import "./assets/g165.png";
import "./assets/textlogo.png"
console.log("%c STARTING UP", "background: green; padding: 5px 240px");

import "./css/style.css";
import "./components/confetti";
export const versionNumber = "2.0.0";
import SceneManager from "./engine/scene-manager";
import StateManager from "./engine/state-manager";
export const SceneManagerInstance = new SceneManager();
export const StateManagerInstance = new StateManager();

console.log("main running ++++++++++++++");
