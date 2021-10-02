import productItemComponent from "../components/productItemComponent";
import Product from "../entities/Product";
import Store from "../entities/Store";
import productListView from "../views/productListView";
import router from "../routes/router";

export default function ProductListViewLogic(
  store: Store,
  mainContent: HTMLElement
) {
  mainContent.innerHTML = productListView();

  let productContainer: HTMLElement =
    document.getElementById("product-container")!;

  store.showCatalog().forEach((product: Product) => {
    productContainer.innerHTML += productItemComponent(product);
  });
}
