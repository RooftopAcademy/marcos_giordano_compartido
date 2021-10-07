import cartItem from "../components/cartItem";
import Store from "../entities/Store";
import cartView from "../views/cartView";
import { updateProductsQuantityInCart } from "./productDetailsViewLogic";
import CartItemInterface from "../interfaces/CartItemInterface";

export function cartViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent, store);
  addCartProducts(store);
  changeProductAmount(store);
  cleanCartButtonEvent(store, mainContent);
}

//view rendering
function viewRendering(mainContent: HTMLElement, store: Store): void {
  mainContent.innerHTML = cartView(store);
}

//Add cart products to the cart view table
function addCartProducts(store: Store): void {
  const cart: Array<CartItemInterface> = store.cart.showAll();
  fillCartViewTable(cart);
}

//load cart products in cart view table
function fillCartViewTable(cartReduced: Array<CartItemInterface>) {
  const cartTable: HTMLElement = document.getElementById("cart-table")!;
  if (cartReduced.length != 0) {
    cartReduced.forEach((item: CartItemInterface) => {
      cartTable.innerHTML += cartItem(item);
    });
  }
}

//add or substract the product quantity
function changeProductAmount(store: Store) {
  substractProductAmountEvent(store);
  addProductAmountEvent(store);
}

function substractProductAmountEvent(Store: Store) {
  const substractButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".js-substract");

  substractButtons.forEach((substractButton) => {
    substractButton.addEventListener("click", function () {
      console.log(this.dataset.productId);
    });
  });
}

function addProductAmountEvent(Store: Store) {
  const addButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".js-add");

  addButtons.forEach((addButton) => {
    addButton.addEventListener("click", function () {
      console.log(this.dataset.productId);
    });
  });
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
