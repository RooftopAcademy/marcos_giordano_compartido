import Store from "./entities/Store";
import commonComponentsRendering from "./viewsLogic/commonComponentsRendering";
import router from "./routes/router";
import enableMainAndFooter from "./helpers/enableMainAndFooter";

//Instanciate the store
let store: Store = new Store();
store.loadCatalog();
store.cart.load();
store.loadUser();

//common components rendering
let mainContent: HTMLElement = document.getElementById("main-content")!;
commonComponentsRendering(store, mainContent);

//Views rendering through paths

router("", store, mainContent);

window.addEventListener("hashchange", function () {
  let footer: HTMLElement = document.getElementById("footer")!;
  let asideNavBarContainer: HTMLElement = document.getElementById("side-bar")!;
  enableMainAndFooter(asideNavBarContainer, mainContent, footer);

  router(this.location.hash, store, mainContent);
});
