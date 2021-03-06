import Store from "./entities/Store";
import router from "./routes/router";
import enableMainAndFooter from "./helpers/enableMainAndFooter";
import CommmonComponentsInterface from "./interfaces/CommonComponentsinterface";
import returnHome from "./helpers/returnHome";
import { commonComponentsRendering } from "./viewsLogic/commonComponentsRendering";

//Instanciate the store
const store: Store = new Store();
store.getLogedUser();

//common components rendering
const commonComponents: CommmonComponentsInterface = {
  header: document.getElementById("header")!,
  mainContent: document.getElementById("main-content")!,
  footer: document.getElementById("footer")!,
  asideNavBarContainer: document.getElementById("side-bar")!,
};

commonComponentsRendering(store, commonComponents);

//Views rendering through paths
returnHome();
router("", store, commonComponents.mainContent);

window.addEventListener("hashchange", function () {
  enableMainAndFooter(commonComponents);
  router(this.location.hash, store, commonComponents.mainContent);
});
