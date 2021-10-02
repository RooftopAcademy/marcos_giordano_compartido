import cartItem from "../components/cartItem";
import Product from "../entities/Product";
import CartItem from "../interfaces/CartItemInterface";
import Store from "../entities/Store";
import cartView from "../views/cartView";

export default function CartViewLogic(store: Store, mainContent: HTMLElement) {
  mainContent.innerHTML = cartView();
  let cartTable: HTMLElement = document.getElementById("cart-table")!;
  let cart: Array<Product> = store.cart.showAll();
  let cartReduced: Array<CartItem> = [];

  cart.forEach((item) => {
    let itemSearch: Array<CartItem> = cartReduced.filter(
      (p: CartItem) => p.item.id == item.id
    );
    if (itemSearch.length === 0) {
      cartReduced.push({
        item: item,
        amount: 1,
      });
    } else {
      itemSearch[0].amount++;
    }
  });

  if (cartReduced.length === 0) {
    mainContent.innerHTML = "<h1>Usted no posee artículos en su carrito</h1>";
  } else {
    cartReduced.forEach((item: CartItem) => {
      cartTable.innerHTML += cartItem(item);
    });
  }

  let cleanCartBtn: HTMLElement = document.getElementById("clean-cart-btn")!;
  if (cleanCartBtn != null) {
    cleanCartBtn.addEventListener("click", function () {
      store.cart.clear();
      mainContent.innerHTML = "<h1>Usted no posee artículos en su carrito</h1>";
      let productQuantity: HTMLElement =
        document.getElementById("cart-quantity")!;
      productQuantity.innerHTML = ` &nbsp ${store.cart.showAll().length}`;
    });
  }
}