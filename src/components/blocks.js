import "../css/blocks.css";

import { StateManagerInstance } from "../main";
import Block from "./block";

export function htm(type, classes = []) {
  let html = document.createElement(type);
  html.classList.add(...classes);
  return html;
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
  action = () => console.log("Default Action")
) {
  let btn = document.createElement("button");
  btn.classList.add("btn", "unselectable");
  btn.appendChild(document.createTextNode(text));
  btn.addEventListener("click", () => action());

  return btn;
}

export function iconButton(
  svgIcon,
  callBack = () => {
    console.log("Default Action");
  }
) {
  let ib = document.createElement("button");
  ib.classList.add("icon-button");

  let icon = document.createElement("img");
  icon.src = svgIcon;
  ib.appendChild(icon);

  ib.addEventListener("click", () => callBack());
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
  let inputFiled = document.createElement("input");
  inputFiled.placeholder = "Type Your Name Here";
  inputFiled.value = StateManagerInstance.playerName;
  return inputFiled;
}

export function dialog(pText = "Default Paragraph Text", formActionCallBack) {
  let dialog = document.createElement("dialog");
  dialog.classList.add("dialog");

  let paragraph = document.createElement("p");
  paragraph.classList.add("dialog-title");
  paragraph.innerText = pText;
  dialog.appendChild(paragraph);

  let form = document.createElement("form");
  form.setAttribute("method", "dialog");

  let btn = document.createElement("button");
  btn.type = "submit";
  
  btn.addEventListener("click", console.log("clicked"));
  btn.textContent = "Action";
  btn.classList.add("dialog-button");

  form.appendChild(inputFiled());
  form.appendChild(btn);
  form.addEventListener("submit", (e) => {
    let vv = e.target[0].value;
    if (vv != "") {
      console.log(typeof e.target[0].value);
      console.log("form submitted", e.target[0].value);
      formActionCallBack(vv);
    }
  });
  dialog.appendChild(form);
  return dialog;
}

export function gameOverDialog(message = "Game Over", score = 0, callBack, callBack2 = () => {}) {
  let gameOver = htm("div", ["game-over-dialog"]);

  let messageTextNode = document.createTextNode(message);
  gameOver.appendChild(messageTextNode);

  let scoreDiv = htm("div", ["game-over-score"]);
  let scoreDivTextNode = document.createTextNode(score);
  scoreDiv.appendChild(scoreDivTextNode);
  gameOver.appendChild(scoreDiv);

  let mainMenuButton = htm("button", ["play-again-button"]);
  mainMenuButton.textContent = "Main Menu";
  mainMenuButton.addEventListener("click", callBack2);
  gameOver.appendChild(mainMenuButton);

  let playAgainButton = htm("button", ["play-again-button"]);
  playAgainButton.textContent = "Play Again";
  playAgainButton.addEventListener("click", callBack);
  gameOver.appendChild(playAgainButton);


  return gameOver;
}
