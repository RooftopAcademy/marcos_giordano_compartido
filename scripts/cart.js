import store from "./app.js";
import cartItem from "../src/components/cartItem.js";
var cartTable = document.getElementById("cart-table");
var cart = store.cart.showAll();
var cartReduced = [];
cart.forEach(function (item) {
    var itemSearch = cartReduced.filter(function (p) { return p.item.id == item.id; });
    if (itemSearch.length === 0) {
        cartReduced.push({
            item: item,
            amount: 1,
        });
    }
    else {
        itemSearch[0].amount++;
    }
});
var mainContent = document.getElementById("main-content");
if (cartReduced.length === 0) {
    mainContent.innerHTML = "<h1>Usted no posee artículos en su carrito</h1>";
}
else {
    cartReduced.forEach(function (item) {
        cartTable.innerHTML += cartItem(item);
    });
}
var cleanCartBtn = document.getElementById("clean-cart-btn");
cleanCartBtn.addEventListener("click", function () {
    store.cart.clear();
    mainContent.innerHTML = "<h1>Usted no posee artículos en su carrito</h1>";
    var productQuantity = document.getElementById("cart-quantity");
    productQuantity.innerHTML = " &nbsp " + store.cart.showAll().length;
});
