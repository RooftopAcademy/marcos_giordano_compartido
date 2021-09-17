import store from "./app.js";
import productComponent from "../src/components/product.js";

let productContainer = document.getElementById("product-container");

store.showCatalog().forEach((product) => {
	productContainer.innerHTML += productComponent(product);
});
