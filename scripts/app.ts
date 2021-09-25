import headerRendering from "../src/components/header.js";
import footerRendering from "../src/components/footer.js";
import asideNavBar from "../src/components/asideNavBar.js";
import products from "../scripts/products.js";
import Store from "../src/Store.js";

//Instanciate the store
let store: Store = new Store();
store.loadCatalog(products());
store.cart.load();
store.loadUser();

//header rendering

let jsHeader: HTMLElement = document.getElementById("js-header")!;
jsHeader.innerHTML = headerRendering(store);

//footer rendering

let jsFooter: HTMLElement = document.getElementById("js-footer")!;
jsFooter.innerHTML = footerRendering();

//aside navigation bar rendering

let asideNavBarContainer: HTMLElement = document.getElementById("side-bar")!;
asideNavBarContainer.innerHTML = asideNavBar(store);

//Burger Button functionality

let burgerButton: HTMLElement = document.querySelector("#burger-button")!;

let sideBar: HTMLElement = document.querySelector("#side-bar")!;
let mainContent: HTMLElement = document.querySelector("#main-content")!;
let footer: HTMLElement = document.querySelector("#footer")!;

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
