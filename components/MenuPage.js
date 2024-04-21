import styles from "./MenuPage.css";
export class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    styles(this.root).mount();
    const styles = document.createElement("style");
    styles.innerHTML = SHADOM_STYLE;
    this.root.appendChild(styles);

    // async function loadCss() {
    //   const request = await fetch("./components/MenuPage.css");
    //   const css = await request.text();
    //   styles.textContent = css;
    // }
    // loadCss();

    // prettier - ignore;
    // this.innerHTML =
    //   //html
    //   `
    //   <style>${styles}</style>
    //   `;
  }

  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("appmenuchange", () => {
      this.render();
    });
  }
  render() {
    if (app.store.menu) {
      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `
          <h3>${category.name}</h3>
          <ul class="category">
          </ul>
          `;
        this.root.querySelector("#menu").appendChild(liCategory);

        category.products.map((product) => {
          const item = document.createElement("product-item");
          item.dataset.product = JSON.stringify(product);
          liCategory.querySelector("ul").appendChild(item);
        });
      }
    } else {
      this.root.querySelector("#menu").innerHTML = "Loading....";
    }
  }
}

customElements.define("menu-page", MenuPage);
