import Store from "./services/Store";
import API from "./services/API";
import "./app.css";
import { loadData } from "./services/Menu";
import Router from "./services/Router.js";

// Link my Web Components
// MenuPage is an example
import "./components/MenuPage.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
