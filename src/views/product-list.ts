import productComponent from "../components/product.js";
import Product from "../Product.js";
import Store from "../Store.js";

export default function returnProductListView(store: Store) {
	let productContainer: HTMLElement =
		document.getElementById("product-container")!;

	store.showCatalog().forEach((product: Product) => {
		productContainer.innerHTML += productComponent(product);
	});
}
