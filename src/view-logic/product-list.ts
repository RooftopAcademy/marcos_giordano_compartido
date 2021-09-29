import productComponent from "../components/product";
import Product from "../classes/Product";
import Store from "../classes/Store";

export default function ProductListView(store: Store) {
  let productContainer: HTMLElement =
    document.getElementById("product-container")!;

  store.showCatalog().forEach((product: Product) => {
    productContainer.innerHTML += productComponent(product);
  });
}
