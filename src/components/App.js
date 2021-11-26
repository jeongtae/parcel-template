import * as classes from "./App.css";

export default class App {
  #$title;

  constructor(target) {
    target.innerHTML = "";
    this.$target = target;
    this.#$title = document.createElement("h1");
    this.#$title.className = classes.niceTitle;
    this.$target.append(this.#$title);
    this.render();
  }

  render() {
    this.#$title.innerText = "Hello World!";
  }
}
