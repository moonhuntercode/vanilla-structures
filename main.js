import "./components/template-reusable.css";
import "./components/main.css";

import { Main, Footer, Navbar } from "./components";

// main section component
customElements.define("main-component", Main);



// navbar
customElements.define("navbar-component", Navbar);

// prettier-ignore
document.querySelector("#mainContainer").innerHTML = //html
    `
<!--comments in html-->
<!--aquí el html que insertas a dentro de #main-->

<navbar-component></navbar-component>
<main-component content="testeando"></main-component>
<footer-component></footer-component>

`;

// navigation api config start
function shouldNotIntercept(navigationEvent) {
  return (
    !navigationEvent.canIntercept ||
    // If this is just a hashChange,
    // just let the browser handle scrolling to the content.
    navigationEvent.hashChange ||
    // If this is a download,
    // let the browser perform the download.
    navigationEvent.downloadRequest ||
    // If this is a form submission,
    // let that go to the server.
    navigationEvent.formData
  );
}
// Agrega un listener al objeto de navegación global
navigation.addEventListener("navigate", (navigateEvent) => {
  console.log("The new url will be:", navigateEvent.destination.url);
  // console.log(navigateEvent.destination.getState());
  // navigateEvent.preventDefault();
  // Salir temprano si esta navegación no debe ser interceptada
  if (shouldNotIntercept(navigateEvent)) return;

  const url = new URL(navigateEvent.destination.url);
  const webComponent = document.querySelector("main-component");
  /* if (url.pathname === "/1") {
    navigateEvent.intercept({ handler: loadIndexPage() });
  } else if (url.pathname === "/cats/") {
    navigateEvent.intercept({ handler: loadCatsPage });
  } */
  if (url.pathname == "/1") {
    navigateEvent.intercept({
      handler: () => {
        webComponent.innerHTML = "test 1";
        console.log("test 1");
      },
    });
  }
  if (url.pathname == "/2") {
    navigateEvent.intercept({
      handler: () => {
        webComponent.innerHTML = "test 2";
        console.log("test 2");
      },
    });
  }
  if (url.pathname == "/3") {
    navigateEvent.intercept({
      handler: () => {
        webComponent.innerHTML = "test 3";
        console.log("test 3");
      },
    });
  }
});
