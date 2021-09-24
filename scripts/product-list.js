import store from "./app.js";
import productComponent from "../src/components/product.js";
var productContainer = document.getElementById("product-container");
store.showCatalog().forEach(function (product) {
    productContainer.innerHTML += productComponent(product);
});
