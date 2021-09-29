import Store from "../src/classes/Store";
import commonComponentsRendering from "../src/view-logic/commonComponentsRendering";
import Router from "./routes";

//Instanciate the store
let store: Store = new Store();
store.loadCatalog();
store.cart.load();
store.loadUser();

//common components rendering
let mainContent: HTMLElement = document.querySelector("#main-content")!;
commonComponentsRendering(store, mainContent);

//Views rendering through paths
let path: string = window.location.pathname;
Router(store, path, mainContent);
