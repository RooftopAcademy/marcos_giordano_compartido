import productDetails from "../src/components/productDetails.js";
import productComments from "../src/components/productComments.js";
import products from "../scripts/products.js";
import store from "./app.js";
var url = new URL(window.location.href);
var productID = url.searchParams.get("id");
var product = products().filter(function (prod) { return prod.id == productID; });
var mainContent = document.getElementById("main-content");
mainContent.innerHTML = productDetails(product[0]);
var productCommentsContainer = document.getElementById("product-comments-container");
fetch("https://jsonplaceholder.typicode.com/comments")
    .then(function (response) {
    if (response.ok) {
        return response.json();
    }
    else {
        throw Error("Error de conexión con el servidor.");
    }
})
    .then(function (data) {
    var dataReduced = data.slice(0, 10);
    dataReduced.forEach(function (comment) {
        productCommentsContainer.innerHTML += productComments(comment);
    });
})
    .catch(function (err) {
    productCommentsContainer.innerHTML += "\n        <div class=\"product-details-comments-item\">\n            <h3>" + err + "</h3>\n        </div>\n        ";
});
var buyButtons = document.getElementsByName("buy-button");
buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var _this = this;
        var product = products().filter(function (prod) { return prod.id == _this.dataset.productId; });
        store.cart.add(product[0]);
        var productQuantity = document.getElementById("cart-quantity");
        productQuantity.innerHTML = " &nbsp " + store.cart.showAll().length;
    });
});
