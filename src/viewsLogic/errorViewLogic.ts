import Store from "../entities/Store";
import errorView from "../views/errorView";

export function errorViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent);
}
//view rendering
function viewRendering(mainContent: HTMLElement): void {
  mainContent.innerHTML = errorView();
}
