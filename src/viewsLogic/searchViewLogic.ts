import Store from "../entities/Store";
import searchView from "../views/searchView";

export function searchViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent);
}
//view rendering
function viewRendering(mainContent: HTMLElement): void {
  mainContent.innerHTML = searchView();
}
