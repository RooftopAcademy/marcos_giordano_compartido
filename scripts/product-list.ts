import store from "./app.js";
import productComponent from "../src/components/product.js";
import Product from "../src/Product.js";

let productContainer: HTMLElement =
	document.getElementById("product-container")!;

store.showCatalog().forEach((product: Product) => {
	productContainer.innerHTML += productComponent(product);
});
