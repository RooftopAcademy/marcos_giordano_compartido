import productCarrousel from "../components/productCarrousel";
import Product from "../classes/Product";
import Store from "../classes/Store";

export default function IndexView(store: Store) {
  let productCarrouselContainer: HTMLElement = document.getElementById(
    "product-carrousel-container"
  )!;

  store.showCatalog().forEach((product: Product) => {
    productCarrouselContainer.innerHTML += productCarrousel(product);
  });
}
