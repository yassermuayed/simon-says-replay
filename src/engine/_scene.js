export default class Scene {
  root;
  name;
  instance;
  kids;

  constructor(name, root = document.getElementById("root")) {
    console.log("scene class constructor");
    this.root = root;
    this.name = name;
    this.instance = root.appendChild(this.createSceneWindow());
  }

  /**
   * Creates a scene window element for the specified scene name.
   *
   * @param {string} sceneName - The name of the scene.
   * @return {HTMLElement} The created scene window element.
   */
  createSceneWindow() {
    let sceneWindow = document.createElement("div");
    sceneWindow.classList.add("scene");

    return sceneWindow;
  }

  gui() {
    let bottomBar = document.createElement("div");
    // bottomBar.classList.add("bottom-bar");
    // let textNodeDiv = document.createTextNode("Info Bar");
    // bottomBar.appendChild(textNodeDiv);

    // bottomBar.appendChild(
    //   button("Reset", () => {
    //     location.reload();
    //   })
    // );

    return bottomBar;
  }

  /**
   * Adds a given element to the list of kids and appends it to the instance.
   *
   * @param {Element} el - The element to be added.
   * @param {Array} cl - An optional array of classes to be added to the element.
   * @return {Element} The added element.
   */
  add(el, cl = []) {
    cl.forEach((c) => el.classList.add(c));
    this.instance.appendChild(el);
    return el;
  }

  delete() {
    this.instance.remove();
  }
}

//find binary search in js.
