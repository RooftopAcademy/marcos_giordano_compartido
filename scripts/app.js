import headerRendering from "../src/components/header.js";
import footerRendering from "../src/components/footer.js";
import asideNavBar from "../src/components/asideNavBar.js";
import products from "../scripts/products.js";
import Store from "../src/Store.js";
//Instanciate the store
var store = new Store();
store.loadCatalog(products());
store.cart.load();
var cart = store.cart.showAll();
//header rendering
var jsHeader = document.getElementById("js-header");
jsHeader.innerHTML = headerRendering(cart);
//footer rendering
var jsFooter = document.getElementById("js-footer");
jsFooter.innerHTML = footerRendering();
//aside navigation bar rendering
var asideNavBarContainer = document.getElementById("side-bar");
asideNavBarContainer.innerHTML = asideNavBar();
//Burger Button functionality
var burgerButton = document.querySelector("#burger-button");
var sideBar = document.querySelector("#side-bar");
var mainContent = document.querySelector("#main-content");
var footer = document.querySelector("#footer");
burgerButton.addEventListener("click", function () {
    if (sideBar.style.display === "flex") {
        sideBar.style.display = "none";
        sideBar.classList.remove("float");
        mainContent.classList.remove("disabled");
        footer.classList.remove("disabled");
    }
    else {
        sideBar.style.display = "flex";
        sideBar.classList.add("float");
        mainContent.classList.add("disabled");
        footer.classList.add("disabled");
    }
});
export default store;
