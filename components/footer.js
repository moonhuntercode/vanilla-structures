import "./footer.css";

export class Footer extends HTMLElement {
  constructor() {
    super();
    // prettier-ignore
    this.innerHTML = //html
    `
    <nav id="footer_container">
    <ul>
    <li><a href="#">one</a>
    </li><li><a href="#">two</a>
    </li><li><a href="#">three</a>
    </li>
    </ul>
    </nav>
        `;
  }
}
// footer
customElements.define("footer-component", Footer);