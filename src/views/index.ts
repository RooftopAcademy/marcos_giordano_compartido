import productCarrousel from "../components/productCarrousel";
import Product from "../Product";
import Store from "../Store";

export default function returnIndexView(store: Store) {
	let productCarrouselContainer: HTMLElement = document.getElementById(
		"product-carrousel-container"
	)!;

	store.showCatalog().forEach((product: Product) => {
		productCarrouselContainer.innerHTML += productCarrousel(product);
	});
}
