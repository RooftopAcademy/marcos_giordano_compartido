import store from "./app.js";
import productCarrousel from "../src/components/productCarrousel.js";
var productCarrouselContainer = document.getElementById("product-carrousel-container");
store.showCatalog().forEach(function (product) {
    productCarrouselContainer.innerHTML += productCarrousel(product);
});
