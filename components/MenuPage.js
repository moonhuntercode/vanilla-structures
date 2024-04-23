// host2.shadowRoot.adoptedStyleSheets = [css];

export class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    // let css = new CSSStyleSheet();
    // css.replaceSync("@import url('./MenuPage.css')");
    // this.shadowRoot.adoptedStyleSheets = [css];
    // const styles = document.createElement("style");

    // this.root.appendChild(styles);

    // async function loadCss() {
    //   const request = await fetch("./components/MenuPage.css", {
    //     method: "GET",
    //     headers: {
    //       "content-type": "text/css",
    //     },
    //   });
    //   const css = await request.text();
    //   styles.textContent = css;
    // }
    // loadCss();
    // <style>@import url("./MenuPage.css");</style>

    // prettier - ignore;
    this.root.innerHTML =
      /*html*/
      `<style>
        ul {
          --colorWow:red;
    list-style: none;
   margin: 0;padding: 0;
    
}

h3 {
    color: var(--color4);
    font-weight: normal;
    padding-top: 15px;
    font-size: 17px;
}

button {
    background-color: var(--color5);
    border: 0;
    margin: 10px 3%;
    padding: 5px 0;
    border-radius: 40px;
    color: var(--color3);
    font-size: 16px;
    flex-grow: 1;
}

article section div {
    flex-grow: 2;
}

ul {
    background-color: var(--color6);
    margin: 4px 6px;
    padding: 0px 12px;
    border-radius: 10px;
    padding-bottom: 10px;
}

article { 
    background-color: white;
    margin-bottom: 16px;
    padding-bottom: 1px;
    border-radius: 5px;
}

article img {
    width: 100%;
}

article a {
    text-decoration: none;
    display: block;
}

article section {
    display: flex;
}




h4 {
    margin: 8px 0 0 12px;
    color: #333D29;
    font-size: 18px;
    font-weight: bold;
}

.price {
    margin: 0px 0 0px 12px;
    color: #B08968
}
      </style>`;
  }
  // static get styles() {
  //   return /* css */ `
  //
  //     `;
  // }

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
