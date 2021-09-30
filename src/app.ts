import Store from "./classes/Store";
import commonComponentsRendering from "./views-logic/commonComponentsRendering";
import Router from "./routes/routes";

//Instanciate the store
let store: Store = new Store();
store.loadCatalog();
store.cart.load();
store.loadUser();

//common components rendering
let mainContent: HTMLElement = document.querySelector("#main-content")!;
commonComponentsRendering(store, mainContent);

//Views rendering through paths
Router(store, mainContent);
