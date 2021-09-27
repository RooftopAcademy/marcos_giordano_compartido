import headerRendering from "../src/components/header";
import footerRendering from "../src/components/footer";
import asideNavBar from "../src/components/asideNavBar";
import Store from "../src/Store";
import returnCartView from "../src/views/cart";
import returnIndexView from "../src/views/index";
import returnProductDetailsView from "../src/views/product-details";
import returnProductListView from "../src/views/product-list";
import returnSignUpView from "../src/views/sign-up";
import Path from "../src/Path";
import returnUserView from "../src/views/user";
import PrivilegeEnum from "../src/PrivilegeEnum";
import createNewProductButton from "../src/components/createNewProductButton";
import returnNewProductView from "../src/views/new-product";

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

let navBarContainer: HTMLElement =
	document.getElementById("nav-bar-container")!;

if (store.user != null) {
	if (store.user.privilege === PrivilegeEnum.admin) {
		let anchor = document.createElement("a");
		anchor = createNewProductButton(anchor);
		navBarContainer.appendChild(anchor);
	}
}

//Burger Button functionality

let burgerButton: HTMLElement = document.querySelector("#burger-button")!;
let mainContent: HTMLElement = document.querySelector("#main-content")!;
let footer: HTMLElement = document.querySelector("#footer")!;

burgerButton.addEventListener("click", () => {
	if (asideNavBarContainer.style.display === "flex") {
		asideNavBarContainer.style.display = "none";
		asideNavBarContainer.classList.remove("float");
		mainContent.classList.remove("disabled");
		footer.classList.remove("disabled");
	} else {
		asideNavBarContainer.style.display = "flex";
		asideNavBarContainer.classList.add("float");
		mainContent.classList.add("disabled");
		footer.classList.add("disabled");
	}
});

//Views rendering through paths

const routes: Array<Path> = [
	{ path: "index.html", viewRendering: returnIndexView },
	{ path: "productDetails.html", viewRendering: returnProductDetailsView },
	{ path: "productList.html", viewRendering: returnProductListView },
	{ path: "signUp.html", viewRendering: returnSignUpView },
	{ path: "cart.html", viewRendering: returnCartView },
	{ path: "user.html", viewRendering: returnUserView },
	{ path: "newProduct.html", viewRendering: returnNewProductView },
];

let path: string = window.location.pathname;
let pathArray: Array<string> = path.split("/");

let view = routes.filter((p) => {
	return p.path == pathArray[pathArray.length - 1];
});

if (view.length != 0) {
	view[0].viewRendering(store);
} else {
	mainContent.innerHTML = `<h1>Error 404</h1>`;
}
