import store from "./app.js";
import cartItem from "../src/components/cartItem.js";

let cartTable = document.getElementById("cart-table");
let cart = store.cart.showAll();
let cartReduced = [];

cart.forEach((item) => {
	let itemSearch = cartReduced.find((p) => p.item.id == item.id);
	if (!itemSearch) {
		cartReduced.push({
			item: item,
			amount: 1,
		});
	} else {
		itemSearch.amount++;
	}
});

let mainContent = document.getElementById("main-content");
if (cartReduced.length === 0) {
	mainContent.innerHTML = "<h1>Usted no posee artículos en su carrito</h1>";
} else {
	cartReduced.forEach((item) => {
		cartTable.innerHTML += cartItem(item);
	});
}

let cleanCartBtn = document.getElementById("clean-cart-btn");
cleanCartBtn.addEventListener("click", function () {
	store.cart.clear();

	mainContent.innerHTML = "<h1>Usted no posee artículos en su carrito</h1>";
});
