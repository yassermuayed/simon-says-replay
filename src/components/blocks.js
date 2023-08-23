import "../css/blocks.css";

import { StateManagerInstance } from "../main";
import Block from "./block";

import defaultIcon from "../assets/defaulticon.svg";
import logoURL from "../assets/favicon/android-chrome-512x512.png";

export function gameLogo() {
  let logo = document.createElement("div");
  logo.classList.add("logo-image")

  let image = document.createElement("img")
  image.src = logoURL;
  image.style.maxWidth = "100%"
  logo.appendChild(image)

  return logo
}

export function redSquare() {
  let rs = document.createElement("div");
  rs.classList.add("red-square");
  rs.setAttribute("draggable", "true");
  return rs;
}

export function trafficLight(bgColor = "white") {
  let tl = new Block();
  tl.classList.add("traffic-light");
  tl.style.backgroundColor = bgColor;
  return tl;
}


export function coloredCircle() {
  let test = document.createElement("block");
  let cc = document.createElement("div");
  cc.appendChild(test);
  cc.classList.add("traffic-light");
  return cc;
}


export function button(
  text = "press",
  action = () => console.log("Default Action"),
) {
  let btn = document.createElement("button");
  btn.classList.add("btn", "unselectable");
  btn.appendChild(document.createTextNode(text));
  btn.addEventListener("click", () => action());

  return btn;
}

export function iconButton(svgIcon, callBack = () => { console.log("Default Action") }) {
  let ib = document.createElement("button");
  ib.classList.add("icon-button")

  let icon = document.createElement("img")
  icon.src = svgIcon;
  ib.appendChild(icon)

  ib.addEventListener("click", () => callBack())
  return ib;
}

export function comment(text = "Default comment", classes = []) {
  let comment = document.createElement("div");
  comment.appendChild(document.createTextNode(text));
  comment.classList.add(["unselectable", ...classes]);
  return comment;
}

export function photo(url) {
  let pp = document.createElement("img");
  pp.setAttribute("src", url);
  return pp;
}

export function cont(kids = []) {
  let div = document.createElement("div");
  kids.forEach((c) => div.appendChild(c));
  div.classList.add("container");
  return div;
}

export function loading() {
  let loading = document.createElement("div");
  loading.classList.add("loading");

  let progress = document.createElement("div");
  progress.classList.add("progress");
  loading.progress = progress;

  let loadingText = document.createElement("div");
  loadingText.classList.add("loading-text");
  loading.loadingText = loadingText;

  loading.appendChild(loadingText);
  loading.appendChild(progress);
  return loading;
}

export function inputFiled() {
  let inputFiled = document.createElement("input")
  inputFiled.placeholder = "Type Your Name Here"
  inputFiled.value = StateManagerInstance.playerName
  return inputFiled
}

export function dialog(pText = "Default Paragraph Text", formActionCallBack) {
  let dialog = document.createElement("dialog")
  dialog.classList.add("dialog")


  let paragraph = document.createElement("p")
  paragraph.classList.add("dialog-title")
  paragraph.innerText = pText;
  dialog.appendChild(paragraph)

  let form = document.createElement("form")
  form.setAttribute("method", "dialog")



  let btn = document.createElement("button");
  btn.type = "submit"
  // LATER study funciton once and for all shloud i put paranthases or not
  btn.addEventListener("click", console.log("clicked"))
  btn.textContent = "Action";
  btn.classList.add("dialog-button")

  form.appendChild(inputFiled())
  form.appendChild(btn)
  form.addEventListener("submit", (e) => {
    let vv = e.target[0].value
    if (vv != "") {
      console.log(typeof (e.target[0].value))
      console.log("form submitted", e.target[0].value)
      formActionCallBack(vv)
    }

  })
  dialog.appendChild(form)
  return dialog
}

export function changeNameFiled() {
  let cnf = document.createElement("div")

  const getValue = (vv) => {
    console.log("get value funciton", vv)
    StateManagerInstance.saveToLocalStorage("playerName", vv)
    StateManagerInstance.syncVariablesWithLocalStorage()
    paragraph.textContent = StateManagerInstance.playerName
  }

  let thisDialog = dialog("Enter Name", getValue)
  cnf.classList.add("change-name-filed")

  let paragraph = document.createElement("p")
  paragraph.textContent = StateManagerInstance.playerName
  cnf.appendChild(paragraph)

  let button = document.createElement("button")
  let buttonIcon = document.createElement("img")
  buttonIcon.src = defaultIcon;
  button.appendChild(buttonIcon)
  button.addEventListener("click", () => {
    console.log("form name pressed")
    thisDialog.setAttribute("open", "true")
  })
  cnf.appendChild(button)

  cnf.appendChild(thisDialog)
  return cnf
}


export function gameOverDialog(message = "Game Over", score = 0, callBack) {
  let gameOver = document.createElement("div")
  gameOver.classList.add("game-over-dialog")

  let messageTextNode = document.createTextNode(message)
  gameOver.appendChild(messageTextNode)

  let scoreDiv = document.createElement("div")
  scoreDiv.classList.add("game-over-score")
  let scoreDivTextNode = document.createTextNode(score)
  scoreDiv.appendChild(scoreDivTextNode)
  gameOver.appendChild(scoreDiv)

  let playAgainButton = document.createElement("button")
  playAgainButton.textContent = "Play Again"
  playAgainButton.classList.add("play-again-button")
  playAgainButton.addEventListener("click", callBack)
  gameOver.appendChild(playAgainButton)


  return gameOver
}

