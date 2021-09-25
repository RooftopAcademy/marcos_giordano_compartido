import productCarrousel from "../components/productCarrousel.js";
import Product from "../Product.js";
import Store from "../Store.js";

export default function returnIndexView(store: Store) {
	let productCarrouselContainer: HTMLElement = document.getElementById(
		"product-carrousel-container"
	)!;

	store.showCatalog().forEach((product: Product) => {
		productCarrouselContainer.innerHTML += productCarrousel(product);
	});
}
