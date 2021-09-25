import productComponent from "../components/product";
import Product from "../Product";
import Store from "../Store";

export default function returnProductListView(store: Store) {
	let productContainer: HTMLElement =
		document.getElementById("product-container")!;

	store.showCatalog().forEach((product: Product) => {
		productContainer.innerHTML += productComponent(product);
	});
}
