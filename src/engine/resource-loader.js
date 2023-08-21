import greenURL from "../assets/imgs/1x/green.png";
import logoURL from "../assets/imgs/logo.png";

const imagesToLoad = [greenURL, logoURL];
export default class RecurseLoader {
  constructor() {
    imagesToLoad.forEach((imgRes) => this.loadImage(imgRes));
  }

  loadImage(image) {
    const ni = new Image();
    ni.src = image;
    ni.onload = console.log("image loaded 11");
  }
}