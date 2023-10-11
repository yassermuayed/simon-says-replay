import { StateManagerInstance } from "../main";
import Signal from "../engine/_signal";
export default class Widget {
  audioContext;
  obj;
  constructor() {
    console.log("Widget constructor");

    this.audioContext = new AudioContext();

    this.obj = document.createElement("div");
    this.obj.classList.add("simon");

    this.obj.q1 = this.quarter("q1");
    this.obj.append(this.obj.q1);

    this.obj.q2 = this.quarter("q2");
    this.obj.append(this.obj.q2);

    this.obj.q3 = this.quarter("q3");
    this.obj.append(this.obj.q3);

    this.obj.q4 = this.quarter("q4");
    this.obj.append(this.obj.q4);

    this.obj.canUserInteract = false;
    this.obj.userInputSignals = new Signal();

    // styling divs
    let bg1 = document.createElement("div");
    bg1.classList.add("bg1");
    this.obj.appendChild(bg1);

    let fg1 = document.createElement("div");
    fg1.classList.add("fg1");
    this.obj.appendChild(fg1);

    return this.obj;
  }

  quarter(qClassName) {
    let quarter = document.createElement("div");
    quarter.classList.add("quarter", qClassName);
    quarter.pressed = this.pressed.bind(this, quarter, qClassName);

    quarter.addEventListener("click", () => {
      if (this.obj.canUserInteract) {
        this.pressed(quarter, qClassName);
        this.obj.userInputSignals.emit(qClassName);
      }
    });
    return quarter;
  }

  pressed(div, qClassName) {
    StateManagerInstance.soundPlayCount++;
    console.log("press count: ", StateManagerInstance.soundPlayCount);
    console.log(div, " pressed with class name: ", qClassName);

    let originalColor = div.style.backgroundColor;
    let originalBoxShadow = div.style.boxShadow;
    let originalScale = div.style.transform;
    div.style.backgroundColor = "white";
    div.style.transform = "scale(1.1)";
    div.style.boxShadow = "0 0 20px white";
    setTimeout(() => {
      div.style.backgroundColor = originalColor;
      div.style.transform = originalScale;
      div.style.boxShadow = originalBoxShadow;
    }, 100);
    const generateAudio = () => {
      let multiplier = 1;

      switch (qClassName) {
        case "q1":
          multiplier = 1.2;
          break;
        case "q2":
          multiplier = 1.4;
          break;
        case "q3":
          multiplier = 1.6;
          break;
        case "q4":
          multiplier = 1.8;
          break;
      }

      // Create a sine wave oscillator.
      const oscillator = this.audioContext.createOscillator();
      oscillator.frequency.setValueAtTime(
        260 * multiplier,
        this.audioContext.currentTime
      );
      oscillator.connect(this.audioContext.destination);

      oscillator.start();
      setTimeout(() => {
        oscillator.stop();
      }, 140);
    };
    generateAudio();

    function vibratePhone(duration) {
      // Check if the browser supports vibration.
      if (!navigator.vibrate) {
        return;
      }
      // Vibrate the phone for the specified duration.
      navigator.vibrate(duration);
    }
    vibratePhone(100);
  }
}
