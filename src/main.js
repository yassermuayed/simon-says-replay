console.log("%c STARTING UP", "background: green; padding: 5px 240px");

// import "../public/splash-logo.png";
// import "../public/text-logo.png";

import "./css/style.css";
import "./css/splash.css";
import "./css/home.css";
import "./css/game.css";

import "./components/confetti";

export const versionNumber = "2.0.0";
export const buildNumber = "6";
import SceneManager from "./engine/scene-manager";
import StateManager from "./engine/state-manager";

export const SceneManagerInstance = new SceneManager();
export const StateManagerInstance = new StateManager();
