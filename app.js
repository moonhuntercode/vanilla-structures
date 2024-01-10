import Store from "./services/Store";
import API from "./services/API";
import "./app.css";
import { loadData } from "./services/Menu";
import Router from "./services/Router";
window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});