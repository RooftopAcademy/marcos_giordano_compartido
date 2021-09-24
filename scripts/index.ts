import store from "./app.js";
import productCarrousel from "../src/components/productCarrousel.js";
import Product from "../src/Product.js";

let productCarrouselContainer: HTMLElement = document.getElementById(
	"product-carrousel-container"
)!;

store.showCatalog().forEach((product: Product) => {
	productCarrouselContainer.innerHTML += productCarrousel(product);
});
