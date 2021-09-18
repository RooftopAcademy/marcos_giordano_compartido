import store from "./app.js";
import productCarrousel from "../src/components/productCarrousel.js";

let productCarrouselContainer = document.getElementById(
	"product-carrousel-container"
);

store.showCatalog().forEach((product) => {
	productCarrouselContainer.innerHTML += productCarrousel(product);
});
