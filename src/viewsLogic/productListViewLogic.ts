import productItem from "../components/productItem";
import Product from "../entities/Product";
import Store from "../entities/Store";
import productListView from "../views/productListView";

export default function ProductListViewLogic(
  store: Store,
  mainContent: HTMLElement
) {
  mainContent.innerHTML = productListView();

  let productContainer: HTMLElement =
    document.getElementById("product-container")!;

  store.showCatalog().forEach((product: Product) => {
    productContainer.innerHTML += productItem(product);
  });
}
