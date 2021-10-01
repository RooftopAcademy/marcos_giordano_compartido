import Store from "./entities/Store";
import commonComponentsRendering from "./viewsLogic/commonComponentsRendering";
import router from "./routes/router";

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
  let footer: HTMLElement = document.getElementById("js-footer")!;
  let asideNavBarContainer: HTMLElement = document.getElementById("side-bar")!;
  asideNavBarContainer.style.display = "none";
  asideNavBarContainer.classList.remove("float");
  mainContent.classList.remove("disabled");
  footer.classList.remove("disabled");

  router(this.location.hash, store, mainContent);
});
