import * as classes from "./App.css";

export default class App {
  #$title: HTMLHeadingElement;

  constructor(public $target: HTMLElement) {
    $target.innerHTML = "";
    this.#$title = document.createElement("h1");
    this.#$title.className = classes.niceTitle;
    this.$target.append(this.#$title);
    this.render();
  }

  render() {
    this.#$title.innerText = "Hello World!";
  }
}
