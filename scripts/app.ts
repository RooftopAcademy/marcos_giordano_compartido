import headerRendering from "../src/components/header.js";
import footerRendering from "../src/components/footer.js";
import asideNavBar from "../src/components/asideNavBar.js";
import Store from "../src/Store.js";
import returnCartView from "../src/views/cart.js";
import returnIndexView from "../src/views/index.js";
import returnProductDetailsView from "../src/views/product-details.js";
import returnProductListView from "../src/views/product-list.js";
import returnSignUpView from "../src/views/sign-up.js";
import Path from "../src/Path.js";

//Instanciate the store
let store: Store = new Store();
store.loadCatalog();
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

const routes: Array<Path> = [
	{ path: "/index.html", viewRendering: returnIndexView },
	{ path: "/productDetails.html", viewRendering: returnProductDetailsView },
	{ path: "/productList.html", viewRendering: returnProductListView },
	{ path: "/signUp.html", viewRendering: returnSignUpView },
	{ path: "/cart.html", viewRendering: returnCartView },
];

let path: string = window.location.pathname;

let view = routes.filter((p) => {
	return p.path == path;
});

if (view.length != 0) {
	view[0].viewRendering(store);
} else {
	mainContent.innerHTML = `<h1>Error 404</h1>`;
}
