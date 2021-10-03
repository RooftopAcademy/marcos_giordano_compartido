import productCarrousel from "../components/productCarrousel";
import Product from "../entities/Product";
import Store from "../entities/Store";
import homeView from "../views/homeView";

export function homeViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent);
  loadCarrousselProducts(store);
}

//view rendering
function viewRendering(mainContent: HTMLElement): void {
  mainContent.innerHTML = homeView();
}

//load store products inside the carrousel according to price discounts
function loadCarrousselProducts(store: Store): void {
  let productCarrouselContainer: HTMLElement = document.getElementById(
    "product-carrousel-container"
  )!;

  let discountProducts = filterProductsByDiscount(store.showCatalog());

  discountProducts.forEach((product: Product) => {
    productCarrouselContainer.innerHTML += productCarrousel(product);
  });
}

function filterProductsByDiscount(productList: Array<Product>): Array<Product> {
  return productList.filter((product) => product.discount > 0);
}
