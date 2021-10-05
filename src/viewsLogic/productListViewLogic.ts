import productItem from "../components/productItem";
import Product from "../entities/Product";
import Store from "../entities/Store";
import productListView from "../views/productListView";

export function productListViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent);
  renderProductItems(store);
}

//view rendering
function viewRendering(mainContent: HTMLElement): void {
  mainContent.innerHTML = productListView();
}

//take products from store and render
function renderProductItems(store: Store): void {
  const productContainer: HTMLElement =
    document.getElementById("product-container")!;

  store.showCatalog().forEach((product: Product) => {
    productContainer.innerHTML += productItem(product);
  });
}
