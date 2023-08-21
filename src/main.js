import './css/style.css';
import "./components/confetti";
import SceneManager from './engine/scene-manager';
import StateManager from './engine/state-manager';

export const SceneManagerInstance = new SceneManager();
export const StateManagerInstance = new StateManager();

console.log('main running ++++++++++++++');
