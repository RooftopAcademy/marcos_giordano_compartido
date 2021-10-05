import cartItem from "../components/cartItem";
import Product from "../entities/Product";
import CartItem from "../interfaces/CartItemInterface";
import Store from "../entities/Store";
import cartView from "../views/cartView";
import { updateProductsQuantityInCart } from "./productDetailsViewLogic";

export function cartViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent, store);
  addCartProducts(store, mainContent);
  cleanCartButtonEvent(store, mainContent);
}

//view rendering
function viewRendering(mainContent: HTMLElement, store: Store): void {
  mainContent.innerHTML = cartView(store);
}

//Add cart products to the cart view table
function addCartProducts(store: Store, mainContent: HTMLElement): void {
  const cart: Array<Product> = store.cart.showAll();
  const cartReduced: Array<CartItem> = arrangeCartElements(cart);
  fillCartViewTable(cartReduced);
}

//take product from cart and arrange by id
function arrangeCartElements(cart: Array<Product>): Array<CartItem> {
  const cartReduced: Array<CartItem> = [];
  cart.forEach((item) => {
    const itemSearch: Array<CartItem> = cartReduced.filter(
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
  return cartReduced;
}

//load cart products in cart view table
function fillCartViewTable(cartReduced: Array<CartItem>) {
  const cartTable: HTMLElement = document.getElementById("cart-table")!;
  if (cartReduced.length != 0) {
    cartReduced.forEach((item: CartItem) => {
      cartTable.innerHTML += cartItem(item);
    });
  }
}

// Remove products from cart button event
function cleanCartButtonEvent(store: Store, mainContent: HTMLElement): void {
  const cleanCartBtn: HTMLElement = document.getElementById("clean-cart-btn")!;
  if (cleanCartBtn) {
    cleanCartBtn.addEventListener("click", function () {
      store.cart.clear();
      viewRendering(mainContent, store);
      updateProductsQuantityInCart(store);
    });
  }
}
