import "./main.css";
export class Main extends HTMLElement {
  constructor() {
    super();
    if (this.hasAttribute("content")) {
      this.content = this.getAttribute("content");
    }
    // prettier-ignore
    this.innerHTML = //html
    `
    <main id="main_container">
    <h1>MAIN SECTION HERE</h1>
    ${this.content}
    </main>
        `;
  }
  /* attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName == "content")
      this.innerHTML = `
      <main id="main_container">
      <h1>MAIN SECTION HERE</h1>
      ${newVal}
      </main>
      `;
  }
  static get observedAttributes() {
    return ["content"];
  } */
}
// END CLASS
