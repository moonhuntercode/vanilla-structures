import Store from "./services/Store";
import API from "./services/API";
import "./styles.css";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// Link my Web Components
// MenuPage is an example
import {MenuPage} from './components';
import { DetailsPage } from "./components";
import { OrderPage } from "./components";
import {ProductItem} from './components';


// import "./components/MenuPage.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
