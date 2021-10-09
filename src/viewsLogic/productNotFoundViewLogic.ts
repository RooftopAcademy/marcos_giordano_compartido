import Store from "../entities/Store";
import productNotFoundView from "../views/productNotFoundView";

export function productNotFoundViewLogic(
  store: Store,
  mainContent: HTMLElement
) {
  viewRendering(mainContent);
  console.log("pepe");
}
//view rendering
function viewRendering(mainContent: HTMLElement): void {
  mainContent.innerHTML = productNotFoundView();
}
