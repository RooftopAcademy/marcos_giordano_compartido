import headerRendering from "../src/components/header.js";
import footerRendering from "../src/components/footer.js";
import asideNavBar from "../src/components/asideNavBar.js";
import products from "../scripts/products.js";
import Store from "../src/Store.js";

//Instanciate the store
let store = new Store();
store.loadCatalog(products());
store.cart.load();
let cart = store.cart.showAll();

//header rendering

let jsHeader = document.getElementById("js-header");
jsHeader.innerHTML = headerRendering(cart);

//footer rendering

let jsFooter = document.getElementById("js-footer");
jsFooter.innerHTML = footerRendering();

//aside navigation bar rendering

let asideNavBarContainer = document.getElementById("side-bar");
asideNavBarContainer.innerHTML = asideNavBar();

//Burger Button functionality

let burgerButton = document.querySelector("#burger-button");

let sideBar = document.querySelector("#side-bar");
let mainContent = document.querySelector("#main-content");
let footer = document.querySelector("#footer");

burgerButton.addEventListener("click", () => {
	if (sideBar.style.display === "flex") {
		sideBar.style.display = "none";
		sideBar.classList.remove("float");
		mainContent.classList.remove("disabled");
		footer.classList.remove("disabled");
	} else {
		sideBar.style.display = "flex";
		sideBar.classList.add("float");
		mainContent.classList.add("disabled");
		footer.classList.add("disabled");
	}
});

export default store;
