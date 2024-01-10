import "./navbar.css";

export class Navbar extends HTMLElement {
  constructor() {
    super();
    // prettier-ignore
    this.innerHTML = //html
    `
    <nav id="nav_container">
    <ul>
    <li><a href="/1">one</a></li>
    <li><a href="/2">two</a></li>
    <li><a href="/3">three</a></li>
    </ul>
    </nav>
        `;
  }
}
