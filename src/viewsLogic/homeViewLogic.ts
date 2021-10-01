import productCarrousel from "../components/productCarrousel";
import Product from "../entities/Product";
import Store from "../entities/Store";
import homeView from "../views/homeView";

export default function homeViewLogic(store: Store, mainContent: HTMLElement) {
  mainContent.innerHTML = homeView();

  let productCarrouselContainer: HTMLElement = document.getElementById(
    "product-carrousel-container"
  )!;

  store.showCatalog().forEach((product: Product) => {
    productCarrouselContainer.innerHTML += productCarrousel(product);
  });
}
